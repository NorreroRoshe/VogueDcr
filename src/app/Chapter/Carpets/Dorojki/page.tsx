"use client"
import React from "react";

import { sitePathCategory } from "@/settings/site-path-cathegory";
import cls from "../../Chapter.module.scss";
import { GoodsCatalogue } from "@/components/GoodsCatalogue/GoodsCatalogue";

const CategoryPage: React.FC = () => {
  return (
    <div className={`${cls.container} ${cls.chapter__container}`}>
      <div className={cls.chapter__mt}>
        <GoodsCatalogue sitePathCategory={sitePathCategory[3]} />
      </div>
    </div>
  );
};

export default CategoryPage;
