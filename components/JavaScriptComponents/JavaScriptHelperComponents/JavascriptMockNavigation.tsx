"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JavaScriptMockData } from "@/utils/data/JavaScriptData/JavaScriptMockData";
import { JavaScriptMockInterface } from "@/utils/types/types";
const JavaScriptMockNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      {JavaScriptMockData.map((question: JavaScriptMockInterface, index) => {
        const isActive = pathname.includes(question.link);

        return (
          <Link
            href={`/JavaScript/${question.link}`}
            key={question.id}
            className={`${
              isActive ? "text-indigo-600 font-semibold" : "text-gray-300"
            } hover:text-indigo-500 transition-colors`}
          >
           {index+1}.  {question.question}
          </Link>
        );
      })}
    </div>
  );
};

export default JavaScriptMockNavigation;
