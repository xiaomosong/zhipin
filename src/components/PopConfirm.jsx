import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import React from "react";
import { CircleHelp } from "lucide-react";
export default function PopConfirm({ children, onDelete,title }) {
  return (
    <Popover placement="bottom">
      <PopoverTrigger className="relative z-[1]">{children}</PopoverTrigger>
      <PopoverContent className="bg-gray-200/50 backdrop-blur-lg dark:bg-gray-900/70">
        <div className="px-1 py-2 flex flex-col w-[200px]">
          <div className="text-small flex gap-2 mb-5 dark:text-gray-200">
            <CircleHelp size={17} color="var(--jjext-color-tips)" />
            {title}
          </div>
          <div className="flex ml-auto gap-3">
            <Button
              size="sm"
              variant="light"
              color="default"
              className="ml-auto"
            >
              取消
            </Button>
            <Button size="sm" color="danger" onClick={() => onDelete()}>
              删除
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
