import React from "react";
import { jobDetail } from "./mock";
import { FaLocationDot } from "react-icons/fa6";
import { GraduationCap } from "lucide-react";
import { Package } from "lucide-react";
import { Button, Chip } from "@nextui-org/react";
import { Heart } from "lucide-react";
import Image from "next/image";
export default function JobDetails() {
  const {
    appendixInfo,
    atsOnlineApplyInfo,
    bossInfo,
    brandComInfo,
    jobInfo,
    oneKeyResumeInfo,
    relationInfo,
  } = jobDetail;
  return (
    <div className="rounded-[15px] flex flex-col justify-between relative h-[100%]  bg-gray-200/30 backdrop-blur-lg dark:bg-slate-900/30">
      <div className="px-5 pt-5">
        <div className="flex items-center">
          <div className="text-gray-600 text-lg leading-3 dark:text-gray-200">
            {jobInfo.jobName}
          </div>
          <div className="text-red-600 dark:text-red-600/80 text-lg ml-auto">
            {jobInfo.salaryDesc}
          </div>
          <div className="flex gap-3 relative top-4 ml-2">
            <Button className="text-[#00c1c1] bg-[#00c1c1]/30">
              {" "}
              <Heart /> 感兴趣
            </Button>
            <Button className="bg-[#00c1c1]">立即沟通</Button>
          </div>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-200 mt-3 pb-3">
          <FaLocationDot className="scale-85" />
          <div className="scale-85">{jobInfo.locationName}</div>
          <Package className="scale-85 ml-3" />
          <div className="scale-85">{jobInfo.experienceName}</div>
          <GraduationCap className="scale-85 ml-3" />
          <div className="scale-85 ">{jobInfo.degreeName}</div>
        </div>
      </div>
      <div className="overflow-auto flex-1 pb-5">
        <div className="text-md my-4 dark:text-gray-200 mx-5">驻外详情</div>
        <ul className="list-disc ml-8 leading-6 text-gray-500 mt-8 dark:text-gray-300 text-sm">
          <li>
            驻外国家/地区：
            {jobInfo.overseasInfo.countryList.map((item) => item)}
          </li>
          <li>
            工作语言：{jobInfo.overseasInfo.languageList.map((item) => item)}
          </li>
          <li>驻外时长：{jobInfo.overseasInfo.duration}</li>
        </ul>
        <div className=" mx-5 text-md my-4 dark:text-gray-200">职位描述</div>
        <div className=" mx-5 px-3 flex gap-2 mt-3 mb-5 flex-wrap">
          {jobInfo.showSkills.map((item) => (
            <Chip key={item}
              className="bg-gray-300/60 text-gray-700 dark:text-gray-200 text-sm"
              radius="md"
            >
              {item}
            </Chip>
          ))}
        </div>
        <textarea
          value={jobInfo.postDescription}
          readOnly
          className="text-sm leading-6 mx-5 text-gray-500 dark:text-gray-200  w-full bg-transparent outline-none border-none h-[500px] resize-none	"
        ></textarea>
        <div className="flex mx-5 gap-3 border-y border-y-gray-200  dark:border-y-gray-600 py-3">
          <Image
            src={bossInfo.large}
            width={50}
            height={50}
            alt="missed"
            className="rounded-full overflow-hidden p-[2px] bg-gray-50"
          />
          <div className="">
            <div className="text-gray-700 flex items-center dark:text-gray-200">
              {bossInfo.name}
              <div className="ml-2 text-gray-500 dark:text-gray-200/80 text-sm">
                {bossInfo.activeTimeDesc}
              </div>
            </div>
            <div className="text-gray-500 dark:text-gray-200/80 text-sm">
              {bossInfo.brandName}·{bossInfo.title}
            </div>
          </div>
        </div>
        <div className="flex gap-3 mx-5 border-b border-b-gray-200 dark:border-b-gray-200/30 py-3">
          <Image
            src={brandComInfo.logo}
            width={50}
            height={50} alt="missed"
            className="rounded-full overflow-hidden p-[2px] bg-gray-50 w-[50px] h-[50px]"
          />
          <div className="flex-1">
            <div className="text-gray-700 dark:text-gray-200 flex items-center">
              {brandComInfo.brandName}
            </div>
            <div className="text-gray-500 text-sm dark:text-gray-200/80">
              {brandComInfo.industryName}·{brandComInfo.customerBrandStageName}
              {brandComInfo.scaleName}
            </div>
          </div>
        </div>
        <div className="px-3 flex mx-5 gap-2 mt-3 mb-5 flex-wrap">
          {brandComInfo.labels.map((item) => (
            <Chip
              size="sm" key={item}
              className="bg-gray-300/60 text-gray-700 dark:text-gray-200 text-sm"
              radius="md"
            >
              {item}
            </Chip>
          ))}
        </div>
        <div className="text-md my-4 mx-5 border-t dark:border-t-gray-600 pt-3 text-gray-500 dark:text-gray-200">
          境内工作地址：
        </div>
        <div className="text-sm mx-5 flex items-center text-gray-500 dark:text-gray-200/70 gap-2">
          <FaLocationDot />
          {jobInfo.address}
        </div>
        <div className="flex mx-5 items-center mt-5 justify-center">
          <Button className="text-[#00c1c1] bg-[#00c1c1]/30 ">
            查看更多信息
          </Button>
        </div>
      </div>
    </div>
  );
}
