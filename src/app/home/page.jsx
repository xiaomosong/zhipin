"use client";
import Job from "@/components/Job";
import {
  Button,
  Popover,
  PopoverTrigger,
  Chip,
  PopoverContent,
} from "@nextui-org/react";
import Image from "next/image";
import React, { Suspense } from "react";
import { MdMyLocation } from "react-icons/md";
import { VscTriangleDown } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
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
    <>
      <div className="bg-[#00c1c1] bg-opacity-30 py-5">
        <div className="container mx-auto">
          <Image
            src="https://img.bosszhipin.com/static/file/2024/mctx1cdg891707037634775.png"
            width="416"
            height={120}
            alt="missed"
          />
        </div>
      </div>
      <div className="w-[1000px] mx-auto">
        <div className="p-2 my-4 flex items-center gap-2 rounded-[20px] dark:bg-gray-500 bg-gray-50 bg-opacity-40">
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
            className="border-none  dark:caret-slate-100 dark:placeholder-gray-50 dark:text-gray-100 outline-none bg-transparent flex-1 indent-1"
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
          <div className="dark:text-gray-50 text-gray-900">热门职位:</div>
          {positions.map((item) => (
            <Chip
              color="default"
              size="md"
              className="hover:text-[#00c1c1] hover:cursor-pointer hover:bg-white"
            >
              {item.title}
            </Chip>
          ))}
        </div>
      </div>
      <Suspense fallback={<div className="text-red-500">loading...</div>}>
        <div className="container mx-auto">
          {tabsList.map((item) => (
            <>
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
            </>
          ))}
        </div>
      </Suspense>
    </>
  );
}
