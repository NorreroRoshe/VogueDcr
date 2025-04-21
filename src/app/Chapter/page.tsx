"use client";

import React from "react";
import cls from "./Chapter.module.scss";
import {GoodsCatalogue} from "@/components/GoodsCatalogue/GoodsCatalogue";
import DownloadApps from "@/components/common/download-apps";

const Chapter: React.FC = () => {
  return (
    <>
      <div className={`${cls.container} ${cls.chapter__container}`}>
        <GoodsCatalogue/>

      </div>
      <div style={{borderBottom: '1px solid black'}}>
        <DownloadApps/>
      </div>
    </>
  );
};

export default Chapter;
