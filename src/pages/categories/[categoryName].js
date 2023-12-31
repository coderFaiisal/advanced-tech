import ProductCard from "@/components/ui/ProductCard";
import { useRouter } from "next/router";

const CategoryDetailsPage = ({ products }) => {
  const { query } = useRouter();

  return (
    <div className="py-10">
      <div className="text-center mb-6">
        <p className="text-4xl font-bold mb-2">{query?.categoryName}</p>
        <p>Check & Get Your Desire Product!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-2xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailsPage;

export async function getStaticPaths() {
  try {

    // if (typeof window === "undefined") {
    //   return {
    //     props: {
    //       products: [],
    //       categories: [],
    //     },
    //   };
    // }

    const res = await fetch(`${process.env.BASE_URL}/api/categories`);
    const categories = await res.json();

    const paths = categories.map((category) => ({
      params: { categoryName: category?.name },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export const getStaticProps = async (context) => {
  const { params } = context;

  try {
    // if (typeof window === "undefined") {
    //   return {
    //     props: {
    //       products: [],
    //     },
    //   };
    // }

    const res = await fetch(
      `${process.env.BASE_URL}/api/products/${params.categoryName}`
    );

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    const data = await res.json();

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
