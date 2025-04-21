"use client";

import React from "react";
import { GoodsCatalogue } from "@/components/GoodsCatalogue/GoodsCatalogue";
import cls from "../Chapter.module.scss";
import DownloadApps from "@/components/common/download-apps";

const CategoryPage: React.FC = () => {
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

export default CategoryPage;
