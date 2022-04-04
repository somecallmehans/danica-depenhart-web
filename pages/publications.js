import Layout from "../components/Layout";

const publicationInfo = [
  {
    id: 1,
    title: "it is an intensely private experience",
    url: "https://www.triquarterly.org/issues/issue-152/it-intensely-private-experience",
    publication: "Triquarterly",
  },
  {
    id: 2,
    title: "party (like it's 2019)",
    url: "https://prettyowlpoetry.com/2021/01/26/issue-28-winter-2021/",
    publication: "Pretty Owl",
  },
  {
    id: 3,
    title: "dogs from the future",
    url: "https://burningword.com/tag/100/page/9/",
    publication: "Burningword Literary Journal",
  },
];

export default function Publications() {
  return (
    <Layout>
      <section className="relative flex flex-col pt-8 w-full mx-auto">
        <div className="mx-auto text-[#30110d] text-5xl">publications</div>
        <div className="mx-auto w-full">
          {publicationInfo.map((pub) => {
            return (
              <div
                key={pub.id}
                className="my-6 text-[#30110d] text-center text-2xl"
              >
                <span className="mx-auto font-bold">{pub.title}</span>
                <a href={pub.url}>, {pub.publication}</a>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
