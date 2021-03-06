import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import bdb from "../public/000224440022.jpg";

export default function About() {
  return (
    <div>
      <Layout>
        <section className="relative flex flex-col w-full h-full mx-auto mt-2 md:flex-row md:w-3/4">
          <div className="md:w-2/3 h-[300px] w-[200px] md:h-[600px] p-4 drop-shadow-lg overflow-hidden">
            <Image
              src={bdb}
              alt="Danica image"
              layout="fill"
              objectFit="contain"
              className="md:object-right"
            />
          </div>
          <div className="mt-4 md:w-1/2 md:my-auto">
            <p className="px-8 text-black text-xl w-full lg:w-2/3 2xl:w-1/2">
              Danica depenhart is a Pittsburgh based writer, maker, & educator.
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
