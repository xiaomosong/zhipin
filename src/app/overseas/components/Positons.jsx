import React,{useState} from "react";
import { positionList } from "./mock";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { TiChevronRight } from "react-icons/ti";

export default function Positons() {
  const [isActive,setActive] = useState(false);
  const handleCurrent = (index) => {
    setActive(index)
  }
  return (
    <div className="backdrop-blur-lg bg-gray-200/30 dark:bg-gray-900/30 rounded-[15px] overflow-hidden">
      <div className="p-3">
        <div className="text-gray-600 dark:text-gray-200">职位筛选</div>
      </div>
      <div className="p-3 flex gap-3 flex-col">
        {positionList.map((item,index) => (
          <div key={item.code}>
            {item.subLevelModelList ? (
              <Popover placement="right" offset={20} >
                <PopoverTrigger>
                  <Button fullWidth onClick={() => handleCurrent(index)} className={`justify-between bg-opacity-40 hover:bg-[#00c1c1]/30 hover:text-[#00c1c1] ${isActive === index && 'bg-[#00c1c1]/30 text-[#00c1c1]'}`}>
                    {item.name} <TiChevronRight />{" "}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-gray-200/90 p-3 dark:bg-gray-800">
                  <div className="flex gap-3 flex-col ">
                    {item.subLevelModelList.map((subItem) => (
                      <Button key={subItem.code} fullWidth className="bg-opacity-40 justify-start hover:bg-[#00c1c1]/30 hover:text-[#00c1c1]">
                        {subItem.name}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button fullWidth className={`bg-opacity-40 justify-start hover:bg-[#00c1c1]/30 hover:text-[#00c1c1] ${isActive === index && 'bg-[#00c1c1]/30 text-[#00c1c1]'}`} onClick={() => handleCurrent(index)}>
                {item.name}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
