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
        <section className="px-2 flex flex-col border-2 border-blue-700">
          <div className="overflow-hidden h-1/2 border-2 border-red-600">
            <Image
              src={mainImg}
              className="object-contain"
              alt="Main page img"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
