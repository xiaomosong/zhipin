/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-31 18:21:37
 * @LastEditors: Jhon
 */
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Location() {
  return (
    <div className="flex items-center gap-1 flex-nowrap dark:text-gray-200 hover:cursor-pointer">
      <div className="text-[#00c1c1] whitespace-nowrap dark:text-[#00c1c1] flex items-center">
        <FaLocationDot color="#00c1c1" />
        珠海
      </div>
      <div className="whitespace-nowrap">[切换]</div>
    </div>
  );
}
