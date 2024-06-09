import React from "react";
import { topList } from "../mock";
import Image from "next/image";
import { LuMoreHorizontal } from "react-icons/lu";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { CiHashtag } from "react-icons/ci";
import { Heart } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Star } from "lucide-react";
import { BsFillQuestionSquareFill } from "react-icons/bs";

export default function TopicList() {
  const actionList = (collectCount,commentCount,videoPlayCount,likeCount) => [
    { num: likeCount, icon: Heart },
    { num: videoPlayCount, icon: SquareArrowOutUpRight },
    { num: commentCount, icon: MessageSquare },
    { num: collectCount, icon: Star },
  ];
  return (
    <div className="flex flex-col gap-3 flex-1 w-[50%] px-4 sm:px-0">
      {topList.map(({ postUserInfo, ...item }) => (
        <div
          key={item.cid}
          className="backdrop-blur-lg p-4 group hover:cursor-pointer bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden"
        >
          <div className="flex gap-2">
            <Image
              src={postUserInfo.avatar}
              width={50}
              height={50}
              alt="missed"
              className="rounded-full size-[50px] ring-1 ring-gray-400/80 dark:ring-gray-200/80  outline hover:ring-4 transition-all duration-200"
            />
            <div className="flex-1 flex justify-between">
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-gray-600 dark:text-gray-300/90">
                  {postUserInfo.bcName}
                </div>
                <div className="text-gray-500 dark:text-gray-300/80 leading-5 text-sm">
                  {postUserInfo.bcTitle}
                </div>
              </div>
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    size="lg"
                    isIconOnly
                    className="bg-transparent hover:bg-gray-300 dark:hover:bg-gray-600 font-bold"
                    radius="full"
                  >
                    <LuMoreHorizontal size={23} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-gray-200 dark:bg-gray-900/90 py-2">
                  <div className="flex flex-col">
                    <Button className="text-small font-bold bg-transparent">
                      不敢兴趣
                    </Button>
                    <Button className="bg-transparent">投诉</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="py-2 hover:text-[#00c1c1] w-full hidden lg:block flex-1 whitespace-normal text-gray-900 font-bold dark:text-gray-300/90 text-lg">
            {item.questionInfo?.content}
          </div>
          <div
            className="leading-6 relative pt-4 lg:pt-0 whitespace-normal line-clamp-3 hover:line-clamp-none text-gray-600 tracking-wide dark:text-gray-300 break-words"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></div>
          {item.file && (
            <div className="w-full flex items-center my-3">
              <video
                controls
                className="rounded-[15px] overflow-hidden"
                poster={item.file.coverUrl}
                loop
                muted
                src={item.file?.url}
                width={item.file?.width / 2}
                height={item.file?.height / 2}
              />
            </div>
          )}
          <div className="flex gap-3 my-3 empty:hidden flex-wrap">
            {item.picList?.map?.((item) => (
              <div
                className="size-[80px] sm:size-[100px] md:size-[150px] lg:size-[200px] overflow-hidden rounded-[15px]"
                key={item.url}
              >
                <Image
                  width={200}
                  height={200}
                  alt="missed"
                  className="size-[80px] sm:size-[100px] md:size-[150px] lg:size-[200px] object-cover hover:scale-110 transition-all h-full duration-400"
                  src={item.url}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-3 empty:hidden">
            {item.topicList?.map((item) => (
              <div
                key={item.topicId}
                className="px-2 py-1 text-sm flex gap-2  text-[#00c1c1] font-normal items-center rounded-full bg-[#00c1c1]/10"
              >
                <CiHashtag stroke="5" color="#00c1c1" />
                {item.topicName}
              </div>
            ))}
          </div>
          {item.questionInfo?.content && (
            <div className="rounded-[15px] bg-gray-300/50 dark:bg-gray-900/50 p-2 my-4 flex items-center gap-2 lg:hidden">
              <div className="flex justify-center items-center self-start size-10 p-2 bg-[#00c1c1]/20 rounded-[15px]">
                <BsFillQuestionSquareFill color="#00c1c1" size={23} />
              </div>
              <div className="text-gray-600 dark:text-gray-300/90 text-md">
                {item.questionInfo?.content}
              </div>
            </div>
          )}
          <div className="flex sm:gap-3 items-center mt-2">
            {actionList(item.collectCount,item.videoPlayCount,item.videoPlayCount,item.likeCount).map(({icon:Icon,num}) => (
              <Button className="bg-transparent" key={Icon}>
                <Icon size={20}/> {num}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
