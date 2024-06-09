"use client";
import { Button, Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Positons from "./components/Positons";
import Jobs from "./components/Jobs";
import JobDetails from "./components/JobDetails";

export default function Overseas() {
  const [show, setShow] = useState(true);
  const [current, setCurrent] = useState(0);

  const cities = [
    "全部",
    "亚洲",
    "非洲",
    "欧洲",
    "南美洲",
    "北美洲",
    "大洋洲",
    "中国港澳台",
    "中东地区",
    "东南亚",
  ];
  return (
    <div className="relative" style={{height: 'calc(100vh - 64px)'}}>
      <div className="container mx-auto">
        {show && (
          <div className="bg-[url(https://img.bosszhipin.com/static/file/2024/8k2bac4l9c1706534378670.png.webp)] relative bg-no-repeat flex items-center h-[80px] w-full bg-contain bg-center">
            <Button
              className="text-[#00c1c1] bg-[#00c1c1]/10 ml-auto"
              size="lg"
            >
              了解详情
            </Button>
            <Button
              isIconOnly
              radius="full"
              className="bg-gray-200  absolute -right-[100px] top-2 scale-75"
              size="sm"
              onClick={() => setShow(false)}
            >
              <IoClose size={20} className="text-white" />
            </Button>
          </div>
        )}
      </div>
      <div className="shadow-md sticky top-[64px] z-10 backdrop-blur-2xl bg-gray-200/50 dark:bg-gray-900/50">
        <div className="container mx-auto flex gap-4 p-2">
          <Image
            src="https://img.bosszhipin.com/static/file/2024/k4cycao3d71706251777777.png.webp"
            width={137}
            height={34}
            alt="missed"
          />
          <div className="flex items-center gap-3 dark:text-gray-200">
            {cities.map((item,index) => (
              <Button className={`p-3 bg-transparent ${current === index && 'bg-[#00c1c1]/20 text-[#00c1c1]'}`} key={item} onClick={() => setCurrent(index)}>
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto relative " style={{height:`${show ? 'calc(100% - 56px - 80px)':'calc(100% - 56px)'}`}}>
        <div className="absolute top-5 bottom-5 mx-auto gap-4 flex">
        <div className="w-[20%] overflow-auto">
          <div className="flex dark:bg-gray-900/30 items-center justify-between backdrop-blur-lg bg-gray-200/40 rounded-[15px] py-2 pl-4 mb-3 pr-2">
            <div className="dark:text-gray-200">工作语言</div>
            <Button  className="bg-transparent text-[#00c1c1]">中文</Button>
          </div>
          <Positons />
        </div>
        <div className="w-[30%] h-full overflow-auto">
          <Jobs />
        </div>
        <div className="flex-1 h-auto"><JobDetails /></div>
        </div>
      </div>
    </div>
  );
}
