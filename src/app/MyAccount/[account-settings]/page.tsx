"use client"
import AccountLayout from '@/components/my-account/account-layout';
import AccountDetails from '@/components/my-account/account-details';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { observer } from "mobx-react";

const AccountDetailsPage = observer(() => {
  return (
    <>
      {/* <Seo
        title="Account Settings"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="my-account/account-settings"
      /> */}
      <AccountLayout>
        <AccountDetails />
      </AccountLayout>
    </>
  );
});

export default AccountDetailsPage;

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
