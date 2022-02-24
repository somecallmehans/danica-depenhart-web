import Layout from "../components/Layout";
import Image from "next/image";
import bdb from "../public/bdb.jpg";

export default function About() {
  return (
    <div>
      <Layout>
        <section className="bg-transparent mx-72">
          <div className="overflow-hidden px-1 max-h-screen">
            <div className="flex flex-row p-4">
              <div className="w-5/12 mx-auto max-h-full">
                <Image src={bdb} alt="Danica image" height={600} />
              </div>
              <div className="flex flex-col w-7/12">
                <div className="mx-4">
                  <p className="text-base">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure?
                  </p>
                  <br></br>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
