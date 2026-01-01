import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FloatingDonateButton.module.css";

type FloatingDonateButtonProps = {
  onClick?: () => void;
};

type Mode = "shown" | "disintegrating" | "assembling";

const ANIM_MS = 520;

const FloatingDonateButton: React.FC<FloatingDonateButtonProps> = ({ onClick }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>("shown");

  const timerRef = useRef<number | null>(null);
  const prevPathRef = useRef<string>(pathname);

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  // Stable particle vectors (drift to RIGHT)
  const particles = useMemo(() => {
    const count = 44;
    return Array.from({ length: count }).map((_, i) => {
      const dx = 40 + Math.random() * 160;
      const dy = (Math.random() * 2 - 1) * 90;
      const dly = Math.floor(Math.random() * 110);
      const size = 3 + Math.random() * 5;
      return { id: i, dx, dy, dly, size };
    });
  }, []);

  // Header Donate click event -> disintegrate then navigate
  useEffect(() => {
    const handler = () => {
      setMode("disintegrating");
      clearTimer();
      timerRef.current = window.setTimeout(() => {
        navigate("/donate");
      }, ANIM_MS);
    };

    window.addEventListener("ababeel:donateNavigate", handler as EventListener);
    return () => {
      window.removeEventListener("ababeel:donateNavigate", handler as EventListener);
      clearTimer();
    };
  }, [navigate]);

  // Route transition: leaving donate -> assemble then shown
  useEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname;

    const isDonate = pathname === "/donate" || pathname === "/donete";
    const wasDonate = prev === "/donate" || prev === "/donete";

    if (isDonate) return;

    if (wasDonate && !isDonate) {
      setMode("assembling");
      clearTimer();
      timerRef.current = window.setTimeout(() => {
        setMode("shown");
      }, ANIM_MS);
      return;
    }

    // Normal pages: keep shown
    if (mode !== "disintegrating") setMode("shown");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Hide on donate page (completely)
  if (pathname === "/donate" || pathname === "/donete") return null;

  const handleClick = () => {
    setMode("disintegrating");
    clearTimer();

    timerRef.current = window.setTimeout(() => {
      if (onClick) {
        onClick();
        return;
      }
      navigate("/donate");
    }, ANIM_MS);
  };

  const showParticles = mode === "disintegrating" || mode === "assembling";

  return (
    <div className={`${styles.wrapper} ${styles[mode]}`}>
      {/* Particle layer only during animations */}
      {showParticles && (
        <div className={styles.particles} aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className={styles.particle}
              style={
                {
                  ["--dx" as any]: `${p.dx}px`,
                  ["--dy" as any]: `${p.dy}px`,
                  ["--dly" as any]: `${p.dly}ms`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      {/* Button */}
      <button
        type="button"
        className={styles.floatingDonateBtn}
        onClick={handleClick}
        aria-label="Donate Now"
        title="Donate Now"
      >
        <div className={styles.inner}>
          <div className={styles.iconBox} aria-hidden="true">
            🤲
          </div>

          <div className={styles.text}>
            <div className={styles.title}>Donate Now</div>
            <div className={styles.sub}>Support a noble cause</div>
            <div className={styles.sub}>Support Ababeel Foundation</div>
          </div>

          <div className={styles.chev} aria-hidden="true">
            ›
          </div>
        </div>
      </button>
    </div>
  );
};

export default FloatingDonateButton;
