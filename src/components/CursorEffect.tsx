import { useEffect, useRef } from "react";

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<{ x: number; y: number; alpha: number; radius: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.5,
        radius: 3,
      });
      if (trailRef.current.length > 30) trailRef.current.shift();
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Glow at cursor
      const { x, y } = mouseRef.current;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 120);
      gradient.addColorStop(0, "rgba(26, 188, 156, 0.08)");
      gradient.addColorStop(1, "rgba(26, 188, 156, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(x - 120, y - 120, 240, 240);

      // Trail
      trailRef.current.forEach((point, i) => {
        point.alpha -= 0.015;
        point.radius += 0.3;
        if (point.alpha > 0) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(26, 188, 156, ${point.alpha * 0.3})`;
          ctx.fill();
        }
      });
      trailRef.current = trailRef.current.filter((p) => p.alpha > 0);

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
};

export default CursorEffect;
