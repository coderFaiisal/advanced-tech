import RootLayout from "@/components/layout/RootLayout";
import PcBuilderProvider from "@/context/PcBuilderProvider";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <PcBuilderProvider>
      <ThemeProvider>
        <SessionProvider session={pageProps.session}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </SessionProvider>
      </ThemeProvider>
    </PcBuilderProvider>
  );
}
