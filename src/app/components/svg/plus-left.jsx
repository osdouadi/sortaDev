import React from 'react'

export default function PlusLeft({color}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1149"
        height="56"
        fill="none"
        viewBox="0 0 1149 56"
        className="absolute -left-8  top-1/2 -translate-y-1/2 w-[30rem] lg:w-[35rem] lg:-left-10"
      >
        <rect width="6" height="24" x="9" y="16" fill={color} rx="3"></rect>
        <rect
          width="6"
          height="24"
          y="31"
          fill={color}
          rx="3"
          transform="rotate(-90 0 31)"
        ></rect>
        <rect width="6" height="24" x="35" y="32" fill={color} rx="3"></rect>
        <rect
          width="6"
          height="24"
          x="26"
          y="47"
          fill={color}
          rx="3"
          transform="rotate(-90 26 47)"
        ></rect>
        <rect width="6" height="24" x="35" fill={color} rx="3"></rect>
        <rect
          width="6"
          height="24"
          x="26"
          y="15"
          fill={color}
          rx="3"
          transform="rotate(-90 26 15)"
        ></rect>
      </svg>
    );
}
