const EMOJIS = ["🥖", "🍊", "🥗", "🫙", "🍞", "🥕"];

// Cache for emoji canvases
const emojiCache = {};

function getEmojiCanvas(emoji, size, ratio) {
  const key = `${emoji}-${size}-${ratio}`;
  if (!emojiCache[key]) {
    const canvas = document.createElement("canvas");
    const physicalSize = Math.round(size * ratio);
    const padding = Math.ceil(physicalSize * 0.25);
    const canvasSize = physicalSize + padding * 2;
    
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    
    const ctx = canvas.getContext("2d");
    ctx.font = `${physicalSize}px serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(emoji, canvasSize / 2, canvasSize / 2);
    
    emojiCache[key] = canvas;
  }
  return emojiCache[key];
}

function createParticle(logicalWidth, logicalHeight) {
  return {
    x: Math.random() * logicalWidth,
    y: Math.random() * logicalHeight,
    size: 12 + Math.random() * 16,
    speed: 0.18 + Math.random() * 0.52,
    sway: Math.random() * 1.2,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.1 + Math.random() * 0.3,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
  };
}

export function initParticleField(prefersReducedMotion) {
  const canvas = document.getElementById("particleCanvas");
  const hero = document.getElementById("home");
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let isActive = true;
  let lastFrame = 0;
  let logicalWidth = 0;
  let logicalHeight = 0;
  let ratio = 1;

  const resize = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    logicalWidth = canvas.offsetWidth;
    logicalHeight = canvas.offsetHeight;
    canvas.width = Math.floor(logicalWidth * ratio);
    canvas.height = Math.floor(logicalHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: window.innerWidth < 720 ? 88 : 156 }, () => createParticle(logicalWidth, logicalHeight));
  };

  const draw = (time) => {
    if (!lastFrame) lastFrame = time;
    const delta = Math.min((time - lastFrame) / 16.666, 4); // Cap to prevent large jumps on tab activation
    lastFrame = time;

    if (isActive) {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      particles.forEach((particle) => {
        particle.y -= particle.speed * 1.6 * delta;
        particle.x += Math.sin(time * 0.001 + particle.phase) * particle.sway * 0.22 * delta;

        if (particle.y < -40) {
          particle.y = logicalHeight + 40;
          particle.x = Math.random() * logicalWidth;
        }

        const sizeKey = Math.round(particle.size);
        const emojiCanvas = getEmojiCanvas(particle.emoji, sizeKey, ratio);
        
        ctx.globalAlpha = particle.opacity * (0.7 + Math.sin(time * 0.001 + particle.phase) * 0.3);
        const logicalCanvasSize = emojiCanvas.width / ratio;
        ctx.drawImage(
          emojiCanvas, 
          particle.x - logicalCanvasSize / 2, 
          particle.y - logicalCanvasSize / 2,
          logicalCanvasSize,
          logicalCanvasSize
        );
      });
      ctx.globalAlpha = 1;
    }

    requestAnimationFrame(draw);
  };

  resize();
  requestAnimationFrame(draw);

  window.addEventListener("resize", resize, { passive: true });
  new IntersectionObserver((entries) => {
    isActive = entries.some((entry) => entry.isIntersecting);
    if (!isActive) ctx.clearRect(0, 0, logicalWidth, logicalHeight);
  }, { rootMargin: "200px 0px 200px 0px" }).observe(hero);
}
