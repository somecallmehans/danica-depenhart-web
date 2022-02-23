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
        <div className="overflow-hidden p-60">
          <div className="mx-auto">
            <h1 className="w-full text-center text-8xl font-bold content-end">
              big dumb baby
            </h1>
            <h1 className="w-full text-center text-9xl font-bold content-end">
              writes poetry
            </h1>
          </div>
        </div>
      </Layout>
    </div>
  );
}
