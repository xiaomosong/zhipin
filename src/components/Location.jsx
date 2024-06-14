/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-31 18:21:37
 * @LastEditors: Jhon
 */
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { location } from "./mock";
export default function Location() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { siteList, hotCitySites, siteGroup } = location;
  const [flag, setFlag] = useState(false);
  const [current, setCurrent] = useState("");
  const [currentCity, setCurrentCity] = useState({});
  const l = siteGroup.map((item) => item.firstChar);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
        className="lg:max-w-5xl md:max-w-4xl sm:max-w-xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col rounded-t-[15px] bg-[url(https://img.bosszhipin.com/static/file/2023/u05xfi3sxx1686903508127.png)] bg-no-repeat bg-top bg-[length:100%_80px]">
                <div className="mb-8 pt-2 flex flex-wrap md:flex-nowrap md:items-center gap-3">
                  <div className="">
                    <Button
                      className="flex gap-2 items-center"
                      onClick={() => setFlag(!flag)}
                    >
                      热门城市 <FaChevronDown />{" "}
                    </Button>
                  </div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered">
                        按省份选择 <FaChevronDown />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      {siteList.map((item) => (
                        <DropdownItem key={item.code}>{item.name}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                  <Input
                    placeholder="搜索城市名称..."
                    className="w-full mt-5 md:mt-0 md:max-w-lg"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {hotCitySites
                    .slice(0, (flag && hotCitySites.length) || 10)
                    .map((item) => (
                      <Button
                        color="primary"
                        onClick={() => {
                          setCurrentCity(item), onClose();
                        }}
                        variant="flat"
                        className="text-[#00c1c1] bg-[#00c1c1]/10"
                        key={item.code}
                      >
                        {item.name}
                      </Button>
                    ))}
                </div>
                <div className="flex gap-3 mt-5 text-gray-900 dark:text-gray-100 flex-wrap">
                  按字母选择：
                  {l.map((item) => (
                    <a
                      href={`#${item}`}
                      key={item}
                      className={`block ${
                        (current === item && "text-[#00c1c1]") ||
                        "text-gray-900 dark:text-gray-100"
                      }`}
                      onClick={(e) => {
                        e.defaultPrevented, setCurrent(item);
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </ModalHeader>
              <ModalBody className="relative h-[800px]">
                <div className="">
                  <div className="sticky top-[90px]">
                    <div className="flex gap-3 flex-col">
                      {siteGroup.map((item) => (
                        <a
                          key={item.firstChar}
                          name={item.firstChar}
                          className={`
                            rounded-[15px] block overflow-hidden hover:before:bg-[#00c1c1] dark:hover:before:bg-[#00c1c1] bg-gray-200/50 dark:bg-gray-800/50 py-3 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[8px]  ${
                              current === item.firstChar
                                ? "before:bg-[#00c1c1]"
                                : "before:bg-gray-400"
                            }`}
                        >
                          <div className="pl-5 py-2  flex flex-col group">
                            <div className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-100">
                              <div
                                className={`${
                                  current === item.firstChar && "text-[#00c1c1]"
                                }`}
                              >
                                {item.firstChar}
                              </div>
                              {item.cityList.slice(0, 9).map((listboxItem) => (
                                <Button
                                  size="md"
                                  className="bg-transparent"
                                  key={listboxItem.code}
                                  onClick={() => {
                                    setCurrentCity(listboxItem), onClose();
                                  }}
                                >
                                  {listboxItem.name}
                                </Button>
                              ))}
                            </div>
                            <div className="flex-wrap hidden group-hover:flex">
                              {item.cityList.slice(9).map((listboxItem) => (
                                <Button
                                  size="md"
                                  className="bg-transparent"
                                  key={listboxItem.code}
                                  onClick={() => {
                                    setCurrentCity(listboxItem), onClose();
                                  }}
                                >
                                  {listboxItem.name}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div
        onClick={onOpen}
        className="flex items-center gap-1 flex-nowrap dark:text-gray-200 hover:cursor-pointer"
      >
        <div className="text-[#00c1c1] whitespace-nowrap dark:text-[#00c1c1] flex items-center">
          <FaLocationDot color="#00c1c1" />
          {currentCity.name || "珠海"}
        </div>
        <div className="whitespace-nowrap">[切换]</div>
      </div>
    </>
  );
}
