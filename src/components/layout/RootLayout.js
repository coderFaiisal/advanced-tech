import Header from "../shared/Header";
import { Footer } from "../shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
