import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "components/layout/Layout";
import { AllGroupsLayout } from "components/home/AllGroupsLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Qatar World Cup | Groups </title>
        <meta name="description" content="Qatar world cup info page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AllGroupsLayout />
      </Layout>
    </>
  );
};

export default Home;
