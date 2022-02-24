import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import mainImg from "../public/background.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danica Depenhart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="">
          <div className="flex justify-center">
            <Image
              src={mainImg}
              alt="Main page img"
              width={1100}
              height={700}
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
