import Head from "next/head";
import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import CategoryCard from "@/components/ui/CategoryCard";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/ui/Banner"));

const HomePage = ({ products, categories }) => {
  return (
    <div>
      <Head>
        <title>ADVANCED TECH</title>
        <meta name="description" content="PC Builder Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <div className="py-10">
          <div className="text-center mb-2 lg:mb-6">
            <p className="text-4xl font-bold mb-2">Featured Products</p>
            <p>Check & Get Your Desire Product!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-2xl mx-auto">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>

        <div className="py-10">
          <div className="text-center mb-2 lg:mb-6">
            <p className="text-4xl font-bold mb-2">Featured Category</p>
            <p>Get Your Desire Product from Featured Category!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-2xl mx-auto">
            {categories?.map((category) => (
              <CategoryCard key={category?._id} category={category}>
                Hello
              </CategoryCard>
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
  try {
    // if (typeof window === "undefined") {
    //   return {
    //     props: {
    //       products: [],
    //       categories: [],
    //     },
    //   };
    // }

    const productsResponse = await fetch(
      `${process.env.BASE_URL}/api/products`
    );

    const categoriesResponse = await fetch(
      `${process.env.BASE_URL}/api/categories`
    );

    if (!productsResponse.ok || !categoriesResponse.ok) {
      throw new Error("Fetch failed");
    }

    const productsData = await productsResponse.json();

    const filteredData = productsData
      .filter((product) => product?.status === "In Stock")
      .sort(() => {
        return 0.5 - Math.random();
      })
      .slice(0, 8);

    const categoriesData = await categoriesResponse.json();

    return {
      props: {
        products: filteredData,
        categories: categoriesData,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
