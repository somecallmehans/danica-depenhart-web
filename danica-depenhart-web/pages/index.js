import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import bdb from "../public/bdb.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danica Depenhart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-row overflow-hidden">
          <div className="w-full md:w-1/2 md:text-left lg:p-20">
            <h1 className="w-full text-right text-7xl font-bold content-end">
              big dumb baby
            </h1>
            <h1 className="w-full text-right text-8xl font-bold content-end">
              writes poetry
            </h1>
          </div>
          <div className="">
            <Image src={bdb} alt="Danica Pic" width={550} height={650} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
