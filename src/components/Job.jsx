/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-31 20:05:51
 * @LastEditors: Jhon
 */
"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Chip,
  Button,
} from "@nextui-org/react";
import { MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { jobList } from "@/app/mock";

export default function Job({ tabsList, title }) {
  const [selected, setSelected] = useState("photos");
  const list = jobList;
  return (
    <div>
      <div className="text-center text-2xl my-12 dark:text-gray-200">
        {title}
      </div>
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        {tabsList.map((item, index) => (
          <Tab key={index} title={item.title}>
            <div className="grid grid-cols-3 gap-4">
              {list.map((item) => (
                <Card
                  shadow="none"
                  key={item}
                  className="shadow-sm bg-opacity-30 hover:cursor-pointer hover:shadow-large bg-gray-200/50 dark:bg-slate-900/50 backdrop-blur-lg"
                >
                  <CardBody className="p-0">
                    <div className="flex items-center gap-2 p-4">
                      {item.jobName}
                      <Chip radius="sm" className="text-[#00c1c1]">
                        猎头
                      </Chip>
                      {item.bossOnline && (
                        <Chip
                          className="bg-opacity-20 bg-purple-400"
                          color="secondary"
                          variant="dot"
                        >
                          在线
                        </Chip>
                      )}
                      <MessageSquareQuote className="text-gray-400" />
                      <div className="text-red-500 ml-auto">9-14K·14薪</div>
                    </div>
                    <div className="flex gap-1 px-2">
                      {item.jobLabels.map((item) => (
                        <Chip radius="sm" className="" key={item}>
                          {item}
                        </Chip>
                      ))}
                    </div>
                    <div className="backdrop-blur-sm flex items-center  px-4 py-2 mt-3 bg-gray-100/30 dark:bg-gray-700">
                      <div className="flex items-center gap-2">
                        <Image
                          width={35}
                          height={35} alt="missed"
                          className="rounded-md"
                          src={item.brandLogo}
                        />
                        <div className="text-gray-800 dark:text-gray-200 text-sm">
                          {item.brandName}
                        </div>
                      </div>
                      <div className="ml-auto text-gray-800 dark:text-gray-200 text-sm">
                        {item.cityName+item.areaDistrict+item.businessDistrict}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
