'use client'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import React from "react";
import { CircleHelp } from "lucide-react";
export default function PopConfirm({ children, onDelete, content, confirmBtn,placement }) {
  return (
    <Popover placement={placement || 'bottom'}>
      <PopoverTrigger className="relative z-[1]">{children}</PopoverTrigger>
      <PopoverContent className="bg-gray-200/50 backdrop-blur-lg dark:bg-gray-900/60 shadow-lg">
        <div className="px-1 py-2 flex flex-col gap-3">
          <div className="text-small flex gap-2 mb-2 dark:text-gray-200">
            <CircleHelp size={17} color="var(--jjext-color-tips)" />
            {content}
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
            {confirmBtn || (
              <Button size="sm" color="danger" onClick={() => onDelete()}>
                删除
              </Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
