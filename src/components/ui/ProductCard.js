import { PcBuilderContext } from "@/context/PcBuilderProvider";
import { Card } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const { pcBuilderData, setPcBuilderData } = useContext(PcBuilderContext);

  const router = useRouter();
  return (
    <div className="mx-auto">
      <Card className="w-full max-w-[26rem] shadow-md  shadow-gray-500 hover:shadow-gray-500  hover:shadow-lg transition-all overflow-hidden cursor-pointer">
        <div
          onClick={() => router.push(`/products/${product?._id}`)}
          className="relative"
        >
          <Image
            className="rounded-t-lg w-full p-4"
            src={product?.image}
            alt={product?.name}
            priority={true}
            quality={100}
            width="200"
            height="200"
          />
          <div className="absolute top-0 right-0">
            <div className="text-xs font-medium text-slate-100  bg-black text-white bg-opacity-90 rounded-bl-xl text-center px-2 py-1">
              <span>{product?.category}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div
              className={`text-xs font-medium text-white ${
                product?.status === "Out of Stock" ? "bg-red-600" : "bg-black"
              } bg-opacity-90 rounded-tr-xl text-center px-2 py-1`}
            >
              <span>{product?.status}</span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <Link href={`/products/${product?._id}`}>
            <h5 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
              {product?.name}
            </h5>

            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-2 mr-2">
                <Rating
                  className="leading-none space-x-1"
                  initialRating={product?.averageRating}
                  readonly
                  fullSymbol={
                    <svg
                      className="w-4 h-4 fill-current text-amber-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  }
                  emptySymbol={
                    <svg
                      className="w-4 h-4 fill-current text-black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  }
                />

                <div className="inline-flex text-sm font-medium text-amber-600">
                  {product?.averageRating}
                </div>
              </div>

              <div>
                <div className="inline-flex text-sm font-medium bg-black text-white rounded-lg text-center px-2 py-0.5">
                  ${product?.price}
                </div>
              </div>
            </div>
          </Link>
          {router?.query?.referer && (
            <button
              onClick={() => {
                setPcBuilderData({
                  ...pcBuilderData,
                  [product.category]: product,
                });
                router.push("/pcBuilder", "/pcBuilder", { scroll: false });
              }}
              type="button"
              className="w-full py-2.5 px-5 mb- text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add To Builder
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
