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
        <section className="image-box">
          <div className="overflow-hidden h-2/5 md:h-5/6 w-4/6 relative mx-auto my-11">
            <Image
              src={mainImg}
              alt="Main page image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
