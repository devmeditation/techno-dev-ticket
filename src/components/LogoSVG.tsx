import React from "react";

export function LogoSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="120"
      fill="none"
      viewBox="0 0 223 62"
    >
      <g fill="#fff">
          <text x="75" y="25" fill="#FF03FF" className="font-bold text-4xl italic shadow shadow-fuchsia-500">
            Techno
          </text>
          <text x="160" y="60" fill="#2D3" className="font-extrabold text-4xl italic">
            Dev
          </text>
          
        </g>

      <mask
        id="mask0_29_949"
        style={{ maskType: "alpha" }}
        width="62"
        height="62"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <g fill="#F2D" clipPath="url(#clip1_29_949)">
          <path d="M44.865 14.277a5.491 5.491 0 005.492-5.493 5.483 5.483 0 00-5.492-5.493 5.483 5.483 0 00-5.492 5.493 5.483 5.483 0 005.492 5.493z"></path>
          <path d="M58.224 16.873a3.904 3.904 0 00-5.256-1.704 3.905 3.905 0 00-1.704 5.257c1.638 3.199 2.464 6.686 2.464 10.344 0 12.652-10.303 22.943-22.951 22.943-12.65 0-22.952-10.291-22.952-22.943 0-12.651 10.29-22.943 22.939-22.943A3.908 3.908 0 0034.67 3.92 3.916 3.916 0 0030.763.013C13.803 0 0 13.805 0 30.77c0 16.965 13.802 30.77 30.764 30.77 16.96 0 30.776-13.805 30.776-30.77 0-4.916-1.114-9.584-3.316-13.91v.013z"></path>
        </g>
      </mask>
      <g mask="url(#mask0_29_949)">
        <path
          fill="url(#paint0_radial_29_949)"
          d="M-2.948 -2.951H65.655V64.33300000000001H-2.948z"
        ></path>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_29_949"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(3.013 -109.405 386.063) scale(25.1011 30.3769)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2D3"></stop>
          <stop offset="0.357" stopColor="#2D5"></stop>
          <stop offset="1" stopColor="#F2D"></stop>
        </radialGradient>
        <clipPath id="clip0_29_949">
          <path
            fill="#fff"
            d="M0 0H146.24V43.674H0z"
            transform="translate(76.76 9.265)"
          ></path>
        </clipPath>
        <clipPath id="clip1_29_949">
          <path fill="#fff" d="M0 0H61.54V61.54H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

