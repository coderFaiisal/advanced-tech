import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div className="mx-auto">
      <div className="max-w-sm bg-white border border-blue-200 rounded-lg  shadow-md shadow-blue-200 hover:shadow-blue-200  hover:shadow-2xl transition-all overflow-hidden cursor-pointer">
        <div
          onClick={() => router.push(`/products/${product?._id}`)}
          className="relative"
        >
          <Image
            className="rounded-t-lg w-full p-4"
            src={product?.images}
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
                product?.Status === "Out of Stock" ? "bg-red-600" : "bg-black"
              } bg-opacity-90 rounded-tr-xl text-center px-2 py-1`}
            >
              <span>{product?.Status}</span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <Link href={`/products/${product?._id}`}>
            <h5 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
              {product?.name}
            </h5>

            {/* Rating and price */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Rating */}
              <div className="flex items-center space-x-2 mr-2">
                <Rating
                  className="leading-none space-x-1"
                  initialRating={product?.rating}
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
                {/* Rate */}
                <div className="inline-flex text-sm font-medium text-amber-600">
                  {product?.rating}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="inline-flex text-sm font-medium bg-black text-white rounded-lg text-center px-2 py-0.5">
                  ${product?.Price}
                </div>
              </div>
            </div>
          </Link>
          {router?.query?.referer && (
            <button
              type="button"
              className="w-full py-2.5 px-5 mb- text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
            >
              Add To Builder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
