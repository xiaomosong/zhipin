/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-31 13:21:40
 * @LastEditors: Jhon
 */
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const btns = [
  { icon: FaDiscord, url: "https://discord.gg" },
  { icon: FaGithub, url: "https://github.com/xiaomosong/zhipin" },
  { icon: FaTwitter, url: "https://twitter.com" },
];
export default function Header() {
  return (
    <div className="absolute z-10 left-0 right-0 p-2 bg-gray-50 bg-opacity-10 backdrop-blur-sm ">
      <div className="container flex items-center gap-1 mx-auto">
        <div className="ml-auto">
          <ThemeSwitcher />
          {btns.map((item, index) => (
            <Button
              radius="full"
              key={item.icon}
              isIconOnly
              className="bg-transparent"
            >
              <item.icon size="22" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
export function ToolBar() {
  const router = useRouter();
  return (
    <div className="flex">
      <ThemeSwitcher />
      {btns.map((item, index) => (
        <Button
          key={item.icon}
          radius="full"
          onClick={() => router.push(item.url)}
          isIconOnly
          className="bg-transparent"
        >
          <item.icon size="22" />
        </Button>
      ))}
    </div>
  );
}
