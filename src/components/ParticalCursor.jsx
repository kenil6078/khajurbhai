import React, { useEffect, useRef } from 'react';

const ParticalCursor = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const trail = useRef([]);

 const colors = [
  "#FF0000", "#FF4000", "#FF8000", "#FFBF00", "#FFFF00",
  "#BFFF00", "#80FF00", "#40FF00", "#00FF00", "#00FF40",
  "#00FF80", "#00FFBF", "#00FFFF", "#00BFFF", "#0080FF",
  "#0040FF", "#0000FF", "#4000FF", "#8000FF", "#BF00FF",
  "#FF00FF", "#FF00BF", "#FF0080", "#FF0040", "#FF0010"
];


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, width, height);

      // Add current mouse position to the trail
      trail.current.push({ x: mouse.current.x, y: mouse.current.y });

      // Keep trail length
      if (trail.current.length > 50) trail.current.shift();

      // Draw trail
      trail.current.forEach((p, i) => {
        const scale = i / trail.current.length;
        const radius = 10 * scale + 4;
        const alpha = 1 - scale;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(colors[i % colors.length], alpha);
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Convert hex color to rgba with alpha
  const hexToRgba = (hex, alpha) => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[99]"
    />
  );
};

export default ParticalCursor;
