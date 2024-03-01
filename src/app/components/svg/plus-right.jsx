import React from 'react';

function PlusRight({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1149"
      height="56"
      fill="none"
      viewBox="0 0 1149 56"
      className="absolute -right-8 top-1/2 -translate-y-1/2  w-[30rem] lg:w-[35rem] lg:-right-10"
    >
      <rect
        width="6"
        height="24"
        fill={color}
        rx="3"
        transform="matrix(-1 0 0 1 1140 16)"
      ></rect>
      <rect
        width="6"
        height="24"
        fill={color}
        rx="3"
        transform="matrix(0 -1 -1 0 1149 31)"
      ></rect>
      <rect
        width="6"
        height="24"
        fill={color}
        rx="3"
        transform="matrix(-1 0 0 1 1114 32)"
      ></rect>
      <rect
        width="6"
        height="24"
        fill={color}
        rx="3"
        transform="matrix(0 -1 -1 0 1123 47)"
      ></rect>
      <rect
        width="6"
        height="24"
        fill={color}
        rx="3"
        transform="matrix(-1 0 0 1 1114 0)"
      ></rect>
      <rect
        width="6"
        height="24"
        fill={color}
        rx="3"
        transform="matrix(0 -1 -1 0 1123 15)"
      ></rect>
    </svg>
  );
}

export default PlusRight;
