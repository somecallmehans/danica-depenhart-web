import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danica Depenhart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Hello World</div>
      </Layout>
    </div>
  );
}
