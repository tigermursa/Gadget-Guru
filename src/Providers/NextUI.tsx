"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

// className={
//   isActive(item.href)
//     ? "text-white font-bold "
//     : "text-gray-900 font-semibold "
// }