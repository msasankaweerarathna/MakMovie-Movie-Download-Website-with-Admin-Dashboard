import Aside from "@/components/Aside";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Aside/>
  <Header/>

    <main>
      <Component {...pageProps} />
    </main>

  </>
}
