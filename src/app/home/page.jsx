"use client";
import Job from "@/components/Job";
import {
  Button,
  Popover,
  PopoverTrigger,
  Chip,
  PopoverContent,
} from "@nextui-org/react";
import { FaCaretRight } from "react-icons/fa";

import Image from "next/image";
import React, { Suspense, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import { VscTriangleDown } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";
import { position } from "./mock";

export default function Home() {
  const [positionItem, setPositionItem] = useState(null);
  const [flag, setFlag] = useState(false);
  const handleMouse = (type, { code }) => {
    setFlag(type === "enter");
    setPositionItem(position.find((item) => item.code === code));
  };
  const positions = [
    { title: "IT技术支持" },
    { title: "项目助理" },
    { title: "前端开发工程师" },
    { title: "JavaScript" },
    { title: "项目专员" },
    { title: "实施顾问" },
    { title: "实施工程师" },
  ];
  const tabsList = [
    {
      title: "精选职位",
      tabsList: [{ title: "精选职位" }, { title: "最新职位" }],
    },
    {
      title: "热招职位",
      tabsList: [
        { title: "技术" },
        { title: "销售服务" },
        { title: "供应链/ 物流" },
        { title: "运营" },
        { title: "生产制造" },
        { title: "教育培训" },
        { title: "人力/财务/行政" },
        { title: "传媒" },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-[#00c1c1] bg-opacity-30 py-5">
        <div className="container mx-auto">
          <Image
            src="https://img.bosszhipin.com/static/file/2024/mctx1cdg891707037634775.png"
            width="416"
            height={120}
            className="w-[416px] h-[120px]"
            alt="missed"
          />
        </div>
      </div>
      <div className="container max-w-xl lg:max-w-5xl md:max-w-4xl sm:max-w-3xl mx-auto px-4 sm:px-0">
        <div className="p-2 my-4 flex items-center gap-2 rounded-[20px] dark:bg-gray-500/50 bg-gray-300/50 bg-opacity-40">
          <Popover placement="bottom" offset={20}>
            <PopoverTrigger>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-50 px-3">
                职位类型 <VscTriangleDown className="ml-3  mr-2" />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="py-2 flex gap-1 flex-col text-sm text-gray-500  dark:text-gray-300 hover:cursor-pointer">
                <div className="flex items-center justify-between py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:rounded-[8px] hover:text-[#00c1c1] dark:hover:text-[#00c1c1]">
                  中国大陆 <span>+86</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:rounded-[8px] hover:text-[#00c1c1] dark:hover:text-[#00c1c1]">
                  非中国大陆手机号
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <input
            type="search"
            placeholder="搜索职位，公司"
            className="border-none w-full  dark:caret-slate-100 dark:placeholder-gray-50 dark:text-gray-100 outline-none bg-transparent flex-1 indent-1"
          />
          <div className="flex items-center gap-1 hover:text-[#00c1c1] hover:cursor-pointer dark:text-gray-50 dark:hover:text-[#00c1c1]">
            <MdMyLocation size={23} /> <span>地图</span>
          </div>
          <Button
            size="md"
            className="bg-[#00c1c1] dark:bg-[#00c1c1] text-gray-700 dark:text-gray-50"
          >
            搜索
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <div className="dark:text-gray-50 text-gray-900 flex sm:flex-row flex-col gap-2 flex-wrap">
            热门职位:
            <div className="flex gap-2 flex-wrap">
              {positions.map((item) => (
                <Chip
                  color="default"
                  size="md"
                  key={item.title}
                  className="hover:text-[#00c1c1] hover:cursor-pointer hover:bg-white"
                >
                  {item.title}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 px-4 sm:px-0">
        <div className="flex md:flex-row flex-col gap-3 justify-center h-[700px] max-h-[700px] md:max-h-[500px] md:h-[500px]">
          <div className="flex flex-[.3] overflow-auto bg-gray-50/50 relative backdrop-blur-lg p-2 dark:bg-gray-800/50 h-full flex-col gap-3 rounded-[15px]">
            {position.map((item) => (
              <div
                onMouseEnter={() => handleMouse("enter", item)}
                onMouseLeave={() => handleMouse("leave", item)}
                className="rounded-[15px] px-3 group hover:cursor-pointer hover:shadow-lg hover:bg-gray-400/50 flex items-center justify-between bg-gray-200 py-2 dark:bg-slate-600/50 backdrop-blur-lg"
                key={item.code}
              >
                <div className="flex items-center gap-3 dark:text-gray-200">
                  {item.name}
                  <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-200/80">
                    {item.subLevelModelList.slice(0, 3).map((subItem) => (
                      <div key={subItem.name}>{subItem.name}</div>
                    ))}
                  </div>
                </div>
                <FaCaretRight className="group-hover:text-[#00bebd] text-gray-400 dark:text-gray-200/80" />
              </div>
            ))}
          </div>
          <div className="flex flex-[.7] relative ">
            {positionItem && (
              <div
                className={`absolute shadow-lg top-0 bottom-0  bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-lg  transition-all duration-200 ${
                  flag ? "w-full" : "w-0"
                } rounded-[15px] overflow-auto`}
              >
                <div className="text-lg p-4 text-black dark:text-white">
                  {positionItem.name}
                </div>
                <div className="flex gap-8 flex-col px-4 overflow-auto">
                  {positionItem.subLevelModelList.map((positionItem) => (
                    <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-200" key={positionItem.name}>
                      <div className="mr-4 flex-[.15]">{positionItem.name}</div>
                      <div className="flex gap-3 flex-1 flex-wrap items-center pb-2 border-b border-b-gray-300">
                        {positionItem.subLevelModelList.map((posiItem) => (
                          <div className="hover:text-#00bebd " key={posiItem.name}>
                            {posiItem.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-3 grid-rows-4 w-full h-[300px] md:h-full gap-2 rounded-[15px] overflow-hidden">
              <div className="col-span-2 row-span-2 bg-red-50 bg-[url(https://img.bosszhipin.com/beijin/activity/img/20240607/488f35070cc7d0b622b89f515c73e102adf21e6769af741880c0fe17b37418f00945b742138a9e17.png.webp)] bg-no-repeat bg-cover"></div>
              <div className="col-span-1 row-span-2 bg-sky-50 bg-[url(https://img.bosszhipin.com/beijin/activity/img/20240222/488f35070cc7d0b64964b50b0e6addabfb3df6182506fd7a80c0fe17b37418f00945b742138a9e17.png.webp)] bg-no-repeat bg-cover"></div>
              <div className="col-span-2 row-span-2 bg-yellow-50 bg-[url(https://img.bosszhipin.com/beijin/activity/img/20240221/488f35070cc7d0b69dc062f990bbd71bccc41632c9c835a480c0fe17b37418f00945b742138a9e17.png.webp)] bg-no-repeat bg-cover"></div>
              <div className="col-span-1 row-span-1 bg-purple-50 bg-[url(https://img.bosszhipin.com/beijin/activity/img/20240228/488f35070cc7d0b6d0945cbd3f9c51073ac02fecc9479e3780c0fe17b37418f00945b742138a9e17.png.webp)] bg-no-repeat bg-cover"></div>
              <div className="col-span-1 row-span-1 text-ellipsis bg-blue-50 bg-[url(https://img.bosszhipin.com/beijin/activity/img/20240222/488f35070cc7d0b6dd987483701c12f274e4b90be00f96d280c0fe17b37418f00945b742138a9e17.png.webp)] bg-no-repeat bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0">
        {tabsList.map((item) => (
          <div key={item.title}>
            <Job tabsList={item.tabsList} title={item.title} />

            <div className="flex justify-center pt-5 pb-[90px]">
              <Button
                size="md"
                color="primary"
                className="rounded-[10px] bg-gradient-to-r from-[#00bebd] to-[#01a7a7]"
              >
                查看更多 <FaArrowRightLong />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
