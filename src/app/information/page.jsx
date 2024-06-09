/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-06-01 13:16:51
 * @LastEditors: Jhon
 */
"use client";
import { Button, Tabs, Tab } from "@nextui-org/react";
import React, { useState } from "react";
import { PiFootball } from "react-icons/pi";
import { FaBookMedical } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { SiDataiku } from "react-icons/si";
import Image from "next/image";
import { CiHashtag } from "react-icons/ci";

export default function Information() {
  const [selected, setSelected] = useState("1");
  const list = [
    { title: "全部资讯", icon: PiFootball, articles: [{}] },
    { title: "求职必读", icon: FaBookMedical, articles: [{}] },
    { title: "数据报告", icon: RiArticleFill, articles: [{}] },
    { title: "干货文章", icon: BsFillSendFill, articles: [{}] },
    { title: "公司动态", icon: SiDataiku, articles: [{}] },
  ];
  const [articles,setArticles] = useState([
    {
      id: 1,
      url: "https://img.bosszhipin.com/beijin/activity/img/20230810/488f35070cc7d0b669b0fd61e87e106be480d248ce8a9e1deb23fe2641003ad07d93ebdd63300629.jpeg.webp",
      title: "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 2,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230223/7a57a5a743894a0e3aa963e302d3b8e002e070fc6394045ea24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "直直公益“守护大自然的小美好”公益征集活动决赛名单出炉！",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 3,
      url: "https://img.bosszhipin.com/beijin/activity/img/20230810/488f35070cc7d0b669b0fd61e87e106be480d248ce8a9e1deb23fe2641003ad07d93ebdd63300629.jpeg.webp",
      title: "直直公益介绍",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 4,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230302/7a57a5a743894a0e77d96a09f115f46f91c349842928fdaea24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "【海归必读】零经验？不慌！",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 5,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230302/7a57a5a743894a0e38da8f290ba5c6a803d9291bc37e35cfa24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "【求职必读】留学生如何准备背调？",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 6,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230302/7a57a5a743894a0e38da8f290ba5c6a803d9291bc37e35cfa24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "【求职必读】留学生如何准备背调？",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 7,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230302/7a57a5a743894a0e38da8f290ba5c6a803d9291bc37e35cfa24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "【求职必读】留学生如何准备背调？",
      subTitle:
        "第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示   第一届直直公益“守护大自然的小美好”公益征集活动在12月28日晚20：00正",
    },
    {
      id: 8,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230131/7a57a5a743894a0ebf68c7be78b645aa1acf02a3912e8c09a24837d9ceae65e3b6300d3c1a17cb94.jpeg",
      title: "【热门职类】四大常见运营职位",
      subTitle:
        "运营是一个很大的职类，而在这个大职类下，一般可以细分为四大运营，分别是：内容运营、产品运营、用户运营、活动运营。今天直直小助手将会为大家分享这四类运营的区别以及所对应的要求是什么，希望能够为对运营感兴    ",
    },
    {
      id: 9,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230131/7a57a5a743894a0e7039afe062b30b9d3c1b6f97129e88e3a24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "【求职必读】五险一金科普干货！",
      subTitle:
        "“这个职位有五险一金吧？” “公积金比例按多少交？” “为什么我实际拿到的工资比签约的少呢？” 这是很多人在初入职场时会遇到的问",
    },
    {
      id: 10,
      url: "https://img.bosszhipin.com/beijin/upload/admin/20230117/7a57a5a743894a0e5d8a94c24395c462ef5ce0d087eaafbaa24837d9ceae65e3b6300d3c1a17cb94.png",
      title: "【海归必读】上海落户注意事项",
      subTitle:
        "之前我们为大家分享过留学生如何在上海申请落户（点击查看《留学生上海落户》），今天我们就来详细展开说，在申请落户时，留学生容易遇到哪些问题是需要注意的。 上海户口的申报标准很明确，准备落户上海的小伙伴",
    },
  ]);
  const handleMore = () => {
    articles.push(...articles);
    setArticles(() => [...articles]);
    console.log('articles :>> ', articles);
  }
  return (
    <div className="">
      <div className="bg-gray-600/20 backdrop-blur-lg ">
        <div className="container mx-auto flex items-center justify-center ">
          <div className="flex gap-2 h-[300px] items-center justify-center ">
            <div className="text-gray-800 text-2xl dark:text-gray-100 tracking-wider">
              BOSS直聘新闻和数据实时跟踪
            </div>
            <Button color="danger" size="md">
              媒体合作
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 w-[1000px] ">
        <Tabs
          size="lg"
          aria-label="Options"
          color="primary"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="bordered"
          classNames={{
            tabList: "w-[1000px] box-border justify-between gap-0 py-2 dark:bg-gray-500/30 bg-gray-600/30 m-0 border-0 backdrop-blur-lg",
            cursor: "bg-gray-50/80 dark:bg-gray-500/50 ",
            tabContent:
              "text-lg py-2 group-data-[selected=true]:text-[#00c1c1] group-data-hover:text-[#00c1c1]",
            panel: "py-3 text-lg",
          }}
        >
          {list.map((item) => (
            <Tab
              key={item.id}
              title={
                <div className="flex items-center">
                  <div className="flex gap-2 items-center">
                    <div className="rounded-[150px] p-1 icon">
                      <item.icon />
                    </div>
                    {item.title}
                  </div>
                </div>
              }
            >
              <div className="grid gap-3">
                {articles.map((item, index) => (
                  <div
                    className="overflow-hidden hover:shadow-large  hover:-translate-y-2 hover:scale-105 dark:hover:shadow-large transition-all duration-150 rounded-[15px] border border-gray-300 gap-2 p-2 flex backdrop-blur-lg bg-gray-50/20 dark:bg-gray-500/20"
                    key={index}
                  >
                    <div className="overflow-hidden rounded-[15px]">
                      <Image
                        src={item.url}
                        width={240}
                        height={110}
                        alt="missed"
                        className="hover:scale-105 transition-all duration-700 object-cover h-[100%]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="text-lg hover:text-[#00c1c1] dark:hover:text-[#00c1c1] dark:text-gray-100">
                        {item.title}
                      </div>
                      <div className="mt-2 mb-6 text-sm text-gray-500 dark:text-gray-300">
                        {item.subTitle}
                      </div>
                      <div className="flex mt-2">
                        <div className="p-1 flex items-center rounded-full bg-[#00c1c1]/10">
                          <CiHashtag className="" color="#00c1c1" />
                        </div>
                        <div className="text-sm scale-85 origin-center text-gray-400 dark:text-gray-200">
                          求职必读
                        </div>
                        <div className="ml-auto text-gray-500 dark:text-gray-200 flex items-center gap-2 text-sm scale-85">
                          直直小助手 <span>2023-02-09</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
        <div className="flex justify-center pt-6 pb-10"><Button className="text-[#00c1c1] bg-[#00c1c1]/10" size="lg" onClick={() => handleMore()}>浏览更多</Button></div>
      </div>
    </div>
  );
}
