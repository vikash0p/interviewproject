import { SerchDataAndInputDatawithLocalstorageData } from "@/data/codingInterViewData/SerchDataAndInputDatawithLocalstorageData";
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter";
import SearchDataAndInputDatawithLocalstorageComponents from "@/components/reactInterviewPracticalComponet/SerchDataAndInputDatawithLocalstorageComponents";

import React from "react";

const serchDataAndInputDatawithLocalstorage = () => {
  return (
    <div className="-z-30">
      <SearchDataAndInputDatawithLocalstorageComponents />
      <div className="w-full lg:w-3/4 m-auto ">
        <ReactSynHighlighter
          exampleCode={SerchDataAndInputDatawithLocalstorageData}
        />
      </div>
    </div>
  );
};

export default serchDataAndInputDatawithLocalstorage;
