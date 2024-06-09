import React, { useState } from "react";
import { jobList } from "./mock";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Jobs() {
  const [current,setCurrent] = useState(0);
  return (
    <div className="flex flex-col gap-4 p-3 rounded-[15px] backdrop-blur-lg bg-gray-200/50 dark:bg-gray-900/20">
      {jobList.map((item,index) => (
        <div key={item.lid} onClick={() => setCurrent(index)} className={`hover:shadow-large group hover:cursor-pointer  border  overflow-hidden ${current === index ? 'border border-[#00c1c1] dark:border-[#00c1c1]' :'dark:border-gray-500/50'} box-border rounded-[15px]  flex flex-col justify-between backdrop-blur-lg bg-gray-50/20 dark:bg-gray-900/10`}>
          <div className="p-3 flex items-center justify-bewteen">
            <div className={`${current === index ? 'text-[#00c1c1] dark:text-[#00c1c1]' : 'text-gray-900 dark:text-gray-200'}   group-hover:text-[#00c1c1]`}>{item.jobName}</div>
            <div className="text-red-600 dark:text-red-600/80 ml-auto">{item.salaryDesc}</div>
          </div>
          <div className="px-3 flex gap-2 mt-3 mb-5 flex-wrap">
            {item.jobLabels.map((item) => (
              <Chip key={item} className="bg-gray-300/80 dark:bg-gray-300/40" radius="md">
                {item}
              </Chip>
            ))}
          </div>
          <div className="p-3 flex items-center backdrop-blur-lg text-gray-600/40 gap-3">
            <Image
              src={item.brandLogo}
              width={30}
              height={30} alt="missed"
              className="rounded-full p-[2px] bg-gray-50"
            />
            <div className="text-gray-600 dark:text-gray-200">{item.brandName}</div>
            <div className="scale-90 text-gray-800 dark:text-gray-200 ml-auto">
              {item.cityName}·{item.areaDistrict}·{item.businessDistrict}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
