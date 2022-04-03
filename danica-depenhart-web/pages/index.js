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
        <section className="flex h-fit">
          <div className="overflow-hidden h-80 w-5/6 md:h-[600px] md:w-3/6 relative mx-auto my-11 drop-shadow-md">
            <Image src={mainImg} alt="Main page image" layout="fill" />
          </div>
        </section>
      </Layout>
    </div>
  );
}
