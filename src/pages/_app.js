import RootLayout from "@/components/layout/RootLayout";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <RootLayout>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </RootLayout>
    </ThemeProvider>
  );
}
