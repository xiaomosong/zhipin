"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import {
  Tv2,
  UserCog,
  LockKeyhole,
  ScanFace,
  ContactRound,
  RadioTower,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
const Item = ({ url, title, subTitle, rightSlot, bottomSlot }) => {
  console.log("url,title :>> ", url, title);
  return (
    <div className="">
      <div className="p-4 flex gap-3 rounded-[15px] overflow-hidden bg-gray-300/50 dark:bg-gray-600/40 group hover:cursor-pointer hover:bg-gray-400/30 dark:hover:bg-gray-600/30">
        <div className="size-[60px] transition-all duration-200 overflow-hidden group-hover:ring-4 group-hover:ring-gray-500/20 dark:group-hover:ring-gray-300/20 rounded-full group-hover:scale-105">
          <Image
            src={url}
            alt="missed"
            width={60}
            height={60}
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="flex gap-3 flex-1">
          <div className="flex flex-col justify-around">
            <div className="text-gray-700 dark:text-gray-200/90 text-lg group-hover:text-[#00c1c1]">
              {title}
            </div>
            <div className="text-gray-600/70 dark:text-gray-200/90 text-sm">{subTitle}</div>
          </div>
          {rightSlot}
        </div>
      </div>
      {bottomSlot}
    </div>
  );
};
const HomeCom = () => {
  const list = [
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-center-main-suggest.35003f00.png",
      title: "您有2个安全建议",
      subTitle: "了解和查看当前账号安全状态",
      rightSlot: (
        <Button className="bg-transparent ml-auto">
          去设置 <ChevronRight />
        </Button>
      ),
    },
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-center-main-privacy.7fcaa74b.png",
      title: "隐私权和个性化",
      subTitle: "了解和查看现已提供的权限信息",
    },
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-center-main-look.da9f5382.png",
      title: "个人信息查看",
      subTitle: "了解和查看现有的个人信息",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {list.map((item) => (
        <Item {...{ ...item }} key={item.title} />
      ))}
    </div>
  );
};
const UserCogCom = () => {
  return (
    <>
      <div className="border-b border-b-gray-700/20 dark:border-b-gray-200/20 pb-4 mb-4">
        <div className="text-lg text-gray-900 dark:text-gray-200">绑定手机</div>
        <div className=" text-gray-900/60 dark:text-gray-200/80 pt-3 text-sm">
          修改手机号请前往BOSS直聘APP端“我的-设置-账号与安全中心-账号管理”进行修改
        </div>
        <div className="mb-5 mt-8 flex gap-4 items-center text-gray-600/80 dark:text-gray-200">
          手机号{" "}
          <div className="p-2 rounded-[15px] bg-gray-300 dark:bg-gray-300/50 text-gray-600/80 dark:text-gray-200/80">
            156******40
          </div>
        </div>
      </div>
      <div className="border-b border-b-gray-700/20 dark:border-b-gray-200/20 pb-4 mb-4">
        <div className="text-lg text-gray-900 dark:text-gray-200">绑定微信号</div>
        <div className=" text-gray-900/60 pt-3 text-sm dark:text-gray-200/80">
          考虑您的账号安全，微信绑定请前往BOSS直聘APP端
          “我的-设置-账号与安全中心-账号管理-微信绑定”
        </div>
        <div className="mb-5 mt-8 flex gap-4 items-center">
          <div className="p-2 rounded-[15px] bg-gray-300 dark:bg-gray-300/50 text-gray-600/80  dark:text-gray-200/80 ">
            微信绑定号码 156******40
          </div>
          <Button className="bg-transparent text-[#00c1c1]">解除绑定</Button>
        </div>
      </div>
      <div className="border-b border-b-gray-700/20 dark:border-b-gray-200/20 pb-4 mb-4">
        <div className="text-lg text-gray-900 dark:text-gray-200">注销账号</div>
        <div className=" text-gray-900/60 dark:text-gray-200/80 pt-3 text-sm">
          注销，请前往BOSS直聘APP端 “我的-设置-账号与安全中心-账号管理” 进行注销
        </div>
      </div>
    </>
  );
};
const LockKeyholeComp = () => {
  const list = [
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-location.png",
      title: "位置权限",
      subTitle:
        "推荐附近职位、选择目标求职地点、添加/修改住址、设置我的住址等申请此权限",
      rightSlot: (
        <Button className="bg-transparent ml-auto">
          去设置 <ChevronRight />
        </Button>
      ),
    },
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-date.png",
      title: "日历权限",
      subTitle: "预约/接受面试邀请等申请此权限",
    },
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-xj.png",
      title: "相机权限",
      subTitle: "使用二维码扫描、拍摄图片等申请此权限",
    },
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-say.png",
      title: "麦克风权限",
      subTitle: "聊天时，点击发送语音/语音通话、视频招呼等申请此权限",
    },
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-img.png",
      title: "相册权限",
      subTitle: "聊天时，点击图片-相册、头像上传等申请此权限",
    },
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-shebei.png",
      title: "设备权限",
      subTitle: "满足安全风控的需求及确保您的账号安全",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {list.map((item) => (
        <Item {...{ ...item }} key={item.title} />
      ))}
    </div>
  );
};
const ScanFaceComp = () => {
  const list = [
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-auth-man-1.f2097931.png",
      title: (
        <div className="flex gap-2">
          邮箱验证
          <div className="rounded-[15px] bg-red-500/20 text-red-500 text-sm flex items-center justify-center px-2 group-hover:text-red-500">
            未绑定
          </div>
        </div>
      ),
      subTitle: (
        <div className="flex items-center gap-1">
          在异常登录情况下，您可以通过绑定的邮箱来保护您的账号安全。
        </div>
      ),
      rightSlot: (
        <Button className=" ml-auto self-center bg-[#00c1c1]/80 text-gray-200">
          去绑定 <ChevronRight />
        </Button>
      ),
      bottomSlot: (
        <div className="text-gray-500 mt-1 dark:text-gray-200/80">
          *点击去绑定则表示您同意绑定邮箱用于开启账户安全保护
        </div>
      ),
    },
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-auth-man-2.35003f00.png",
      title: (
        <div className="flex gap-2">
          安全问题
          <div className="rounded-[15px] bg-red-500/20 text-red-500 text-sm flex items-center justify-center px-2 group-hover:text-red-500">
            未开启
          </div>
        </div>
      ),
      subTitle: "在异常登录情况下，您可以选择使用安全问题来保护您的账号安全。",
      rightSlot: (
        <Button className="bg-[#00c1c1]/80 text-gray-200 ml-auto self-center">
          开启 <ChevronRight />
        </Button>
      ),
      bottomSlot: (
        <div className="text-gray-500 dark:text-gray-200/80 mt-1">
          在异常登录情况下，您可以选择使用安全问题来保护您的账号安全。
        </div>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3">
      {list.map((item) => (
        <Item {...{ ...item }} key={item.title} />
      ))}
    </div>
  );
};
const ContactRoundComp = () => {
  const list = [
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-account-personal-1.071c3382.png",
      title: "个人信息浏览与导出",
      subTitle: "查看及管理您的个人信息",
    },
    {
      url: "https://static.zhipin.com/fe-zhipin-geek/web/chat/v5291/static/images/icon-account-personal-2.5bc44d86.png",
      title: "个人权利行使",
      subTitle: "帮您了解行使权利的路径",
    },
    {
      url: "https://img.bosszhipin.com/static/file/2023/pu3o3lfxui1673938632488.png",
      title: "家庭住址信息",
      subTitle: "查看及管理您在BOSS直聘使用的地址信息",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {list.map((item) => (
        <Item {...{ ...item }} key={item.title} />
      ))}
    </div>
  );
};
const RadioTowerComp = () => {
  const list = [
    {
      url: "https://img.bosszhipin.com/static/file/2022/icon-center-auth-shebei.png",
      title: "OPPO||PEQM00",
      subTitle: "最近登录时间：2024-02-19 15:46:37",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {list.map((item) => (
        <Item {...{ ...item }} key={item.title} />
      ))}
    </div>
  );
};
export default function SecurityAccount() {
  const list = [
    {
      title: "首页",
      key: "home",
      subTitle: "在此可管理自己的信息、隐私和安全    ",
      icon: Tv2,
    },
    {
      title: "账号管理",
      key: "user",
      subTitle: "在此可查看以及了解您账号的一些绑定设置信息",
      icon: UserCog,
    },
    {
      title: "权限管理",
      key: "auth",
      subTitle:
        "查看管理您的已提供的权限，了解BOSS直聘如何收集、使用您的信息，以及如何保证您的信息安全    ",
      icon: LockKeyhole,
    },
    {
      title: "身份验证",
      key: "face",
      subTitle:
        "这些信息可以用于验证确实是您本人在登录，也可在您的账号有异常行为时来验证您的身份，以确保您的账号安全。",
      icon: ScanFace,
    },
    {
      title: "个人信息管理",
      key: "person",
      subTitle:
        "查看及管理您的个人信息，了解如何在BOSS直聘平台访问/修改、删除、导出您的个人信息以及改变授权范围。",
      icon: ContactRound,
    },
    {
      title: "登录设备管理",
      key: "device",
      subTitle:
        "以下是最近登录过您账号的设备情况，若您发现非本人操作，请及时前往BOSS直聘APP“我的-设置-账号与安全中心-登录设备管理”进行删除，以确保您的账号安全。",
      icon: RadioTower,
    },
  ];
  const [current, setCurrent] = useState(0);
  const titleObj = list.reduce(
    (p, c, index) => ((p[index] = { title: c.title, subTitle: c.subTitle }), p),
    {}
  )[current];
  const CurrentComponent = {
    0: HomeCom,
    1: UserCogCom,
    2: LockKeyholeComp,
    3: ScanFaceComp,
    4: ContactRoundComp,
    5: RadioTowerComp,
  }[current];
  return (
    <div className="container mx-auto  gap-4 flex mt-3 h-[800px] px-[150px]">
      <div className="flex-[.2] backdrop-blur-lg py-4 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-auto">
        <div className="text-gray-600 dark:text-gray-200 px-6 py-5 text-2xl">账号与安全中心</div>
        <div className="flex flex-col gap-3 px-4 mt-4">
          {list.map((item, index) => (
            <Button
              onClick={() => setCurrent(index)}
              key={item.title}
              size="lg"
              className={`${
                current === index
                  ? "is-active bg-[#00c1c1]/20 text-[#00c1c1] "
                  : "bg-transparent"
              } group justify-start hover:bg-gray-300 dark:hover:bg-gray-500`}
            >
              <item.icon /> {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-[.8]  backdrop-blur-lg p-6 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden">
        <div className="border-b border-b-gray-700/20 pb-4 mb-4 dark:border-b-gray-200/20">
          <div className="text-lg text-gray-900 dark:text-gray-200">{titleObj.title}</div>
          <div className=" text-gray-900/60 dark:text-gray-200/90 pt-3">{titleObj.subTitle}</div>
        </div>
        <CurrentComponent />
      </div>
    </div>
  );
}
