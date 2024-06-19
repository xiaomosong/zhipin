import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { commentList, topListMock } from "../mock";
import { FaCheck } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";
import { PiShareFat } from "react-icons/pi";

import Image from "next/image";
import { LuMoreHorizontal } from "react-icons/lu";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { CiHashtag } from "react-icons/ci";
import { Heart } from "lucide-react";

import { MessageSquare } from "lucide-react";
import { Star } from "lucide-react";
import { BsFillQuestionSquareFill } from "react-icons/bs";
const Disinterest = forwardRef(({ handleDisinterestRef }, ref) => {
  const [item, setItem] = useState({});
  const [current, setCurrent] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useImperativeHandle(ref, () => {
    return {
      onOpen,
      setItem,
    };
  });
  const list = [
    {
      id: 2,
      title: "屏蔽此条内容",
      show: true,
    },
    {
      id: 1,
      show: !!item.topicList?.length,
      title: (
        <>
          减少看话题
          <div className="flex flex-wrap gap-2 empty:hidden">
            {item.topicList?.map((item) => (
              <div
                key={item.topicId}
                className="px-2 py-1 text-sm flex gap-2  text-gray-600 dark:text-gray-200 hover:cursor-pointer font-normal items-center rounded-full bg-gray-300/20 dark:bg-gray-500/20"
              >
                <CiHashtag
                  stroke="5"
                  className="text-gray-800 dark:text-gray-200"
                />
                {item.topicName}
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      id: 3,
      show: true,
      title: (
        <>
          <div className="flex gap-2 flex-col">
            不想看这位作者
            <div className="flex gap-2 items-center">
              <Image
                src={item.postUserInfo?.avatar}
                width={30}
                height={30}
                alt="missed"
                className="rounded-full size-[30px] ring-1 ring-gray-400/80 dark:ring-gray-200/80  outline transition-all duration-200"
              />
              <div className="">{item.postUserInfo?.bcName}</div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex flex-col">
                <div className="text-lg dark:text-gray-200">不感兴趣</div>
                <div className="text-sm dark:text-gray-200/80">
                  我们会为您减少相关推荐
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              {list.map(
                (item, index) =>
                  item.show && (
                    <div
                      key={item.id}
                      onClick={() => setCurrent(index)}
                      className={`${
                        current === index && "border-[#00c1c1] "
                      } items-center p-4 border rounded-[15px] flex justify-between hover:border-[#00c1c1] hover:cursor-pointer`}
                    >
                      <div className="flex flex-col gap-1 dark:text-gray-200/90">
                        {item.title}
                      </div>
                      {current === index && <FaCheck color="#00c1c1" />}
                    </div>
                  )
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  onClose(), setItem({}), setCurrent();
                }}
              >
                我再想想
              </Button>
              <Button
                color="primary"
                isDisabled={
                  !Array.from({ length: 3 }, (x, v) => v).includes(current)
                }
                onPress={() => {
                  handleDisinterestRef(item.originalContentId),
                    setItem({}),
                    setCurrent(),
                    onClose();
                }}
              >
                确认屏蔽
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
});
Disinterest.displayName = 'Disinterest'
const CommentList = ({ list, classNames }) => {
  const [current, setCurrent] = useState();
  const actionList = (likeCount, commentCount, index) => [
    {
      num: (current === index ? ++likeCount : likeCount) || "点赞",
      icon: Heart,
      type: "like",
      classNames: current === index && "text-[#00c1c1]",
    },
    {
      num: index === current ? "收起回复" : commentCount || "评论",
      classNames: current === index && "text-[#00c1c1]",
      icon: (current === index && RiMessageFill) || MessageSquare,
      type: "comment",
    },
  ];
  const handleAction = (type, index, item) => {
    const actions = {
      like: () => {
        item.likeCount = item.likeCount + 1;
        console.log("item :>> ", item);
      },
      share: () => {},
      comment: () => {
        setCurrent((cur) => (cur === index ? null : index));
      },
      collect: () => {},
    };
    actions[type]();
  };
  return (
    <div className={`flex flex-col pb-3 my-3 ${classNames}`}>
      {list.map(({ postUserInfo, ...item }, index) => (
        <div
        key={item.commentId}
          className="flex flex-col py-3 relative before:content-[''] before:absolute before:left-[25px] before:z-0 before:top-[70px] before:bottom-0 last:before:w-0 before:w-[1px] before:bg-gray-400/40
        after:absolute after:-left-[25px] after:z-[1] after:top-[35px]  after:bottom-0 first:after:h-[1px] after:w-[23px] first:after:bg-gray-400/40"
        >
          <div className="flex gap-3 ">
            <Image
              src={postUserInfo.avatar}
              width={50}
              height={50}
              alt="missed"
              className="rounded-full relative z-1 size-[50px] ring-1 ring-gray-400/80 dark:ring-gray-200/80  outline hover:ring-4 transition-all duration-200"
            />
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-gray-600 dark:text-gray-300/90 flex items-center gap-2">
                    {postUserInfo.bcName}{" "}
                    <div className="">{item.addTimeStr}</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-300/80 leading-5 text-sm">
                    {postUserInfo.bcTitle}
                  </div>
                </div>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    <Button
                      size="md"
                      isIconOnly
                      className="bg-transparent hover:bg-gray-300 dark:hover:bg-gray-600 font-bold"
                      radius="full"
                    >
                      <LuMoreHorizontal size={23} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-200 dark:bg-gray-900/90 py-2">
                    <div className="flex flex-col">
                      <Button className="bg-transparent" size="md">
                        投诉
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full  hidden lg:block flex-1 whitespace-normal text-gray-900 dark:text-gray-300/90">
                {item.content}
              </div>
              <div className="flex items-center gap-3">
                {actionList(item.likeCount, item.subCommentCount, index).map(
                  ({ icon: Icon, num, type, classNames }) => (
                    <Button
                      className={`bg-transparent ${classNames}`}
                      key={type}
                      size="md"
                      onClick={() => handleAction(type, index, item)}
                    >
                      <Icon size={20} /> {num}
                    </Button>
                  )
                )}
              </div>
              {current === index && (
                <div className="flex gap-3 items-center mb-3">
                  <Image
                    height={40}
                    width={40}
                    className="size-[40px] object-cover overflow-hidden rounded-full ring-2 ring-gray-300"
                    alt={
                      "https://static.zhipin.com/v2/web/geek/images/logo.png"
                    }
                    src="https://static.zhipin.com/v2/web/geek/images/logo.png"
                  />
                  <Input
                    placeholder={"回复: " + postUserInfo.bcName}
                    className="flex-1"
                  />
                  <Button className="bg-[#00c1c1]/10 text-[#00c1c1]">
                    发表评论
                  </Button>
                </div>
              )}
              {item?.subCommentCount > 0 && current === index && (
                <div className="pb-4 border-b border-b-gray-300/60 dark:text-gray-200">
                  以下已发表{item?.subCommentCount}条评论
                </div>
              )}
            </div>
          </div>
          {item?.subCommentList?.length > 0 && (
            <CommentList list={item.subCommentList} classNames="pl-[50px]" />
          )}
        </div>
      ))}
    </div>
  );
};
const Comment = ({ item, ...userInfo }) => {
  return (
    <div className="mt-3">
      <div className="flex gap-3 items-center">
        <Image
          height={40}
          width={40}
          className="size-[40px] object-cover overflow-hidden rounded-full ring-2 ring-gray-300"
          alt={"https://static.zhipin.com/v2/web/geek/images/logo.png"}
          src="https://static.zhipin.com/v2/web/geek/images/logo.png"
        />
        <Input placeholder={"回复:" + userInfo.bcName} className="flex-1" />
        <Button className="bg-[#00c1c1]/10 text-[#00c1c1]">发表评论</Button>
      </div>
      <div className="max-h-[800px] overflow-auto">
        <div className="py-4 border-b border-b-gray-300/60 dark:text-gray-200">
          {item?.commentCount}条评论
        </div>
        <div className="">
          <CommentList list={commentList} />
        </div>
      </div>
    </div>
  );
};
export default function TopicList() {
  const [current, setCurrent] = useState();
  const [topList, setTopList] = useState(topListMock);
  const actionList = (
    collectCount,
    commentCount,
    videoPlayCount,
    likeCount,
    index,
    ...item
  ) => [
    {
      num: likeCount || "点赞",
      icon: Heart,
      type: "like",
      classNames: item.liked && "text-[#00c1c1]",
    },
    {
      num: videoPlayCount || "分享",
      icon: PiShareFat,
      type: "share",
      classNames: "hover:text-[#00c1c1]",
    },
    {
      num: current === index ? "收起评论" : commentCount || "评论",
      classNames: current === index && "text-[#00c1c1]",
      icon: (current === index && RiMessageFill) || MessageSquare,
      type: "comment",
    },
    {
      num: collectCount || "收藏",
      icon: Star,
      type: "collect",
    },
  ];
  const handleAction = (type, index, item) => {
    const actions = {
      like: () => {
        item.liked = !item.liked;
        console.log("item.liked :>> ", item);
      },
      share: () => {},
      comment: () => {
        setCurrent((cur) => (cur === index ? null : index));
      },
      collect: () => {},
    };
    actions[type]();
  };
  const handleDisinterestRef = (id) => {
    topList.splice(
      topList.findIndex((item) => item.originalContentId === id),
      1
    );
    setTopList([...topList]);
  };
  const disinterestRef = useRef();
  const onOpen = (item) => {
    disinterestRef.current.onOpen();
    disinterestRef.current.setItem(item);
  };
  return (
    <div className="flex flex-col gap-3 flex-1 w-[50%] px-4 sm:px-0">
      <Disinterest
        ref={disinterestRef}
        handleDisinterestRef={handleDisinterestRef}
      />
      {topList.map(({ postUserInfo, ...item }, index) => (
        <div
          key={item.originalContentId}
          className="backdrop-blur-lg p-4 group hover:cursor-pointer bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-hidden"
        >
          <div className="flex gap-2 items-center">
            <Image
              src={postUserInfo.avatar}
              width={50}
              height={50}
              alt="missed"
              className="rounded-full size-[40px] sm:size-[45px] md:size-[50px] ring-1 ring-gray-400/80 dark:ring-gray-200/80  outline hover:ring-4 transition-all duration-200"
            />
            <div className="flex-1 flex justify-between">
              <div className="flex-1 flex flex-col justify-center text-sm md:text-medium">
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
                <PopoverContent className="bg-gray-200/30 dark:bg-gray-900/30 backdrop-blur-lg py-2">
                  <div className="flex flex-col">
                    <Button
                      className="text-small font-bold bg-transparent"
                      onClick={() => onOpen({ postUserInfo, ...item })}
                    >
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
          <div className="flex items-center mt-2">
            {actionList(
              item.collectCount,
              item.commentCount,
              item.videoPlayCount,
              item.likeCount,
              index,
              item
            ).map(({ icon: Icon, num, type, classNames }) => (
              <div key={type}>
                {(type === "share" && (
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
                    <Button
                      className={`bg-transparent ${classNames}`}
                      key={type}
                      onClick={() => handleAction(type, index, item)}
                    >
                      <Icon size={20} /> {num}
                    </Button>
                  </Tooltip>
                )) || (
                  <Button
                    className={`bg-transparent ${classNames}`}
                    key={type}
                    onClick={() => handleAction(type, index, item)}
                  >
                    <Icon size={20} /> {num}
                  </Button>
                )}
              </div>
            ))}
          </div>
          {current === index && (
            <Comment {...postUserInfo} item={{ ...item }} />
          )}
        </div>
      ))}
    </div>
  );
}
