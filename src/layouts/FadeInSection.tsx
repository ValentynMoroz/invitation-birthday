import React, { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type FadeInProps = {
  children: ReactNode;
  direction?: Direction;
  duration?: number; // ms
  delay?: number; // ms
  once?: boolean; // анімація лише 1 раз
  className?: string;
};

export default function FadeIn({
  children,
  direction = "up",
  duration = 1000,
  delay = 0,
  once = true,
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // повага до Reduced Motion
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      // fallback: показати відразу, якщо немає API
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && observer) observer.unobserve(entry.target);
          } else {
            if (!once) setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [once]);

  const startClass = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "-translate-x-12",
    right: "translate-x-12",
  }[direction];

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`transform transition-all ease-out ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${startClass}`
      } ${className}`}>
      {children}
    </div>
  );
}
