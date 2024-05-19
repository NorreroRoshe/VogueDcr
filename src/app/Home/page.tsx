"use client"

import React from "react";

import { SectionHero } from "./SectionHero/SectionHero";
import { Partnership } from "../../components/Partnership/Partnership";
import { LightCatalogue } from "../../components/LightCatalogue/LightCatalogue";
import { SaleBunner } from "./SaleBunner/SaleBunner";
import Container from '@/components/ui/container';
import { PreFooter } from './PreFooter/PreFooter';
import CategoryGridBlock from '@/components/common/category-grid-block';
import { SectionFoppa } from './SectionFoppa/SectionFoppa';
import { SectionButterfly } from './SectionButterfly/SectionButterfly';
import { MirrorAdvertisement } from './MirrorAdvertisement/MirrorAdvertisement';

const Home: React.FC = () => {
  return (
    <div className="wrapp">
      {/* <button         //Signin Данилы
        onClick={() =>
          signIn({
            email: "lightninhg-shop@outlook.com",
            password: "Cefd-21avt-pdc",
            rememberMe: true,
          })
        }
      >
        Sign in
      </button> */}
      <SectionHero />
      <Container>
        <CategoryGridBlock />
      </Container>
      <LightCatalogue />
      <SaleBunner />
      <SectionButterfly />
      <Partnership />
      <SectionFoppa />
      <MirrorAdvertisement />
      <PreFooter />
    </div>
  );
};

export default Home;
