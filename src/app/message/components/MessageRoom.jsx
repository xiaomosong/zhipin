"use client";
import React, { useState } from "react";
import { compInfo, hisMsg } from "./mock";
import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { RiMenuFold4Line } from "react-icons/ri";
import "animate.css";
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdOutlineKeyboardVoice } from "react-icons/md";

import {
  Bell,
  MessageSquareMore,
  Image as ImageIcon,
  Settings,
  ChevronLeft,
  CircleX,
  CirclePlus,
  Phone,
} from "lucide-react";

import { RiWechat2Line } from "react-icons/ri";
import { PiFileMinus } from "react-icons/pi";
import { Smile, Check, CheckCheck } from "lucide-react";
import PopConfirm from "@/components/PopConfirm";
import { replyList } from "@/app/profile/mock";
import { useRouter } from "next/navigation";
const BtnItem = () => {
  const btnList = [
    {
      icon: PiFileMinus,
      title: "发简历",
      tip: "发简历：双方回复后可用",
      id: 1,
    },
    {
      icon: MdOutlinePhoneIphone,
      title: "换电话",
      tip: "换电话：双方回复后可用",
      id: 2,
    },
    {
      icon: RiWechat2Line,
      title: "换微信",
      tip: "换微信：双方回复后可用",
      id: 3,
    },
  ];
  const ob = (index) =>
    ({
      1: (
        <div className="w-[250px] text-lg">
          确定与对方交换电话号码吗?
          <p className="text-sm text-gray-500  flex items-center">
            电话号码: 156****4040
            <Button size="sm" className="bg-transparent text-[#00c1c1]">
              更换手机号
            </Button>
          </p>
        </div>
      ),
      2: (
        <div className="w-[250px] text-lg">
          确定与对方交换微信号吗
          <p className="text-sm text-gray-500 ">
            微信号: ID:253****6345
            <Button size="sm" className="bg-transparent text-[#00c1c1]">
              更换微信号
            </Button>
          </p>
        </div>
      ),
    }[index]);
  return (
    <div className="flex justify-around sm:justify-start mt-2 sm:mt-0">
      {btnList.map((item, index) => (
        <div key={item.id}>
          {(1 === 2 && (
            <Tooltip
              content={
                <div className="text-gray-900 dark:text-gray-50">
                  {item.tip}
                </div>
              }
            >
              <p>
                <Button
                  className="bg-transparent gap-1 sm:flex-row flex-col"
                  size="sm"
                  style={{ height: "42px" }}
                  isDisabled
                >
                  <div className="">
                    <item.icon
                      size={23}
                      className="text-gray-700 dark:text-gray-200"
                    />
                  </div>
                  {item.title}
                </Button>
              </p>
            </Tooltip>
          )) || (
            <>
              {(index !== 0 && (
                <PopConfirm
                  placement="top"
                  confirmBtn={
                    <Button size="sm" className="bg-[#00c1c1]">
                      确定
                    </Button>
                  }
                  content={ob(index)}
                >
                  <Button
                    size="sm"
                    style={{ height: "42px" }}
                    className="bg-transparent gap-1 sm:flex-row flex-col hover:bg-[#00c1c1]/10 hover:text-[#00c1c1]"
                  >
                    <div className="">
                      <item.icon size={23} className="text-gray-700 dark:text-gray-200" />
                    </div>
                    {item.title}
                  </Button>
                </PopConfirm>
              )) || (
                <Button
                  size="sm"
                  style={{ height: "50px" }}
                  className="bg-transparent gap-1 sm:flex-row flex-col hover:bg-[#00c1c1]/10 hover:text-[#00c1c1]"
                >
                  <div className="">
                    <item.icon size={23} className="text-gray-700 dark:text-gray-200" />
                  </div>
                  {item.title}
                </Button>
              )}
            </>
          )}
        </div>
      ))}
      <Button
        size="sm"
        className="bg-transparent sm:hidden flex-col gap-1 hover:bg-[#00c1c1]/10 hover:text-[#00c1c1]"
        style={{ height: "42px" }}
      >
        <div className="">
          <CircleX size={20} className="text-red-500" />
        </div>
        不感兴趣
      </Button>
    </div>
  );
};
export default function MessageRoom({ handleClose, flag }) {
  const router = useRouter();
  const { data, job } = compInfo;
  const [currentType, setCurrentType] = useState("");
  const uid = 97640225; //登录用户的Id
  const btns = [
    { icon: Smile, title: "表情", type: "emo" },
    { icon: MessageSquareMore, title: "常用语", type: "greet" },
    { icon: Bell, title: "优先提醒", type: "notice" },
    { icon: ImageIcon, title: "发送图片", type: "photo" },
  ];
  const mobileBtns = [
    { icon: ImageIcon, title: "发送图片", type: "photo" },
    { icon: MdOutlineKeyboardVoice, title: "语音", type: "voice" },
    { icon: Phone, title: "语音通话", type: "phone" },
    { icon: Bell, title: "优先提醒", type: "notice" },
  ];

  const Menu = (flag && MdMenuOpen) || RiMenuFold4Line;
  const list = replyList;
  const [current, setCurrent] = useState();
  const { messages } = hisMsg;
  const [notice, setNotice] = useState(false);
  const [iconType, setIconType] = useState(true);
  const Icon = (!iconType && CirclePlus) || CircleX;
  const handleAction = (type) => {
    setCurrentType(type);
    const types = {
      emo: () => {},
      greet: () => {
        setNotice(true);
      },
      notice: () => {
        setNotice(true);
      },
      photo: () => {},
    };
    types?.[type]?.();
  };
  const statusType = {
    1: <Check size={15} />,
    2: <CheckCheck size={15} className="text-[#00c1c1]" />,
  };
  return (
    <div className="flex flex-col justify-between relative overflow-hidden dark:bg-gray-900/30 bg-gray-300/30  rounded-none md:rounded-[15px] max-h-full h-full">
      <div className="flex-1 overflow-auto ">
        <div className="header sticky top-0 z-10 backdrop-blur-lg py-2 sm:p-4 bg-gray-300/20 dark:bg-gray-800/70">
          <div className="flex px-2 items-center gap-3 border-b border-b-gray-300/80 pb-2 dark:border-b-gray-700/90 sm:border-none">
            <Button
              isIconOnly
              radius="full"
              onClick={() => handleClose()}
              className="xl:hidden bg-transparent"
            >
              <Menu size={25} className="hidden sm:block" />
              <ChevronLeft size={25} className="block sm:hidden" />
            </Button>
            <div className="flex-1 flex flex-col md:gap-3 md:flex-row lg:justify-start justify-center items-center">
              <div className="text-gray-900 dark:text-gray-50">{data.name}</div>
              <div className="flex gap-2 items-center text-sm md:text-medium">
                <span className="text-gray-900 dark:text-gray-300 line-clamp-1">
                  {data.companyName}
                </span>
                <div className="text-gray-800 dark:text-gray-300 line-clamp-1 relative flex items-center ">
                  <div className=" bg-gray-400 w-1 h-1 rounded-full dark:bg-gray-300 mr-2"></div>
                  {data.title}
                </div>
              </div>
            </div>
            <div className="flex md:hidden items-center">
              <Button className="bg-transparent" isIconOnly radius="full">
                <RiEdit2Line size={23} />
              </Button>
              <Button className="bg-transparent" isIconOnly radius="full">
                <MdOutlineMoreHoriz size={23} />
              </Button>
            </div>
            <Button className="bg-gray-200/50 ml-auto hidden md:flex">
              置顶
            </Button>
          </div>
          <div className="block sm:hidden">
            <BtnItem />
          </div>
          <div className="p-4 mt-4 hidden sm:block rounded-[15px] bg-gradient-to-tl from-[#F6F6F4]/80 to-[#E1FBFF]/80 dark:from-[#2d2d25]/80 dark:to-[#003e47]/80">
            <div className="flex items-center gap-4 text-gray-900 dark:text-gray-50">
              {job.brandName}
              <span className="text-lg text-red-500">{job.salaryDesc}</span>
              {job.locationName}
              <div className="ml-auto hidden lg:block">
                <Tooltip
                  placement="bottom"
                  className="bg-gray-200/50 dark:bg-gray-900/50 backdrop-blur-lg "
                  Tooltip
                  content={
                    <div className="flex flex-col justify-center items-center p-1 text-gray-900 dark:text-gray-200 ">
                      <p>BOSS直聘APP</p>
                      <p className="mb-3">扫码进行分享</p>
                      <Image
                        width={100}
                        height={100}
                        src="https://static.zhipin.com/v2/web/geek/images/wechat-qrcode-2.jpg"
                      />
                    </div>
                  }
                >
                  <p className="flex items-center hover:cursor-pointer hover:text-[#00c1c1]">
                    <MdOutlinePhoneIphone size={18} />
                    <span className="text-sm">
                      下载App,不粗过BOSS每一条信息
                    </span>
                  </p>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="content p-4 ">
          <div className="flex gap-4 flex-col">
            {messages.map((item) => (
              <div className="flex-1 " key={item.mid}>
                <div
                  className={`flex gap-3 ${
                    uid === item.from.uid && "flex-row-reverse "
                  } `}
                >
                  <Image
                    width={30}
                    height={30}
                    src={item.from.avatar}
                    className="size-[30px] sm:size-[40px] mt-1 sm:mt-0 rounded-full ring-2 ring-gray-400 dark:ring-gray-200 overflow-hidden"
                  />
                  <div
                    className={`max-w-[70%] self-start px-4 py-3 rounded-[15px] text-gray-900 dark:text-gray-50 ${
                      uid === item.from.uid
                        ? "text-left bg-[#00c1c1]/10 dark:bg-[#00c1c1]/20 text-gray-900 dark:text-gray-50"
                        : "bg-gray-300/40 dark:bg-gray-600/40"
                    }`}
                  >
                    {item.body.text}
                  </div>
                  <div className="self-end">
                    {uid === item.from.uid && statusType[item.status]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer sticky bottom-0 rounded-t-[15px] border-t dark:border-t-gray-600 z-10 bg-gray-50 dark:bg-gray-600/20  backdrop-blur-lg">
        <div className=" w-full sm:hidden  ">
          <div className="flex items-center flex-1 w-full py-2">
            <Button
              isIconOnly
              radius="full"
              size="lg"
              className="bg-transparent"
              onClick={() => handleAction("greet")}
            >
              <MessageSquareMore />
            </Button>
            <Input placeholder="常用语" />
            <div className="flex items-center">
              <Button
                isIconOnly
                radius="full"
                size="lg"
                className="bg-transparent"
              >
                <Smile />
              </Button>
              <Button
                isIconOnly
                radius="full"
                size="lg"
                className="bg-transparent"
                onClick={() => setIconType(!iconType)}
              >
                <Icon />
              </Button>
            </div>
          </div>
          {
            iconType && <div className="flex w-full items-center py-4 justify-around border-t border-t-gray-300/60  dark:border-t-gray-700/70">
            {mobileBtns.map((item) => (
              <div className="flex flex-col justify-center items-center gap-3 text-gray-900 dark:text-gray-50" key={item.title}>
                <Button onClick={() => handleAction(item.type)} isIconOnly>{<item.icon size="26" />}</Button>
                <div className="text-sm">{item.title}</div>
              </div>
            ))}
          </div>
          }
        </div>
        <div className="flex-col justify-between hidden sm:flex">
          <div className="flex items-center gap-3 py-1 ml-3">
            <div className="flex items-center gap-2">
              {btns.map((item) => (
                <Tooltip
                  content={
                    <div className="text-gray-900 dark:text-gray-50">
                      {item.title}
                    </div>
                  }
                  key={item.title}
                >
                  <Button
                    isIconOnly
                    radius="full"
                    onClick={() => handleAction(item.type)}
                    className="bg-transparent group"
                  >
                    <item.icon
                      size={25}
                      className="text-gray-500 dark:text-gray-300 group-hover:text-[#00c1c1]"
                    />
                  </Button>
                </Tooltip>
              ))}
            </div>
            {
              <div className="hidden sm:block">
                <BtnItem />
              </div>
            }
          </div>
          <Textarea
            size="lg"
            minRows={5}
            placeholder="请在此输入内容，回车发送"
            className="bg-transparent border-none rounded-none"
          />
        </div>
      </div>
      {notice && (
        <div
          onClick={() => setNotice(!notice)}
          className={`backdrop-blur-lg bg-gray-300/20 dark:bg-gray-600/20 z-[90] transition-all duration-250 right-0 fixed top-0 bottom-0 left-0 `}
        >
          {
            {
              notice: (
                <div
                  className={`absolute overflow-auto right-0 transition-all duration-250 ease-linear bg-gray-200 dark:bg-gray-600  lg:w-[430px] md:w-[60%] sm:rounded-l-[15px] sm:w-[70%] w-full rounded-l-none top-0 bottom-0 animate__animated ${
                    notice ? "animate__slideInRight" : "animate__slideOutRight"
                  }`}
                >
                  <div className="bg-[url(https://z.zhipin.com/mpa/v24/vip/image/bg_normal_active.9006a0c.png)] pt-4 bg-top bg-[length:100%_200px] bg-no-repeat  ">
                    <div className="relative flex pt-4 text-[#ffc2a4cc] items-center justify-center before:absolute before:content-[''] before:w-[50px] before:h-[2px] before:left-[15px] before:bg-gradient-to-l before:from-[#ffc2a4cc]/90 before:to-transparent after:absolute after:content-[''] after:bg-gradient-to-r after:from-[#ffc2a4cc]/90 after:to-transparent after:right-[15px] after:w-[50px] after:h-[2px]">
                      想让Boss优先查看你的消息？
                    </div>
                    <div className="bg-clip-text pb-5 text-transparent text-lg bg-gradient-to-r text-center from-[#ff7028cc]/60 to-[#ed9f6b]">
                      VIP专属权益 — 优先提醒Boss
                    </div>
                    <div className="rounded-t-[15px] p-4 bg-gray-200 dark:bg-gray-600">
                      <div className="relative before:absolute before:-left-[10px] before:h-[20px] ml-4 before:w-[4px] before:bg-[#eba987cc]">
                        优先提醒Boss
                      </div>
                      <div className="rounded-[15px] p-4 bg-gray-50 dark:bg-gray-700 mt-4">
                        <div className="text-center text-[#cf581dcc]">
                          VIP专属设置提醒BOSS
                        </div>
                        <Image
                          src="https://z.zhipin.com/mpa/v24/vip/image/5_1_light.f359805.png"
                          alt="https://z.zhipin.com/mpa/v24/vip/image/5_1_light.f359805.png"
                          width={100}
                          height={200}
                          className="w-full "
                        />
                        <div className="rounded-[15px] p-4 bg-[#e7af93cc]/20 mt-4">
                          <div className="text-center text-[#cf581dcc]">
                            搭配使用以下权益，求职效果翻倍
                          </div>
                          <div className="flex mt-4 justify-evenly">
                            <div className="flex flex-col gap-3 items-center">
                              <div className="rounded-full border border-[#cf581dcc] bg-[#e7b59ccc]/20 size-[50px]"></div>
                              <div className="flex flex-col text-sm items-center text-[#b1653fcc]">
                                简历被更多Boss看到？
                                <div className="text-sm text-[#8e786ecc]">
                                  简历刷新Pro
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-3 items-center">
                              <div className="rounded-full border border-[#cf581dcc] bg-[#e7b59ccc]/20 size-[50px]"></div>
                              <div className="flex flex-col text-sm items-center text-[#b1653fcc]">
                                简历被更多Boss看到？
                                <div className="text-sm text-[#8e786ecc]">
                                  简历刷新Pro
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="relative before:absolute dark:text-gray-50 text-gray-900 before:-left-[10px] before:h-[20px] ml-4 before:w-[4px] before:bg-[#eba987cc]">
                          VIP特权对比
                        </div>
                        <div className="rounded-[15px] p-4 dark:text-gray-50 text-gray-900  bg-gray-50 dark:bg-gray-700 mt-4 ">
                          <div className="flex gap-3">
                            <div className="flex-1">专属特权</div>
                            <div className="flex-1 text-gray-500 dark:text-gray-300 text-center">
                              普通用户
                            </div>
                            <div className="flex-1 text-center">VIP</div>
                          </div>
                          <div className="flex flex-col gap-3 mt-4">
                            {[
                              {
                                title: "简历刷新Pro",
                                num: "2元/次",
                                vip: "自动刷新/天",
                              },
                              {
                                title: "竞争力分析",
                                num: "5元/次",
                                vip: "不限次数",
                              },
                              {
                                title: "职业性格测评",
                                num: "*",
                                vip: "赠送1次",
                              },
                              { title: "消息精准过滤", num: "*", vip: "+" },
                              { title: "尊贵身份标识", num: "*", vip: "+" },
                              { title: "专属数据报告", num: "*", vip: "+" },
                              { title: "优先提醒Boss", num: "*", vip: "+" },
                              { title: "专属简历模板", num: "*", vip: "+" },
                            ].map((item) => (
                              <div
                                className="flex items-center flex-1 gap-3"
                                key={item.title}
                              >
                                <div className="flex-1">{item.title}</div>
                                <div className="flex-1 text-gray-500 dark:text-gray-300 text-center">
                                  {item.num}
                                </div>
                                <div className="flex-1 text-[#9e3c0bcc] text-center">
                                  {item.vip}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc list-inside mt-4 dark:text-gray-50 text-gray-900 marker:text-gray-700 text-sm px-6">
                      <li>
                        查看其他<span className="text-[#00c1c1]">更多商品</span>
                      </li>
                      <li>购买后立刻生效，30天到期</li>
                    </ul>
                    <div className="sticky bottom-0 m-4 flex justify-between rounded-[15px] bg-gray-200 dark:bg-gray-700/80 overflow-hidden">
                      <div className="flex items-center text-sm sm:text-medium flex-nowrap gap-2 bg-[#002c33] py-4 px-1 sm:px-4 text-[#f3834bcc]">
                        <div className="text-nowrap">双月版</div>
                        <span className="text-sm font-thin text-nowrap">
                          (60天){" "}
                        </span>
                        <span className=" text-[#ff7028cc] text-sm sm:text-medium text-nowrap">
                          98元
                        </span>
                      </div>
                      <div className="flex text-[#f3834bcc] justify-center flex-1 items-center py-4 px-1 sm:px-4 gap-2 bg-[url(https://img.bosszhipin.com/static/file/2023/o70pvly5s21689331451953.png)] bg-[length:100%_100%] bg-no-repeat">
                        <div className="text-nowrap">单月版</div>
                        <span className="text-sm font-thin text-nowrap">
                          (30天){" "}
                        </span>
                        <span className="text-[#ff7028cc] text-sm sm:text-medium text-nowrap">
                          68元
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ),
              greet: (
                <div className=" absolute w-full  md:w-[70%] lg:w-[700px] lg:h-[700px] h-[500px] bottom-4 md:left-[50%] md:top-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
                  <div className="mx-4 bg-gray-50 dark:bg-gray-800 rounded-[15px] overflow-auto h-full">
                    <div className="p-3 sticky top-0 backdrop-blur-lg bg-gray-200/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-50 flex items-center justify-between">
                      常用语({list.length})
                      <Button
                        isIconOnly
                        radius="full"
                        className="group bg-transparent hover:bg-gray-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push("/profile/messageNotice");
                        }}
                      >
                        <Settings
                          className="group-hover:text-[#00c1c1]"
                          size={23}
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-3 p-4 ">
                      {list.map((item, index) => (
                        <div
                          key={item.fastReplyEncryptId}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrent(index);
                          }}
                          className={`${
                            current === index && "border-[#00c1c1] "
                          } items-center p-4 border rounded-[15px] flex justify-between hover:border-[#00c1c1] hover:cursor-pointer`}
                        >
                          <div className="flex flex-col gap-1 dark:text-gray-200/90">
                            {item.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            }[currentType]
          }
        </div>
      )}
    </div>
  );
}
