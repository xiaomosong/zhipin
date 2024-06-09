/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-30 16:29:18
 * @LastEditors: Jhon
 */
"use client";
import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { GoTriangleLeft } from "react-icons/go";
import { IoDesktopSharp,IoLogoWechat } from "react-icons/io5";
import { FaRegSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

import {
  PhoneCall,
  MessageSquareQuote,
  Package2,
  QrCode,
  CircleHelp,
  Monitor,
  MessageSquareText,
  Drum,
} from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import Image from "next/image";
import Header from "@/components/Header";
const Footer = () => {
  return (
    <>
      <div className="text-gray-400 dark:text-gray-200 text-center text-sm scale-85">
        客服电话 400-065-5799 工作时间：8:00-22:00
      </div>
      <div className="text-gray-400 dark:text-gray-200 text-center text-sm scale-85">
        人力资源服务许可证营业执照朝阳区人社局监督电话
      </div>
    </>
  );
};
const QrCodeLogin = ({
  triggerLoginType,
  isWeChatLogin,
  setShow,
  setIsWeChatType,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl mt-8 text-black dark:text-gray-100">
        {!isWeChatLogin ? "BOSS直聘APP扫码登录" : "微信扫码 安全登录"}
      </div>
      <Image
        src={
          isWeChatLogin
            ? "https://img.bosszhipin.com/beijin/weixin-service/qcodeC-04419fedab3e2a64e5129e378741a63a.png"
            : "https://static.zhipin.com/v2/web/geek/images/wechat-qrcode-2.jpg"
        }
        width={200}
        height={200}
        alt="missed"
        className="mt-10 mb-2"
      />
      {isWeChatLogin ? (
        <div className="text-gray-400 dark:text-gray-200 scale-85 text-center">
          请使用微信扫描二维码登录“BOSS直聘”
        </div>
      ) : (
        <div className="flex items-center justify-between w-[200px] text-gray-500 dark:text-gray-200 text-sm mt-2">
          <Popover placement="right" showArrow={true}>
            <PopoverTrigger>
              <div className="flex text-gray-500 dark:text-gray-200 mt-2 items-center gap-1">
                app下载
                <CircleHelp size="14" strokeWidth={1.5} />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-4">
                <Image
                  src="https://static.zhipin.com/v2/web/geek/images/wechat-qrcode-2.jpg"
                  width={100}
                  height={100}
                  alt="missed"
                />
                <div className="text-center text-gray-500 mt-2 dark:text-gray-200">
                  IOS,android下载
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="right" showArrow={true}>
            <PopoverTrigger>
              <div className="flex items-center gap-1">
                扫码帮助
                <CircleHelp size="14" strokeWidth={1.5} />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-4">
                <Image
                  src="https://static.zhipin.com/v2/web/geek/images/wechat-qrcode-2.jpg"
                  width={100}
                  height={100}
                  alt="missed"
                />
                <div className="text-gray-400 text-center ">
                  IOS,android下载
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
      {isWeChatLogin && (
        <Button
          size="md"
          className="mt-5 bg-gray-100 text-gray-500"
          onClick={() => {
            setShow(true), triggerLoginType(true), setIsWeChatType(false);
          }}
        >
          <GoTriangleLeft /> 验证码登录/注册
        </Button>
      )}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};
const MonitorLogin = ({
  setIsWeChatType,
  triggerLoginType,
  setShow,
  setCurrent,
}) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [check, setCheck] = useState(false);
  const CheckIcon = check ? FaRegSquareCheck : ImCheckboxUnchecked;
  const tabs = [{ text: "我要找工作" }, { text: "我要招聘" }];
  return (
    <div className="px-12">
      <div className="text-2xl text-center dark:text-gray-200 text-gray-900">验证码登录/注册</div>
      <div className="text-sm mt-2 tracking-wide text-center dark:text-gray-300 text-gray-700">
        首次验证通过即注册BOSS直聘账号
      </div>
      <div className="rounded-lg p-1 bg-gray-100 dark:bg-gray-500 dark:bg-opacity-30 my-3 group hover:cursor-pointer flex items-center">
        {tabs.map((item, index) => (
          <div
          key={item.text}
            className={`${
              currentIndex === index &&
              "dark:bg-gray-100 bg-gray-200 rounded-[10px] dark:text-[#00c1c1] text-[#00c1c1]"
            } dark:hover:text-[#00c1c1] light:hover:text-[#00c1c1] text-center flex-1 p-2 dark:text-gray-400 light:text-gray-700`}
            onClick={() => {
              setCurrentIndex(index), setCurrent(index);
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="border mt-5 flex items-center border-gray-200 dark:border-gray-600 rounded-[10px] p-3  hover:border-[#00c1c1] dark:hover:border-[#00c1c1]">
        <Popover placement="bottom" offset={20}>
          <PopoverTrigger>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-300">
              +86 <VscTriangleDown className="ml-3  mr-2" />
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
          placeholder="手机号"
          className="border-none dark:caret-slate-50 dark:text-gray-100 outline-none bg-transparent w-[100%] indent-1 h-full"
        />
      </div>
      <div className="border my-7 flex items-center border-gray-200 dark:border-gray-600 rounded-[10px] p-3  hover:border-[#00c1c1] dark:hover:border-[#00c1c1]">
        <input
          placeholder="短信验证码"
          className="border-none dark:caret-slate-50 dark:text-gray-100 outline-none bg-transparent w-[100%] indent-1 h-full"
        />
        <Button
          size="sm"
          variant="light"
          className="h-auto text-medium text-[#00c1c1]"
        >
          发送验证码
        </Button>
      </div>
      <Button
        size="lg"
        color="primary"
        className="rounded-[10px] bg-gradient-to-r from-[#00bebd] to-[#01a7a7]"
        fullWidth
      >
        注册/登陆
      </Button>
      <div className="flex items-center justify-center gap-4">
        <div
          className="group hover:cursor-pointer flex items-center gap-2 justify-center my-5"
          onClick={() => {
            setShow(false), setIsWeChatType(true), triggerLoginType(false);
          }}
        >
          <div className="rounded-full bg-[#50b674] bg-opacity-10 w-8 h-8 flex">
            <IoLogoWechat color="#50b674" className="m-auto" />
          </div>
          <span className="text-sm group-hover:text-[#00c1c1] text-gray-400 dark:text-gray-200">
            微信登录/注册
          </span>
        </div>
        {currentIndex === 1 && (
          <div className="group hover:cursor-pointer flex items-center gap-2 justify-center my-5">
            <div className="rounded-full bg-[#00c1c1] bg-opacity-10 w-8 h-8 flex">
              <IoDesktopSharp color="#00c1c1" className="m-auto" />
            </div>
            <span className="text-sm group-hover:text-[#00c1c1] text-gray-400 dark:text-gray-200">
              桌面端下载
            </span>
          </div>
        )}
      </div>
      <div
        className="mb-6 tracking-wider text-center relative text-sm  text-gray-400 dark:text-gray-200 scale-85"
        onClick={() => setCheck(!check)}
      >
        <CheckIcon
          color={check && "#00c1c1"}
          className="scale-125 absolute top-[4px] -left-2 hover:cursor-pointer"
        />
        已阅读并同意BOSS直聘{" "}
        <span className="text-[#00c1c1] text-nowrap">
          《用户协议》《隐私政策》
        </span>{" "}
        允许BOSS直聘统一管理本人账号信息
      </div>
      <Footer />
    </div>
  );
};
export default function Layout() {
  const [loginType, setLoginType] = useState(false);
  const [show, setShow] = useState(true);
  const [isWeChatType, setIsWeChatType] = useState(false);
  const [current, setCurrent] = useState(0);
  const LoginIcon = loginType ? QrCode : Monitor;
  const triggerLoginType = () => {
    setLoginType(!loginType);
    setCurrent(0);
  };
  const messages = {
    0: [
      { icon: MessageSquareQuote, text: "沟通", subText: "在线职位及时沟通" },
      { icon: Package2, text: "任性选", subText: "各大行业职位任你选" },
    ],
    1: [
      {
        icon: MessageSquareText,
        text: "招聘效果好",
        subText: "与职场牛人在线开聊",
      },
      { icon: Drum, text: "更多在线牛人", subText: "入职速度快" },
      {
        icon: Package2,
        text: "人才匹配度高",
        subText: "获取更精准的牛人",
      },
    ],
  };
  return (
    <div className="dark:bg-[#002929] w-full left-0 right-0 bottom-0 top-0 absolute bg-[#00c1c1] bg-no-repeat bg-bottom bg-contain bg-[url(https://img.bosszhipin.com/static/file/2022/zlqc2m9fao1667185843533.png)]">
      <div className="container mx-auto flex relative h-full">
        <div className="absolute scale-85 right-0 top-3 flex items-center text-gray-600 dark:text-gray-200 pt-16 ml-auto">
          <PhoneCall size={"16px"} />
          <p className="pl-2">客户服务热线: 400 065 5799</p>
        </div>
        <div className="flex m-auto overflow-hidden shadow-md rounded-[35px] bg-white w-[50%] h-[60%]">
          <div className="flex flex-col pt-16 pl-10 gap-14 px-6 flex-[.3] bg-gradient-to-tr from-[#F6F6F4] to-[#E1FBFF] dark:from-[#2d2d25] dark:to-[hsl(188,100%,14%)]">
            <div className="flex gap-4">
              <Image
                src="https://static.zhipin.com/v2/web/geek/images/logo.png"
                width={40}
                height={40}
                alt="missed"
              />
              <div className="flex-flex-col">
                <div className="text-[#00c1c1]">找工作</div>
                <div className="text-[#00c1c1] text-sm">上BOSS直聘直接谈</div>
              </div>
            </div>
            {messages[current].map((item, index) => (
              <div className="flex gap-4" key={item.text}>
                <item.icon
                  size={37}
                  strokeWidth={"1px"}
                  className="text-gray-800 dark:text-gray-100"
                />
                <div className="flex-flex-col">
                  <div className="text-gray-900 dark:text-gray-100 text-sm">{item.text}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">{item.subText}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 flex-[0.8] dark:bg-gray-950">
            {show && (
              <div
                className="cursor-pointer group flex items-center gap-4 h-auto"
                onClick={() => triggerLoginType()}
              >
                <div className="relative">
                  <LoginIcon
                    size={40}
                    className="group-hover:text-[#00c1c1] text-gray-300 dark:text-gray-300 relative"
                  />
                  <div className="w-0 h-0 border-b-[28px] border-b-white dark:border-b-gray-950 absolute bottom-0 right-0 border-l-[28px] border-l-transparent"></div>
                </div>
                <div className="rounded-lg border select-none border-gray-500 dark:border-gray-500 shadow-md py-1 px-2 text-sm text-gray-400">
                  {loginType ? "APP扫码登陆" : "验证码登陆/注册"}
                </div>
              </div>
            )}
            {loginType ? (
              <QrCodeLogin
                isWeChatLogin={isWeChatType}
                setIsWeChatType={setIsWeChatType}
                triggerLoginType={triggerLoginType}
                setShow={setShow}
              />
            ) : (
              <MonitorLogin
                setIsWeChatType={setIsWeChatType}
                setCurrent={setCurrent}
                triggerLoginType={triggerLoginType}
                setShow={setShow}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
