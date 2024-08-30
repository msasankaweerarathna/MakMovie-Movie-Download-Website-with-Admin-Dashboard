import Aside from "@/components/Aside";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Aside/>
  <div className="container">
    <Header/>
  </div>
  

    <main>
      <Component {...pageProps} />
    </main>

  </>
}
