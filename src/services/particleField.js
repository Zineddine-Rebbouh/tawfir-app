const EMOJIS = ["🥖", "🍊", "🥗", "🫙", "🍞", "🥕"];

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

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    logicalWidth = canvas.offsetWidth;
    logicalHeight = canvas.offsetHeight;
    canvas.width = Math.floor(logicalWidth * ratio);
    canvas.height = Math.floor(logicalHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: window.innerWidth < 720 ? 88 : 156 }, () => createParticle(logicalWidth, logicalHeight));
  };

  const draw = (time) => {
    if (isActive && time - lastFrame >= 33) {
      lastFrame = time;
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      particles.forEach((particle) => {
        particle.y -= particle.speed * 1.6;
        particle.x += Math.sin(time * 0.001 + particle.phase) * particle.sway * 0.22;

        if (particle.y < -40) {
          particle.y = logicalHeight + 40;
          particle.x = Math.random() * logicalWidth;
        }

        ctx.globalAlpha = particle.opacity * (0.7 + Math.sin(time * 0.001 + particle.phase) * 0.3);
        ctx.font = `${particle.size}px serif`;
        ctx.fillText(particle.emoji, particle.x, particle.y);
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
