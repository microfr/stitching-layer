import dynamic from "next/dynamic";
import React from "react";

const CreditScore = dynamic(() => import("@microfr/credit-score"), {
  ssr: false
});

const Transactions = dynamic(() => import("@microfr/transactions"), {
  ssr: false
});

const Header = dynamic(() => import('@microfr/header'), {
    ssr: false
})

const Page = () => {
  return (
    <div style={{
      paddingTop: '80px', 
      display: 'flex', 
      justifyContent: 'space-around'
      }}>
      <Header />
      <Transactions />
      <CreditScore />
    </div>
  );
};

export default Page;
