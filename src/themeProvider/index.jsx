/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-30 09:12:17
 * @LastEditors: Jhon
 */
// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
