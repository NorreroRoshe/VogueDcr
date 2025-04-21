"use client"

import React, {useEffect} from "react";

import { SectionHero } from "./Home/SectionHero/SectionHero";
import { Partnership } from "../components/Partnership/Partnership";
import { LightCatalogue } from "../components/LightCatalogue/LightCatalogue";
import { useModalAction } from '../components/common/modal/modal.context';
import { SaleBunner } from "./Home/SaleBunner/SaleBunner";
import Container from '@/components/ui/container';
import { PreFooter } from './Home/PreFooter/PreFooter';
import CategoryGridBlock from '@/components/common/category-grid-block';
import { SectionFoppa } from './Home/SectionFoppa/SectionFoppa';
import { SectionButterfly } from './Home/SectionButterfly/SectionButterfly';
import { MirrorAdvertisement } from './Home/MirrorAdvertisement/MirrorAdvertisement';
import {useStore} from "@/hooks/useStore";

const Home: React.FC = () => {
  const store = useStore();

  const productStore = store.product;

  const { closeModal, openModal } = useModalAction();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    if (!isFirstVisit) {
      localStorage.setItem("isFirstVisit", "true");
      setTimeout(() => {
        openModal("SUCCESS_CHANGE_PASSWORD");
      }, 1000);
    }
  }, [openModal]);



  useEffect(() => {
    productStore.getProducts(8, 0, {
      // ProductTypes : [1, 2, 3, 4, 5, 6],
      IsSale: true});


    productStore.getNewProducts({
      From: 0,
      Count: 16,
    });

    productStore.getButtBrandProducts({
      From: 0,
      Count: 5,
    });

    productStore.getFoppaBrandProducts({
      From: 0,
      Count: 5,
    });

  }, []);



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
