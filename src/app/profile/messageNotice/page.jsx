"use client";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
  Switch,
} from "@nextui-org/react";
import { TbCurrentLocation } from "react-icons/tb";

import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  MessageSquareText,
  Donut,
  Bell,
  Trash2,
  ChevronRight,
} from "lucide-react";
import { FaPlus } from "react-icons/fa6";

import { FiEdit } from "react-icons/fi";
import { replyList } from "../mock";
import PopConfirm from "@/components/PopConfirm";
import { useSlot } from "@/hooks";
import { greeting, greetingTemplateList } from "./mock";
const Item = ({ content, index, handle, ...item }) => {
  return (
    <li
      className={`relative before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-gray-500/50 before:relative before:top-2 p-4 flex gap-3 rounded-[15px] overflow-hidden hover:shadow-md bg-gray-300/50 dark:bg-gray-900/40 group hover:cursor-pointer hover:bg-gray-400/30 dark:hover:bg-gray-600/30`}
    >
      <div className="flex gap-3 flex-1 flex-col md:flex-row">
        <div className="text-gray-700 dark:text-gray-200/90  ">{content}</div>
        <div className="flex items-center gap-3 ml-auto relative">
          <PopConfirm
            title="您确定要删除这项吗?"
            onDelete={() => handle("delete", { id: item.fastReplyId })}
          >
            <Button isIconOnly radius="full" size="sm" className="text-red-600">
              <Trash2 size={18} />
            </Button>
          </PopConfirm>

          <Button
            isIconOnly
            radius="full"
            onClick={() => handle("edit", { id: item.fastReplyId })}
            onOpen
            size="sm"
          >
            <FiEdit size={18} />
          </Button>
        </div>
      </div>
    </li>
  );
};
const MessageList = ({ list, setCurrent, current }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      placement="bottom"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button className="flex lg:hidden hover:bg-gray-500/50">
          消息通知
          <ChevronRight />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-gray-200 dark:bg-gray-900/90 py-2">
        <div className="flex flex-col gap-3">
          {list.map((item, index) => (
            <Button
              onClick={() => {
                setCurrent(index), setIsOpen(false);
              }}
              key={item.title}
              size="lg"
              className={`${
                current === index
                  ? "is-active bg-[#00c1c1]/20 text-[#00c1c1] "
                  : "bg-transparent"
              } group justify-start hover:bg-gray-300 dark:hover:bg-gray-500`}
            >
              <item.icon size={23} /> {item.title}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
const HomeCom = (props) => {
  let [list, setList] = useState(replyList);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [typeForm, setType] = useState("add");
  const [replyItem, setReplyItem] = useState({});
  const slotObject = useSlot(props.children);
  console.log("slobObject :>> ", slotObject);
  const handle = (type, data) => {
    const actions = {
      edit: () => {
        onOpen();
        setType("edit");
        setTitle("编辑常用语");
        setReplyItem(list.find((item) => item.fastReplyId === data.id));
      },
      add: () => {
        onOpen();
        setReplyItem({});
        setType("add");
        setTitle("新增常用语");
      },
      delete: () => {
        list.splice(
          list.findIndex((item) => item.fastReplyId === data.id),
          1
        );
        setList([...list]);
        console.log("list :>> ", list);
      },
      confirm: () => {
        const types = {
          add: () => {
            list.splice(0, 0, {
              title: "",
              sortNo: 0,
              fastReplyId: Math.ceil(Math.random() * 1000000),
              ...replyItem,
            });
          },
          edit: () => {
            list.splice(
              list.findIndex(
                (item) => item.fastReplyId === replyItem.fastReplyId
              ),
              1,
              replyItem
            );
          },
        };
        types[typeForm]();
        onClose();
      },
    };
    actions?.[type]?.();
  };

  return (
    <div>
      <div className="flex justify-between overflow-hidden items-center border-b bg-gray-200/50 dark:bg-gray-900/50 sticky z-10 backdrop-blur-lg px-4 py-4 md:px-6 md:pb-6 top-0 border-b-gray-700/20 pb-4 mb-4 dark:border-b-gray-200/20">
        <div className="text-lg text-gray-900 dark:text-gray-200">
          {props.title}
        </div>
        <div className="flex gap-2">
          <Button
            isIconOnly
            radius="full"
            onClick={() => handle("add")}
            title="添加常用语"
          >
            <FaPlus />
          </Button>
          {slotObject.rightAction}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        isDismissable={false}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-900 dark:text-gray-200">
                {title}
              </ModalHeader>
              <ModalBody>
                <Textarea
                  value={replyItem?.content}
                  placeholder={`${
                    replyItem.fastReplyId ? "编辑" : "新增"
                  }常用语内容...`}
                  onChange={(e) =>
                    setReplyItem({ ...replyItem, content: e.target.value })
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  关闭
                </Button>
                <Button color="primary" onClick={() => handle("confirm")}>
                  确认
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="px-4 pb-4 md:px-6 md:pb-6">
        <ul className="grid grid-cols-1 gap-3">
          {list.map((item, index) => (
            <Item
              {...{ ...item, index: index + 1, handle }}
              key={item.fastReplyId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
const SetHelloNotice = ({ title, children }) => {
  const slotObject = useSlot(children);
  const [current, setCurrent] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentText, setCurrentText] = useState(
    "您好，我对这份工作非常感兴趣，希望可以有机会与您进一步沟通。"
  );
  const handleCurrent = ({ templateId }) => {
    setCurrentItem(templateId);
    setCurrentText(
      greetingTemplateList.find((item) => item.templateId === templateId)?.demo
    );
  };
  const list = greeting;
  const greetingList = greetingTemplateList.reduce(
    (p, c) => (
      !p[c.category] && (p[c.category] = []), p[c.category].push(c), p
    ),
    {}
  );

  return (
    <>
      <div className="flex gap-3 sm:gap-0 flex-col sm:flex-row sm:justify-between sm:items-center overflow-hidden border-b bg-gray-200/50 dark:bg-gray-900/50 sticky z-10 backdrop-blur-lg px-4 py-4 top-0 border-b-gray-700/20  dark:border-b-gray-200/20">
        <div className="text-lg text-gray-900 dark:text-gray-200">{title}</div>
        <div className="flex gap-2 justify-between sm:justify-start">
          <div className="flex flex-col">
            <div className="flex gap-3 text-md sm:ml-auto justify-between dark:text-gray-200">
              启用招呼语
              <Switch
                defaultSelected
                size="sm"
                aria-label="Automatic updates"
              />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300">
              启用后,将在下次发起沟通时生效
            </div>
          </div>
          {slotObject.rightAction}
        </div>
      </div>
      <div className="px-4 pt-4 sticky top-[77px]">
        <div className="flex gap-2 sticky top-0 items-center text-gray-900 dark:text-gray-200">
          <TbCurrentLocation size={23} className="text-lg" />
          <div className="bg-gray-300 dark:bg-gray-900/50 p-2 rounded-[15px]">
            {currentText}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-0 sm:gap-2 items-center mt-4 overflow-auto">
          {list.map((item, index) => (
            <Button
              key={item.value}
              variant="light"
              onClick={() => setCurrent(item.value)}
              className={`${
                current === item.value && " bg-[#00c1c1]/20 text-[#00c1c1]"
              } `}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
          {greetingList[current].map((item, index) => (
            <div
              onClick={() => handleCurrent(item)}
              key={item.encryptId}
              className={`p-4 ${
                currentItem === item.templateId && "ring-2 ring-[#00c1c1]"
              } rounded-[15px] dark:hover:border-[#00c1c1] hover:border-[#00c1c1] border dark:border-gray-600 hover:cursor-pointer hover:bg-gray-50/70 dark:hover:bg-gray-800/70 bg-gray-50/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-200`}
            >
              {item.demo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const SetNoticeSharp = () => {
  return <></>;
};
export default function MessageNotice() {
  const list = [
    {
      title: "常用语 (8条)",
      key: "home",
      subTitle: "",
      icon: MessageSquareText,
    },
    {
      title: "设置打招呼语",
      key: "user",
      subTitle: "在此可查看以及了解您账号的一些绑定设置信息",
      icon: Donut,
    },
    {
      title: "消息与提醒",
      key: "auth",
      subTitle:
        "查看管理您的已提供的权限，了解BOSS直聘如何收集、使用您的信息，以及如何保证您的信息安全    ",
      icon: Bell,
    },
  ];
  const [current, setCurrent] = useState(0);
  const titleObj = list.reduce(
    (p, c, index) => ((p[index] = { title: c.title, subTitle: c.subTitle }), p),
    {}
  )[current];
  const CurrentComponent = {
    0: (
      <HomeCom title={titleObj.title}>
        <div slot="rightAction">
          <MessageList list={list} current={current} setCurrent={setCurrent} />
        </div>
      </HomeCom>
    ),
    1: (
      <SetHelloNotice title={titleObj.title}>
        <div slot="rightAction">
          <MessageList list={list} current={current} setCurrent={setCurrent} />
        </div>
      </SetHelloNotice>
    ),
    2: <SetNoticeSharp />,
  }[current];
  return (
    <div className="container mx-auto gap-4 flex mt-3 h-[900px] xl:px-[100px] px-4 sm:px-0">
      <div className="hidden lg:flex-[.2] lg:flex flex-col backdrop-blur-lg py-4 bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-auto">
        <div className="text-gray-600 dark:text-gray-200 px-4 md:px-6 py-4 md:py-5 text-2xl">
          消息通知
        </div>
        <div className="flex flex-col gap-3 px-3 mt-4">
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
              <item.icon size={23} /> {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-1 md:flex-1 lg:flex-[.8] relative  bg-gray-300/50 dark:bg-gray-900/50 rounded-[15px] overflow-auto">
        {CurrentComponent}
      </div>
    </div>
  );
}
