import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
