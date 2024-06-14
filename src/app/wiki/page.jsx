import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Wiki = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col items-center py-5">
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
        <div className="text-sm text-gray-500 tracking-wider">
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
      <div className="back-blur-lg bg-gray-200/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden p-5">
        <div className="text-lg">与你相关</div>
      </div>
    </div>
  );
};

export default Wiki;
