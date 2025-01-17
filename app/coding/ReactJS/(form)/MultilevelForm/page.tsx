import React from "react";
import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
import MultiLevelFormComponent from "@/components/reactInterviewPracticalComponet/MultilevelFormComponent";
import { MultiLevelFromData } from "@/utils/data/codingInterViewData/MultilevelFormData";

const MultiLevelForm = () => {
  return (
    <div>
      <MultiLevelFormComponent />
      <div className="w-full lg:w-3/4 m-auto">
        <ReactSynHighlighter exampleCode={MultiLevelFromData} />
      </div>
    </div>
  );
};

export default MultiLevelForm;
