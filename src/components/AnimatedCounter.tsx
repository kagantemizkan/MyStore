import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  durationMs?: number;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({ to, durationMs = 1200, formatter }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (to === undefined || to === null) return;

    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(eased * to);
      setDisplayValue(nextValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [to, durationMs]);

  const text = formatter ? formatter(displayValue) : String(displayValue);

  return <span>{text}</span>;
}
