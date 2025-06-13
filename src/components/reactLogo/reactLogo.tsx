import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './reactLogo.module.css';
import { ReactLogoProps } from './reactLogo.types';

// Helper to get ellipse point by angle (radians)
function getEllipsePoint(rx: number, ry: number, angle: number) {
  return {
    x: rx * Math.cos(angle),
    y: ry * Math.sin(angle),
  };
}

// Helper to create a short arc path (SVG) from angle1 to angle2
function describeArc(rx: number, ry: number, angle1: number, angle2: number) {
  const p1 = getEllipsePoint(rx, ry, angle1);
  const p2 = getEllipsePoint(rx, ry, angle2);
  // Large arc flag is 0 because the arc is always < 180deg
  return `M${p1.x},${p1.y} A${rx},${ry} 0 0,1 ${p2.x},${p2.y}`;
}

// For each electron, define its rotation offset (in radians)
const ELECTRON_OFFSETS = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
const ELLIPSE_ROTATIONS = [0, 60, 120];

export const AnimatedReactLogo: React.FC<ReactLogoProps> = ({ className }) => {
  // Animation state for all electrons
  const [angle, setAngle] = useState(0); // radians
  const requestRef = useRef<number | undefined>(undefined);
  const duration = 4; // seconds for full orbit
  const rx = 110;
  const ry = 42;
  const electronRadius = 8;
  const trailLength = Math.PI / 5; // short arc (about 36deg)

  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000; // seconds
      // Orbit: angle from 0 to 2PI over duration
      const newAngle = ((elapsed % duration) / duration) * Math.PI * 2;
      setAngle(newAngle);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => requestRef.current && cancelAnimationFrame(requestRef.current);
  }, []);

  // For each electron, calculate its position and trail
  const electrons = ELECTRON_OFFSETS.map((offset, i) => {
    // The ellipse is rotated, so we just rotate the group in SVG
    const electronAngle = angle + offset;
    const electronPos = getEllipsePoint(rx, ry, electronAngle);
    const trailStart = electronAngle - trailLength;
    const trailEnd = electronAngle;
    const trailPath = describeArc(rx, ry, trailStart, trailEnd);
    return {
      pos: electronPos,
      trailPath,
      rotation: ELLIPSE_ROTATIONS[i],
    };
  });

  return (
    <div className={clsx(styles.container, className)}>
      <svg width='800' height='800' viewBox='-150 -150 300 300'>
        <defs>
          <filter id='glow' x='-30%' y='-30%' width='160%' height='160%'>
            <feGaussianBlur stdDeviation='4' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          {/* Subtle blur for trail */}
          <filter id='trail-blur' x='-20%' y='-20%' width='140%' height='140%'>
            <feGaussianBlur stdDeviation='2' />
          </filter>
          {/* Gradient for trail fade-out (uses CSS variable) */}
          <linearGradient id='trail-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='var(--trail-color)' stopOpacity='1' />
            <stop offset='100%' stopColor='var(--trail-color)' stopOpacity='0' />
          </linearGradient>
          {/* Electron bulb gradient: white center, electron color edge, transparent outer */}
          <radialGradient id='electron-bulb-gradient' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#fff' stopOpacity='1' />
            <stop offset='40%' stopColor='var(--electron-color)' stopOpacity='1' />
            <stop offset='100%' stopColor='var(--electron-color)' stopOpacity='0' />
          </radialGradient>
          {/* Nucleus bulb gradient: very bright white center, logo color edge, transparent outer */}
          <radialGradient id='nucleus-bulb-gradient' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#fff' stopOpacity='1' />
            <stop offset='30%' stopColor='#fff' stopOpacity='0.8' />
            <stop offset='60%' stopColor='var(--logo-color)' stopOpacity='0.7' />
            <stop offset='100%' stopColor='var(--logo-color)' stopOpacity='0' />
          </radialGradient>
        </defs>
        <g>
          <animateTransform attributeName='transform' type='rotate' from='0 0 0' to='360 0 0' dur='25s' repeatCount='indefinite' />

          {/* Static ellipses and glowing nucleus bulb */}
          <g className={styles.ellipses}>
            <ellipse cx='0' cy='0' rx={rx} ry={ry} />
            <ellipse cx='0' cy='0' rx={rx} ry={ry} transform='rotate(60)' />
            <ellipse cx='0' cy='0' rx={rx} ry={ry} transform='rotate(120)' />
            {/* Glowing nucleus bulb */}
            <circle cx='0' cy='0' r='18' fill='url(#nucleus-bulb-gradient)' stroke='none' />
          </g>

          {/* Animated subtle trails and electrons for all 3 */}
          {electrons.map((e, i) => (
            <g key={i} transform={`rotate(${e.rotation})`}>
              <path className={styles.trail} d={e.trailPath} stroke='url(#trail-gradient)' />
              <circle className={styles.electron} cx={e.pos.x} cy={e.pos.y} r={electronRadius} fill='url(#electron-bulb-gradient)' />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
