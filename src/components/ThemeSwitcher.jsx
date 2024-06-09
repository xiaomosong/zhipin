/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-30 09:13:46
 * @LastEditors: Jhon
 */
// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Sun, MoonStar } from "lucide-react";
import { Switch } from "@nextui-org/react";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Button
        radius="full"
        className="bg-transparent hidden sm:flex"
        isIconOnly
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <MoonStar /> : <Sun />}
      </Button>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        onValueChange={(selected) => {
          setTheme(selected ? "light" : "dark");
        }}
        className="flex sm:hidden"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <MoonStar className={className} />
          ) : (
            <Sun className={className} />
          )
        }
      > <div className="text-gary-900 dark:text-gray-200">昼夜模式</div> </Switch>
    </>
  );
}
