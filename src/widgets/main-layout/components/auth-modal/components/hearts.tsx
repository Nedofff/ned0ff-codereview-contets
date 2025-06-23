"use client";
import { HeartIcon } from "@/ui-kit";
import React from "react";
// 18.59 - basa
// -3.09 = 21.68
// -15.31 = 33.9
export const Hearts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-[150px] w-full">
      <div
        className="absolute animate-bounce"
        style={{
          left: "218px",
          top: "105px",
          width: "30.4px",
          height: "30.4px",
          animationDelay: "0s",
          animationDuration: "2s",
        }}
      >
        <HeartIcon
          width="30.4"
          height="30.4"
          viewBox="0 0 31 31"
          className=""
        />
      </div>
      <div
        className="absolute animate-bounce"
        style={{
          left: "217px",
          top: "41px",
          width: "58.58px",
          height: "58.58px",
          animationDelay: "1s",
          animationDuration: "3s",
          transform: "rotate(21.68deg)",
        }}
      >
        <HeartIcon
          width="58.58"
          height="58.58"
          viewBox="0 0 31 31"
          style={{
            transform: "rotate(21.68deg)",
          }}
        />
      </div>
      <div
        className="absolute animate-bounce"
        style={{
          left: "248px",
          top: "87px",
          width: "32.41px",
          height: "32.41px",
          animationDelay: "2s",
          animationDuration: "4s",
        }}
      >
        <HeartIcon
          width="32.41"
          height="32.41"
          viewBox="0 0 31 31"
          style={{
            transform: "rotate(33.9deg)",
          }}
        />
      </div>
    </div>
  );
};
