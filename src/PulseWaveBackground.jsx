import React, { useEffect, useRef } from "react";

export default function PulseWaveBackground() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let mouse = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouse.x - 4 + "px";
        cursorRef.current.style.top = mouse.y - 4 + "px";
      }
    });

    const dotCount = 120;
    let pulseOffset = 0;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2;
      const radius = 80 + (i % 5) * 40;
      dots.push({
        angle,
        baseRadius: radius,
        radius,
        x: 0,
        y: 0,
        size: 3 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        interactionTime: 0,
        isInteracting: false,
      });
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      pulseOffset += 0.02;

      dots.forEach((dot, index) => {
        const basePulse = Math.sin(pulseOffset + dot.pulsePhase) * 15;
        const currentRadius = dot.baseRadius + basePulse;

        let dotX = centerX + Math.cos(dot.angle) * currentRadius;
        let dotY = centerY + Math.sin(dot.angle) * currentRadius;

        const dotDistance = Math.sqrt(
          Math.pow(mouse.x - dotX, 2) + Math.pow(mouse.y - dotY, 2)
        );

        if (dotDistance < 60 && dotDistance > 0) {
          const influence = (60 - dotDistance) / 60;
          const attractionStrength = influence * 12;

          if (!dot.isInteracting) {
            dot.isInteracting = true;
            dot.interactionTime = 180;
          }
          const dx = mouse.x - dotX;
          const dy = mouse.y - dotY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          dotX += (dx / distance) * attractionStrength;
          dotY += (dy / distance) * attractionStrength;
        }

        if (dot.isInteracting) {
          dot.interactionTime--;
          if (dot.interactionTime <= 0) {
            dot.isInteracting = false;
          }
        }

        dot.x = dotX;
        dot.y = dotY;

        const pulseAlpha =
          0.4 + Math.sin(pulseOffset * 2 + dot.pulsePhase) * 0.6;
        const proximityAlpha =
          dotDistance < 100
            ? 0.7 + ((100 - dotDistance) / 100) * 0.3
            : 0.7;

        let dotColor = "#00ff88";
        let shadowColor = "#00ff88";
        if (dot.isInteracting) {
          const progress = dot.interactionTime / 180;
          if (progress > 0.7) {
            dotColor = "#00aaff";
            shadowColor = "#00aaff";
          } else {
            const fadeProgress = progress / 0.7;
            const red = Math.floor(0 * fadeProgress + 0 * (1 - fadeProgress));
            const green = Math.floor(
              170 * fadeProgress + 255 * (1 - fadeProgress)
            );
            const blue = Math.floor(
              255 * fadeProgress + 136 * (1 - fadeProgress)
            );
            dotColor = `rgb(${red}, ${green}, ${blue})`;
            shadowColor = dotColor;
          }
        }

        ctx.save();
        ctx.globalAlpha = pulseAlpha * proximityAlpha;
        ctx.fillStyle = dotColor;
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        dots.forEach((otherDot, otherIndex) => {
          if (index < otherIndex) {
            const distance = Math.sqrt(
              Math.pow(dot.x - otherDot.x, 2) +
                Math.pow(dot.y - otherDot.y, 2)
            );
            if (distance < 80) {
              let lineColor = "#00ff88";
              if (dot.isInteracting || otherDot.isInteracting) {
                lineColor = dot.isInteracting
                  ? dotColor
                  : otherDot.isInteracting
                  ? otherDot.interactionTime > 126
                    ? "#00aaff"
                    : `rgb(0, ${Math.floor(
                        170 + 85 * (1 - otherDot.interactionTime / 126)
                      )}, ${Math.floor(
                        255 - 119 * (1 - otherDot.interactionTime / 126)
                      )})`
                  : "#00ff88";
              }
              ctx.globalAlpha = ((80 - distance) / 80) * 0.3;
              ctx.strokeStyle = lineColor;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.stroke();
            }
          }
        });
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Styles (can also use CSS)
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        id="pulse-bg-canvas"
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          width: "8px",
          height: "8px",
          background: "#00ff88",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10,
          boxShadow: "0 0 10px #00ff88",
        }}
      />
    </div>
  );
}
