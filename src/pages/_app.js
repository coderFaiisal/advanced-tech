import RootLayout from "@/components/layout/RootLayout";
import PcBuilderProvider from "@/context/PcBuilderProvider";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <PcBuilderProvider>
      <ThemeProvider>
        <SessionProvider session={pageProps.session}>
          <RootLayout>
            <Component {...pageProps} />
            <Toaster />
          </RootLayout>
        </SessionProvider>
      </ThemeProvider>
    </PcBuilderProvider>
  );
}
