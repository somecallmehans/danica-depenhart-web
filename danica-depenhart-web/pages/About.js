import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
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
            <p className="px-4 text-[#30110d] md:w-2/3">
              Danica Depenhart is a Pittsburgh based writer, maker, & educator.
              She is a recipient of The Alex Rowan Award for poetry writing, &
              her work has been featured in TriQuarterly, Pretty Owl Poetry, and
              Burningword Literary Journal. You can find her on instagram
              <Link href="https://www.instagram.com/motherweather">
                <a> @motherweather</a>
              </Link>
              .
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}
