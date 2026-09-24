import React from "react";

// Original, friendly crocodile mascot logo (hand-drawn SVG, not a copy of any brand)
export default function Croco({ size = 44, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mascotte crocodile CrokoTech"
    >
      <defs>
        <linearGradient id="crocoBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#0f7a4d" />
        </linearGradient>
      </defs>
      {/* lower jaw */}
      <path
        d="M14 62 Q50 84 88 60 Q86 74 60 78 Q30 82 16 70 Z"
        fill="#0f7a4d"
      />
      <path d="M22 68 l6 6 6-6 6 6 6-6 6 6 6-6" fill="#ffffff" opacity="0.9" />
      {/* head */}
      <path
        d="M10 46 Q10 30 34 28 L84 34 Q94 36 92 46 Q90 58 60 60 Q26 62 14 56 Q10 52 10 46 Z"
        fill="url(#crocoBody)"
      />
      {/* snout ridge */}
      <path d="M40 34 l5 6 5-6 5 6 5-6 5 6 5-6" fill="#0f7a4d" opacity="0.5" />
      {/* eye bump */}
      <circle cx="26" cy="30" r="11" fill="url(#crocoBody)" />
      <circle cx="26" cy="29" r="6" fill="#ffffff" />
      <circle cx="28" cy="30" r="3" fill="#0b3d2c" />
      {/* nostril */}
      <circle cx="86" cy="42" r="2.4" fill="#0b3d2c" />
      {/* teeth top */}
      <path d="M30 56 l4 6 4-6 4 6 4-6 4 6 4-6 4 6 4-6" fill="#ffffff" />
    </svg>
  );
}
