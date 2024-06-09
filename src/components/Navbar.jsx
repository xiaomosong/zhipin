/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-29 14:50:04
 * @LastEditors: Jhon
 */
"use client";
import React, { useState } from "react";
import { IoSearch, IoLogInOutline } from "react-icons/io5";
import {
  UserCog,
  Bell,
  VenetianMask,
  ShieldCheck,
  MessageSquareHeart,
} from "lucide-react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Mail } from "lucide-react";
import { GiDiploma } from "react-icons/gi";
import Image from "next/image";
import { ToolBar } from "@/components/Header";
import { usePathname } from "next/navigation";
import Location from "./Location";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
export default function NavbarCus() {
  const navs = [
    { title: "首页", url: "/home" },
    { title: "推荐" },
    { title: "搜索" },
    { title: "公司" },
    { title: "校园" },
    { title: "海归" },
    { title: "APP" },
    { title: "资讯", url: "/information" },
    { title: "有了", url: "/topic" },
    { title: "海外", url: "/overseas" },
    { title: "无障碍地区" },
  ];
  const profileListMenu = [
    {
      icon: ShieldCheck,
      url: "/profile/securityAccount",
      title: "账号与安全中心",
    },
    {
      icon: UserCog,
      url: "/profile/settings",
      title: "我的设置/个人中心",
    },
    {
      icon: GiDiploma,
      url: "",
      title: "我的简历",
    },
    {
      icon: Mail,
      url: "/message",
      title: "我的沟通",
    },
    {
      icon: VenetianMask,
      url: "",
      title: "隐私保护",
    },
    {
      icon: Bell,
      url: "/profile/messageNotice",
      title: "聊天消息/招呼语",
    },
    {
      icon: MessageSquareHeart,
      url: "/profile/feedback",
      title: "帮助与反馈",
    },
    {
      icon: IoLogInOutline,
      url: "/login",
      title: "退出当前登录",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const pathName = usePathname();
  const router = useRouter();
  return (
    <Navbar
      isBordered
      maxWidth="full"
      isBlurred
      className="dark:bg-[#132828]"
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="container mx-auto flex items-center h-full">
        <Image
          width={100}
          height={0}
          alt="missed"
          className="mr-4 object-contain"
          src="https://img.bosszhipin.com/static/file/2023/odhroxegzz1678788090652.png"
        />

        <NavbarContent className="gap-4 relative hidden xl:flex">
          <Location />
          {navs.map((item, index) => (
            <NavbarItem key={item.title}>
              <Link
                href={item.url}
                aria-current="page"
                className={`text-gray-900 tracking-wider dark:text-gray-200 ${
                  item.url === pathName && "text-[#00c1c1] dark:text-[#00c1c1] "
                }`}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="gap-2">
          <NavbarContent justify="end" className="gap-2">
            {!isLogin ? (
              <div className="hidden 2xl:block">
                {/* <Button className="bg-transparent">我要招聘</Button>
                <Button className="bg-transparent">我要找工作</Button> */}
                <Button
                  className="border bg-transparent border-[#00c1c1]"
                  onClick={() => {
                    setLogin(true), router.push("/login");
                  }}
                >
                  登陆/注册
                </Button>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <div
                  className={`bg-gradient-to-r group backdrop-blur-md hidden sm:flex from-[rgb(223,246,255)] dark:from-[#3c4d54]  to-[#ebfffd] dark:to-[#3f5b59] items-center justify-center rounded-[15px]`}
                >
                  <div className="p-3 flex items-center justify-center">
                    <IoSearch className="dark:text-gray-100" size={18} />
                  </div>
                  <input
                    type="search"
                    placeholder="搜索职位，公司"
                    className="border-none w-0  sm:group-hover:w-[250px] lg:group-hover:w-[150px] transition-all ease-in-out duration-500 dark:caret-slate-100 dark:placeholder-gray-50 dark:text-gray-100 outline-none bg-transparent indent-1"
                  />
                </div>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform mx-1"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://static.zhipin.com/v2/web/geek/images/logo.png"
                    />
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Profile Actions"
                    variant="flat"
                    className="text-gray-900 dark:text-gray-200"
                  >
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Hello, Yu Song</p>
                      <p className="font-semibold">您已作为求职者登录</p>
                    </DropdownItem>
                    {profileListMenu.map((item, index) => (
                      <DropdownItem
                        key="system"
                        className={
                          profileListMenu.length - 1 === index &&
                          "hover:text-red-600 "
                        }
                        color={
                          (profileListMenu.length - 1 === index && "danger") ||
                          "default"
                        }
                      >
                        <Link
                          href={item.url}
                          aria-current="page"
                          className={`text-gray-900 dark:text-gray-200 block text-md ${
                            item.url === pathName &&
                            "text-[#00c1c1] dark:text-[#00c1c1]"
                          } `}
                        >
                          <div className="flex gap-2">
                            <item.icon size={18} /> {item.title}
                          </div>
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}
          </NavbarContent>
          <div className="h-[20px] w-[1px] hidden md:block bg-gray-300 dark:bg-gray-500 mx-4"></div>
          <div className="hidden sm:block">
            <ToolBar />
          </div>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-gray-900 dark:text-gray-50 xl:hidden"
          />
        </NavbarContent>
      </div>
      <NavbarMenu className="gap-3">
        <div className="block sm:hidden">
          <ThemeSwitcher />
        </div>
        {navs.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full p-3 rounded-[15px] ${
                (pathName === item.url && "text-[#00c1c1] bg-gray-200/50") ||
                "text-gray-900 dark:text-gray-200"
              } `}
              href={item.url}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
