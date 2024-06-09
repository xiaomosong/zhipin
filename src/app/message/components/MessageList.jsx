"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { messageList } from "../mock";
import Image from "next/image";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { Trash2 } from "lucide-react";
export default function MessageList() {
  const [currentItem, setCurrentItem] = useState(0);
  const tabs = [
    { title: "全部" },
    { title: "新招乎" },
    { title: "仅沟通" },
    { title: "有交换" },
    { title: "有面试" },
  ];
  const [current, setCurrent] = useState(0);
  return (
    <div className=" relative rounded-[15px] backdrop-blur-lg bg-gray-300/50 dark:bg-gray-900/80 h-full overflow-auto">
      <div className="p-3 sticky top-0 z-10 backdrop-blur-lg bg-gray-200/80 dark:bg-gray-900/80">
        <Input
          type="email"
          placeholder="搜索30天内的联系人"
          labelPlacement="outside"
          endContent={
            <IoSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <div className="flex gap-3 mt-3">
          {tabs.map((item, index) => (
            <Button
              size="sm"
              className={` ${
                current === index && "bg-[#00c1c1]/20 text-[#00c1c1]"
              }`}
              key={item}
              onClick={() => setCurrent(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-3 grid-cols-1 p-3 overflow-hidden">
        {messageList.map((item, index) => (
          <div
            className="overflow-hidden w-[540px] transition-all duration-200 hover:-translate-x-28 flex items-center gap-3"
            key={item.jobId}
            onClick={() => setCurrentItem(index)}
          >
            <div
              className={`${
                currentItem === index
                  ? "bg-[#00c1c1]/30 hover:bg-[#00c1c1]/30 dark:bg-[#00c1c1]/30 dark:hover:bg-[#00c1c1]/30"
                  : "bg-gray-300/50 hover:bg-gray-600/20 dark:bg-gray-500/20"
              } p-2 w-[430px]  dark:hover:bg-gray-200/20 hover:cursor-pointer transition-all duration-150 rounded-[15px] overflow-hidden backdrop-blur-lg   flex gap-3`}
            >
              <Image
                src={item.avatar}
                alt="missed"
                width={50}
                height={50}
                className="overflow-hidden rounded-full p-[2px] bg-gray-100 dark:bg-gray-200/50 w-[50px] h-[50px]"
              />
              <div className="flex gap-2 flex-col text-gray-600 dark:text-gray-200">
                <div className="items-center flex gap-2">
                  <div className="">{item.name}</div>
                  <div className="text-gray-600/80 dark:text-gray-200/80 flex gap-3 text-sm items-center">
                    {item.brandName}{" "}
                    <Divider orientation="vertical" className="h-[14px]" />
                    {item.title}
                  </div>
                  <div className="ml-auto text-sm">{item.lastTime}</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200/80 truncate w-[350px]">
                  {item.lastMsg}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-1 ">
              <Button isIconOnly radius="full">
                <MdOutlineVerticalAlignTop size={20} />
              </Button>
              <Button
                isIconOnly
                radius="full"
                className="text-red-500 text-medium"
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
