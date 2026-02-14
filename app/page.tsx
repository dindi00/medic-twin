"use client";

import { useState } from "react";
import HumanModel from "@/components/HumanModel";
import Sidebar from "@/components/Sidebar";
import { demoCases } from "@/lib/dummyData";
import { analyzeLabs } from "@/lib/labEngine";

export default function Home() {
  const [highlights, setHighlights] = useState<any[]>([]);

  const loadDemo = (caseName: string) => {
    const labs = demoCases[caseName].labs;
    const result = analyzeLabs(labs);
    setHighlights(result);
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-black">
        <HumanModel highlights={highlights} />
        <div className="absolute top-4 left-4 space-x-2">
          <button onClick={() => loadDemo("cardio")} className="bg-yellow-500 p-2">
            Cardio Risk
          </button>
          <button onClick={() => loadDemo("liver")} className="bg-red-500 p-2">
            Liver Stress
          </button>
          <button onClick={() => loadDemo("iron")} className="bg-blue-500 p-2">
            Iron Deficiency
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-gray-800">
        <Sidebar highlights={highlights} />
      </div>
    </div>
  );
}