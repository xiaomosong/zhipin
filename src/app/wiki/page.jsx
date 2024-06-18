import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { PiCodeFill } from "react-icons/pi";
import { HiPlay } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { GiEvilLove } from "react-icons/gi";

const Wiki = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex justify-center flex-col items-center py-5 px-4 sm:px-0 dark:text-white">
        <div className="flex gap-3 items-center">
          <Image
            src="https://img.bosszhipin.com/static/file/2022/ssr-tools-index-lib.png"
            width={50}
            className="size-[50px"
            height={50}
          />
          <div className="text-3xl">求职百科</div>
        </div>
        <div className="my-5 text-lg">
          BOSS职业求职词条已收录{" "}
          <span className="text-[#00c1c1] text-xl">1033</span> 个职业及
          <span className="text-[#00c1c1] text-xl">81</span>个行业
        </div>
        <div className="text-sm text-gray-500 tracking-wider dark:text-gray-200">
          快速了解不同职业的工作内容、薪资待遇以及行业动向、政策情况，助你轻松找工作。
        </div>
      </div>
      <div className="max-w-xl lg:max-w-5xl md:max-w-4xl sm:max-w-3xl mx-auto px-4 sm:px-0">
        <div className="pl-4 ring-1 ring-gray-300 has-[:focus]:ring-[#00c1c1] has-[:focus]:ring-2 hover:ring-[#00c1c1] py-2 pr-2 my-4 flex items-center gap-2 rounded-[20px] dark:bg-gray-500/50 bg-gray-300/50 bg-opacity-40">
          <input
            type="search"
            placeholder="搜索职位/行业"
            className="border-none w-full  dark:caret-slate-100 dark:placeholder-gray-50 dark:text-gray-100 outline-none bg-transparent flex-1 indent-1"
          />
          <Button
            size="lg"
            className="bg-[#00c1c1] dark:bg-[#00c1c1] text-gray-700 dark:text-gray-50"
          >
            搜索
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="back-blur-lg bg-gray-200/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden p-5">
          <div className="text-lg dark:text-white">与你相关</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-3 mt-4">
            {[3, 2, 1].map((item) => (
              <div key={item} className="p-4 flex gap-3 items-center bg-gray-300/50 hover:bg-gray-400/30 hover:cursor-pointer group rounded-[15px]">
                <PiCodeFill size={60} color="#00c1c1" />
                <div className="flex flex-col gap-2  ">
                  <div className="group-hover:text-[#00c1c1 dark:text-white">Web前端工程师</div>
                  <div className="flex gap-2 text-sm items-center text-gray-400 dark:text-white ">
                    <span>薪资待遇</span>
                    <span>工作内容</span>
                    <span>入行经验</span>
                    <span>岗位晋升</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="back-blur-lg bg-gray-200/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden p-5">
          <div className="text-lg dark:text-white">职业榜单</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-5">
            {[
              {
                url: "https://img.bosszhipin.com/beijin/cms/fafc9b56d5f26d448950245d547bb032fbcf1fe2146e01096e1e8f8db8373f697ccc7c26441c49fe99a47d3e6b626989.png",
                title: "热搜职业榜",
              },
              {
                url: "https://img.bosszhipin.com/beijin/cms/b8186d5424740bcec6b8dd2acde7d884fbcf1fe2146e01096e1e8f8db8373f69134220582eb844e69dbd08b2c1b0d41d.png",
                title: "薪酬涨幅榜",
              },
              {
                url: "https://img.bosszhipin.com/beijin/cms/f0392d80b4564896fe3d2587d6a5ec96fbcf1fe2146e01096e1e8f8db8373f699a52cda6ce7d4ea9a2106a1ed6cc97ca.png",
                title: "新兴职业榜",
              },
              {
                url: "https://img.bosszhipin.com/beijin/cms/e4659ee42402c2f0c1adebe316e05477fbcf1fe2146e01096e1e8f8db8373f697bb4ef362574452791fd6cbb7433ed11.png",
                title: "新增词条榜",
              },
            ].map((item) => (
              <div
                className={`flex ring-1 ring-gray-300 dark:text-white flex-1 flex-col group overflow-hidden rounded-[15px] relative`}
              >
                <div className="p-4 flex gap-2 items-center ">
                  <Image
                    src={item.url}
                    width={100}
                    height={40}
                    className="size-[30px] z-0 object-cover"
                  />
                  {item.title}
                </div>
                <div className="px-4 pb-4 max-h-[400px] flex flex-col gap-3 overflow-auto">
                  {Array.from({ length: 13 }).map((itemUrl, index) => (
                    <div className="flex items-center gap-3 ">
                      <div className="self-start">{index + 1}</div>
                      <div className="flex flex-col gap-1">
                        <div className="">视频编辑</div>
                        <div className="flex gap-2 text-sm text-gray-400">
                          Ta 们是剪辑声画光影的神剪手，懂观众，懂作品！
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="back-blur-lg bg-gray-200/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden p-5">
          <div className="text-lg dark:text-white">行业探索</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
            {[
              {
                url: "https://img.bosszhipin.com/static/file/2022/ssr-tools-index-industry-bg1.jpeg",
                title: "最受青睐",
              },
              {
                url: "https://img.bosszhipin.com/static/file/2022/ssr-tools-index-industry-bg2.jpeg",
                title: "本地热门",
              },
              {
                url: "https://img.bosszhipin.com/static/file/2022/ssr-tools-index-industry-bg3.jpeg",
                title: "近期热招",
              },
            ].map((item) => (
              <div
                className={`flex ring-1 ring-gray-300 dark:text-white flex-1 gap-2 flex-col group overflow-hidden rounded-[15px] relative`}
              >
                <Image
                  src={item.url}
                  width={100}
                  height={40}
                  className="w-full h-[70px] z-0 object-cover absolute top-0 left-0 right-0"
                />
                <div className="p-4 flex gap-2 items-center relative z-[1] dark:text-black">
                  <GiEvilLove size={30} className="text-red-400" /> {item.title}
                </div>
                <div className="p-3 max-h-[400px] overflow-auto flex flex-col gap-3">
                  {Array.from({ length: 13 }).map((itemUrl) => (
                    <div className="flex items-center gap-3">
                      <Image
                        width={60}
                        height={40}
                        src="https://img.bosszhipin.com/beijin/upload/admin/20220714/7a57a5a743894a0e3633bc8aa4ca4d89e07b57c897b35523b41026e92ea925e12592b3d6f009b2d0.png?x-oss-process=image/resize,w_256,limit_0"
                        className="w-full rounded-[15px] overflow-hidden"
                      />
                      <div className="flex flex-col gap-1">
                        <div className="">人力资源服务</div>
                        <div className="line-clamp-1 mb-2">
                          是指为通讯运营商或军工部分提供支持通讯需要的基础器材、集成电路板等相关设备的设备生产、制造、安装、维护等为主要工作和服务方向的行业。
                        </div>
                        <div className="flex gap-2 text-sm">1546 关注</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="back-blur-lg bg-gray-200/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden p-5">
          <div className="text-lg dark:text-white">职业探秘</div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mt-4">
            {[
              "https://img.bosszhipin.com/beijin/cms/07a60e28e71d167aa8b963b2c2771fe9fbcf1fe2146e01096e1e8f8db8373f6912f0448e60eb4676be9d48bd100232ec.jpg?x-oss-process=image/resize,w_540,limit_0",
              "https://img.bosszhipin.com/beijin/cms/1de51b8fcf920ed4c663a9b41d5f1369fbcf1fe2146e01096e1e8f8db8373f69882466c4b4354e1d84d5606bfb0bdf31.jpg?x-oss-process=image/resize,w_540,limit_0",
              "https://img.bosszhipin.com/beijin/cms/0e2fb606602d406c481e503ee211c539fbcf1fe2146e01096e1e8f8db8373f6976ebcef32c924876a76cf47375d5d24d.jpeg?x-oss-process=image/resize,w_540,limit_0",
              "https://img.bosszhipin.com/beijin/cms/9bb82e68ee1dc2653373ac54bbd910b4fbcf1fe2146e01096e1e8f8db8373f6964894dd2c02e4d72aa571119175b14a4.jpg?x-oss-process=image/resize,w_540,limit_0",
            ].map((item) => (
              <div className="flex flex-1 gap-2 flex-col group overflow-hidden">
                <div className="rounded-[15px] relative overflow-hidden ">
                  <Image
                    width={150}
                    height={100}
                    alt="missing"
                    className="w-full group-hover:scale-105 transition-all duration-150"
                    src={item}
                  />
                </div>

                <div className="dark:text-white ">揭秘“后浪”时代萌芽而出的新职业</div>
              </div>
            ))}
          </div>
        </div>
        <div className="back-blur-lg bg-gray-200/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden p-5">
          <div className="text-lg dark:text-white">职业故事</div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mt-4">
            {[3, 2, 1, 4].map((item) => (
              <div className="flex flex-col flex-1 gap-2 hover:cursor-pointer group/item">
                <div className="rounded-[15px] relative overflow-hidden group before:content-[''] before:absolute before:top-[80%] before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-t before:from-10% to-99% before:from-gray-900 to-transparent">
                  <Image
                    width={150}
                    height={100}
                    alt="123"
                    className="w-full group-hover:scale-105 transition-all duration-150"
                    src="https://img.bosszhipin.com/beijin/cms/42c45133bc521db6c6f77b4a826fd55c76bae8ab9724d2ec3909d5e99539d0fc59bdb3a9c7894cd681c3b7df47297e0e.png?x-oss-process=image/resize,w_540,limit_0"
                  />
                  <div className="group-hover:scale-110 transition-all duration-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-gray-300/90 group-hover/item:text-white m-auto">
                    <HiPlay size={60} />
                  </div>
                  <div className="flex absolute left-0 right-0 bottom-[10px] justify-between items-center gap-4 text-gray-50 px-3">
                    <div className="flex gap-1 items-center">
                      <BiLike size={23} />
                      12
                    </div>
                    <div className="flex gap-1 mr-auto items-center">
                      <FiMessageSquare size={23} />
                      12
                    </div>
                    <div className="right-0">02:32</div>
                  </div>
                </div>

                <div className="line-clamp-2 dark:text-white">
                  刷屏的广告词是怎么创作出来的？广告文案如何进入4a公司？4a公司和本地公司的区别有哪些？关于广告文案的入
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
