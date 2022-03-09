/*   ./styles/_app.js              */
import "../styles/main.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    const handleState = () => {
      setPageLoad(true);
    };
    const handleComplete = () => {
      setPageLoad(false);
    };

    router.events.on("routeChangeStart", handleState);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return pageLoad ? (
    <div className="flex flex-col items-center justify-center overflow-x-hidden h-screen font-serif">
      <div className="text-6xl text-[#30110d]"> Loading </div>;
    </div>
  ) : (
    <Component {...pageProps} />
  );
  /*  return <Component {...pageProps} />; */
}

export default MyApp;
