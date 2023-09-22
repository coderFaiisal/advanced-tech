import Head from "next/head";
import Image from "next/image";
import React from "react";
import coverImage from "../../public/coverImage.jpg";
import RootLayout from "@/components/layout/RootLayout";
import ProductCard from "@/components/ui/ProductCard";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>AT - HOME</title>
        <meta name="description" content="PC Builder Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image src={coverImage} alt="background-image" layout="responsive" />

        <div className="py-10">
          <div className="text-center dark:text-white pb-8">
            <p className="text-4xl font-bold mb-2">Featured Products</p>
            <p>Check & Get Your Desire Product!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-2xl mx-auto">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
