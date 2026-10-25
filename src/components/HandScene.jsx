// Original vector ornament, inspired by the reaching-hands composition.
export default function HandScene() {
  return (
    <div className="hand-scene" aria-hidden="true">
      <svg viewBox="0 0 1000 280" className="reaching-hands">
        <defs>
          <linearGradient id="hand-metal" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#eee" />
            <stop offset=".45" stopColor="#b1b0ab" />
            <stop offset=".7" stopColor="#e0dfda" />
            <stop offset="1" stopColor="#8c8b88" />
          </linearGradient>
          <pattern
            id="hand-dots"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r=".8" fill="#777" />
          </pattern>
        </defs>
        <g className="hand-left">
          <path
            d="M-30 130C70 155 158 184 232 184L310 161C331 153 348 158 335 169L287 194L385 182C407 180 415 188 392 196L304 219L377 211C399 211 400 222 378 228L291 246C264 251 239 244 211 236L-30 192Z"
            fill="url(#hand-metal)"
          />
          <path
            d="M-30 130C70 155 158 184 232 184L310 161C331 153 348 158 335 169L287 194L385 182C407 180 415 188 392 196L304 219L377 211C399 211 400 222 378 228L291 246C264 251 239 244 211 236L-30 192Z"
            fill="url(#hand-dots)"
            opacity=".5"
          />
        </g>
        <g className="hand-right">
          <path
            d="M1030 209L863 161C843 155 828 139 803 123L747 94C730 84 712 88 696 88L624 76C605 71 600 83 619 92L679 110L710 113L665 131L619 164C604 175 613 188 628 179L675 155L709 148L684 185C674 201 687 209 701 195L730 164L747 151L735 193C732 208 745 211 752 196L774 163L803 179C833 202 853 216 882 220L1030 265Z"
            fill="url(#hand-metal)"
          />
        </g>
      </svg>
      <div className="scene-star">✦</div>
      <div className="scene-caption">CONNECTING IDEAS. BUILDING SYSTEMS.</div>
    </div>
  );
}
