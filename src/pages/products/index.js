import ProductCard from "@/components/ui/ProductCard";

const ProductsPage = ({ products }) => {
  return (
    <div className="py-10">
      <div className="text-center mb-6">
        <p className="text-4xl font-bold mb-2">Featured Products</p>
        <p>Check & Get Your Desire Product!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-2xl mx-auto">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};
