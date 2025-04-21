"use client"
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import Seo from '@/components/seo/seo';
import Divider from '@/components/ui/divider';
import LoginForm from '@/components/auth/login-form';
import Breadcrumb from '@/components/ui/breadcrumb';
import {useStore} from "@/hooks/useStore";
import NotFound from "@/app/404/page";
import {observer} from "mobx-react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";


const SignInPage: React.FC = observer(({}) => {

  const store = useStore();

  const authStore = store.auth;
  const router = useRouter();


  useEffect(() => {
    if (authStore.isAuth) {
      router.push('/');
    }
  }, [authStore.isAuth, router]);


  return (
    <>
      {/* <Seo
        title="Sign In"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="signin"
      /> */}
      <Divider />
      <div className="flex justify-center items-center">
        {/* <Breadcrumb /> */}
        <div className="py-12 sm:py-16 lg:py-20">
          <LoginForm isPopup={false} className="border border-skin-base rounded-lg" />{' '}
        </div>
      </div>
      <Divider />
    </>
  );
})

export default SignInPage;

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, ['common', 'forms', 'menu', 'footer'])),
//     },
//   };
// };

//GPT
// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   if (!locale) {
//     // Если locale не определен, установите его в значение по умолчанию
//     locale = 'en'; // Здесь 'en' - это ваша локаль по умолчанию
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'forms', 'menu', 'footer'])),
//     },
//   };
// };
