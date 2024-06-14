"use client";
import { Button, Input, Tooltip } from "@nextui-org/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SiAnswer } from "react-icons/si";
import { ChevronRight, AlignRight, MessageCircleQuestion } from "lucide-react";
import { LiaGripfire } from "react-icons/lia";
import { GrRefresh } from "react-icons/gr";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import TopicList from "./components/TopicList";
import { useRouter } from "next/navigation";

export default function Topic() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(0);
  const myData = [
    {
      title: "我的数据",
      dataOpt: [
        { title: "内容量", num: 231, changeYes: "昨日无变化", id: 1 },
        { title: "获赞", num: 232, changeYes: "昨日无变化", id: 2 },
        { title: "粉丝数", num: 623, changeYes: "昨日无变化", id: 3 },
      ],
    },
    {
      title: "问答数据",
      dataOpt: [
        { title: "回答数", num: 28, changeYes: "昨日无变化", id: 1 },
        { title: "获赞", num: 283, changeYes: "昨日无变化", id: 2 },
        { title: "精选数", num: 243, changeYes: "昨日无变化", id: 3 },
      ],
    },
    {
      title: "文章数据",
      dataOpt: [
        { title: "文章数", num: 223, changeYes: "昨日无变化", id: 1 },
        { title: "阅读数", num: 123, changeYes: "昨日无变化", id: 2 },
        { title: "点赞数", num: 323, changeYes: "昨日无变化", id: 3 },
      ],
    },
  ];
  const router = useRouter()
  const followList = [
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20230206/4558a342cf659187bfe4b88fe0d2d81e85379cef7ac1a3aef222e0b500adad7a9052e0df95d29ea0.jpg",
      title: "远川研究所",
      content: "整合全球视野，助力关键决策",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20230131/4558a342cf659187bc1dfd83aad614482a51b763168481c03242e06ff40637253c3cb4d73c5ca31a.png",
      title: "远川研究所",
      content: "整合全球视野，助力关键决策",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20231010/4558a342cf6591875c03de2851f1fba35a486b67d2e4b30bd70b6719086bf63f45ff2679dcc54bef.png.webp",
      title: "远川研究所",
      content: "整合全球视野，助力关键决策",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20230504/4558a342cf659187832ad12cb26e7c40bef8fc81878f67144c737d51416d03f2c1ce0a492371cc86.png?x-oss-process=image/format,webp",
      title: "视频JD官方教学",
      content: "整合全球视野，助力关键决策",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20230321/4558a342cf659187186f5652429a4d88d11d8ac563528d08b42544c8d817c5d97bd31c8d47fef18f.jpg?x-oss-process=image/format,webp",
      title: "张丽俊Cherry",
      content: "整合全球视野，助力关键决策",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20230128/4558a342cf65918706adf2274f2f107c8416d5c640969a81963fb86e4816f49c99cd0590a1a303b5.jpg?x-oss-process=image/format,webp",
      title: "海克财经",
      content: "整合全球视野，助力关键决策",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/avatar/20240312/607f1f3d68754fd01aa4e3d512a1d0e5af86f8eb112b1d4ea0b32648604b55a6193b50ccdc20d73f_s.jpg.webp",
      title: "新媒体运营操盘手",
      content: "熟悉抖音小红书视频号运营，擅长引流获客",
    },
    {
      url: "https://img.bosszhipin.com/beijin/upload/get/20230214/4558a342cf6591875ab97293ac1a6f036292a7b77d28162d5e52dde853cbae78026b70d50be70dd9.png?x-oss-process=image/format,webp",
      title: "数字力场",
      content: "抵抗熵增，打捞有趣。关注互联网+职场",
    },
  ];
  const list = [
    "现在的人找工作看重的是那几个方面呢？",
    "HR 面试的求职者上来就问薪资待遇，上班时间，也不问工作内容怎么回答比较完美？",
    "离职时，老板说“以后要回来随时欢迎”，能信吗？  ",
    "离职时，老板说“以后要回来随时欢迎”，能信吗？  ",
    "人在工作逆境时该怎么调整自己的状态？  ",
    "加了微信的候选人爽约两次，大家是继续给面试机会还是不给机会删除微信？",
    "加了微信的候选人爽约两次，大家是继续给面试机会还是不给机会删除微信？",
    "什么样的工作才能让人有长期干下去的欲望呢？",
    "对团队而言，一个有领导力和没领导力的人的区别是什么？",
    "2024 年，你最想实现的职场愿望是什么？",
  ];
  const cities = ["有了", "精选好文", "职场问答", "求职百科", "个人主页"];
  return (
    <div>
      <div className="shadow-md sticky top-[64px] z-10 backdrop-blur-2xl bg-gray-50/50 dark:bg-gray-900/35">
        <div className="container mx-auto lg:px-6 xl:px-8 2xl:px-20 md:px-5 px-4 flex justify-between items-center">
          <div className="flex items-center gap-1 overflow-auto sm:gap-3 dark:text-gray-200 py-2 flex-1">
            {cities.map((item, index) => (
              <Button
                className={`bg-transparent ${
                  current === index && "bg-[#00c1c1]/20 text-[#00c1c1]"
                }`}
                key={item}
                onClick={() => {setCurrent(index),index===3 && router.push('/wiki')}}
              >
                {item}
              </Button>
            ))}
          </div>
          <Input
            type="text"
            placeholder="搜索30天内的联系人"
            labelPlacement="outside"
            className="flex-[.3] hidden md:block"
            endContent={
              <IoSearch className="text-2xl text-default-400 pointer-events-none " />
            }
          />
        </div>
      </div>
      <div className="container mx-auto flex lg:px-6 xl:px-8 2xl:px-20 md:px-5 mt-3 gap-3">
        <TopicList />
        <div className="hidden lg:flex-[.3] xl:flex-[.4] lg:flex flex-col gap-3">
          <div className="backdrop-blur-lg pt-3 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden">
            <div className="text-lg px-4 dark:text-gray-200/90 text-gray-900">
              Hi,余松
            </div>
            <div className="px-4 text-sm text-gray-600 dark:text-gray-300/80 leading-6">
              今天想写点什么？
            </div>
            <div className="p-3 m-3 flex items-center justify-around">
              <div className="flex flex-col gap-2  items-center group hover:cursor-pointer">
                <MessageCircleQuestion
                  size={35}
                  className="text-blue-600 transition-all group-hover:-translate-y-1 group-hover:drop-shadow-xl duration-400"
                />
                <div className="text-sm text-gray-500 dark:text-gray-300/80 group-hover:text-[#00c1c1]">
                  发提问
                </div>
              </div>
              <div className="flex flex-col gap-2 group items-center hover:cursor-pointer">
                <SiAnswer
                  size={30}
                  className="text-red-600 transition-all group-hover:-translate-y-1 group-hover:drop-shadow-xl duration-400 "
                />
                <div className="text-sm text-gray-500 dark:text-gray-300/80 group-hover:text-[#00c1c1]">
                  去回答
                </div>
              </div>
            </div>
            <Button
              className="hover:bg-[#00c1c1]/20 text-[#00c1c1] bg-transparent border-t border-t-gray-300/50 dark:border-t-gray-300/10"
              size="lg"
              fullWidth
              radius="none"
            >
              前往创作者中心 <ChevronRight />
            </Button>
          </div>
          <div className="backdrop-blur-lg p-4 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden">
            <div className="text-lg flex items-center justify-between text-gray-900 dark:text-gray-200">
              {myData[selected].title}
              <Tooltip
              className="bg-gray-200/30 dark:bg-gray-900/30 backdrop-blur-lg"
                content={
                  <div className="flex flex-col gap-1 py-2">
                    {myData
                      .map((item) => item.title)
                      .map((item, index) => (
                        <Button
                          size="md"
                          className={`bg-transparent hover:text-[#00c1c1] ${
                            selected === index && "text-[#00c1c1]"
                          }`}
                          key={item.title}
                          onClick={() => setSelected(index)}
                        >
                          {item}
                        </Button>
                      ))}
                  </div>
                }
                placement="bottom"
              >
                <AlignRight />
              </Tooltip>
            </div>
            <div className="flex items-center justify-evenly my-3">
              {myData[selected].dataOpt.map((item) => (
                <div className="flex flex-col items-center" key={item.id}>
                  <div className="text-sm text-gray-600 dark:text-gray-300/80">
                    {item.title}
                  </div>
                  <div className="text-2xl py-4 font-bold text-gray-900 dark:text-gray-300/90">
                    {item.num}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-300/70">
                    {item.changeYes}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="backdrop-blur-lg px-2 py-4 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden">
            <div className="text-lg px-2 flex items-center gap-2 pb-2 text-gray-900 dark:text-gray-200">
              <LiaGripfire className="text-red-600 text-2xl " />
              今日问题热榜
            </div>
            <div className="flex flex-col gap-1">
              {list.map((item, index) => (
                <div
                  className="flex group  hover:cursor-pointer hover:text-[#00c1c1] dark:hover:text-[#00c1c1] hover:bg-gray-300/50 dark:hover:bg-gray-300/20 rounded-[15px] gap-2 justify-start text-gray-600 dark:text-gray-300/90 text-sm p-3 tracking-wide leading-6"
                  key={item}
                >
                  <div className="font-bold  group-[:nth-child(1)]:text-red-600 group-[:nth-child(2)]:text-orange-500 group-[:nth-child(3)]:text-yellow-500">
                    {index + 1}
                  </div>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="backdrop-blur-lg sticky top-[130px] px-2 py-4 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden">
            <div className="text-lg px-2 flex items-center justify-between pb-2 dark:text-gray-200">
              推荐关注{" "}
              <Button
                className=" text-gray-500 group dark:text-gray-300/80 bg-transparent"
                size="sm"
              >
                <GrRefresh className="text-red-600 group-focus:rotate-[360deg] group-active:rotate-[360deg] group-focus-within:rotate-[360deg] duration-400 transition-all" />
                换一批
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {followList.map((item, index) => (
                <div
                  className="flex group hover:cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-300/20 rounded-[15px] gap-2 justify-start text-gray-500 text-sm p-3 tracking-wide leading-4"
                  key={item}
                >
                  <div className="size-[50px]">
                    <Image
                      src={item.url}
                      width={50}
                      height={50}
                      alt="missed"
                      className="rounded-full size-[50px] overflow-hidden object-cover ring-1 ring-gray-400/80 outline hover:ring-4 transition-all duration-200"
                    />
                  </div>

                  <div className="flex justify-between flex-1 dark:text-gray-300/90">
                    <div className="flex flex-col gap-2 flex-1 ">
                      <div className="hover:text-[#00c1c1]">{item.title}</div>
                      <div className="truncate w-[170px]">{item.content}</div>
                    </div>
                    <Button size="sm" radius="full" className="text-[#00c1c1]">
                      <FiPlus />
                      关注
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
