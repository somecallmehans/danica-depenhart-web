import Layout from "../components/Layout";
import Image from "next/image";
import bdb from "../public/bdb.jpg";

export default function About() {
  return (
    <div>
      <Layout>
        <section className="relative flex flex-col w-full h-full mx-auto mt-8 md:flex-row md:w-3/4">
          <div className="md:w-1/2 h-[300px] md:h-[600px] p-4 relative">
            <Image
              src={bdb}
              alt="Danica image"
              layout="fill"
              objectFit="contain"
              className="md:object-right"
            />
          </div>
          <div className="mt-2 md:w-1/2">
            <p className="px-4 text-[#30110d]">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}
