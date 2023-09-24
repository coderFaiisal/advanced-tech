import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { AiFillStar, AiFillCheckCircle } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";

const ProductDetailsPage = ({ product }) => {
  const data = [
    {
      label: "Key Features",
      value: "Key Features",
      desc: product?.keyFeatures.map((kf, i) => (
        <div key={i} className="flex items-center space-x-2">
          <AiFillCheckCircle className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500 mb-3" />

          <p className="mb-3 font-semibold text-gray-500 ">{kf.title}:</p>
          <p className="mb-3 text-gray-500 ">{kf.description}</p>
        </div>
      )),
    },
    {
      label: "Description",
      value: "Description",
      desc: product?.description,
    },
    {
      label: "Reviews",
      value: "Reviews",

      desc: product?.reviews.map((review, i) => (
        <li key={i} className="py-3 sm:py-4 list-none">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaUserSecret className="w-10 h-10 rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {review?.userName}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {review?.message}
              </p>
            </div>
          </div>
        </li>
      )),
    },
  ];

  return (
    <div>
      <div className="flex flex-col mx-6 mt-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-2xl p-5 gap-3">
        <Image
          className="w-"
          src={product?.image}
          alt={product?.name}
          priority={true}
          quality={100}
          width="400"
          height="400"
        />
        <div className="flex flex-col justify-between p-4 leading-normal space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product?.name}
          </h1>
          <p className="font-normal text-gray-700 "></p>
          <p className="font-normal text-gray-700 ">Brand: {product?.brand}</p>
          <p className="font-normal text-gray-700 ">
            Category: {product?.category}
          </p>
          <p className="font-normal text-gray-700">Status: {product?.status}</p>
          <p className="font-normal text-gray-700 ">Price: ${product?.price}</p>
          <div className="flex items-center gap-2">
            <p className="font-normal text-gray-700 ">Average Rating:</p>
            <div className="flex items-center space-x-2 mr-2">
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <AiFillStar className="-mt-0.5 h-5 w-5 text-yellow-700" />

                {product?.averageRating}
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-normal text-gray-700 ">Individual Rating:</p>
            <div className="flex items-center space-x-2 mr-2">
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <AiFillStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                {product?.averageRating}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 flex justify-center">
        <Tabs
          value="dashboard"
          className="w-full mx-6 rounded-lg bg-white border border-gray-200  shadow"
        >
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="lg:w-40">
                <div className="flex items-center gap-2 lg:text-xl">
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/products`);
    const data = await res.json();

    const paths = data.map((product) => ({
      params: { productId: product._id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/products/${params.productId}`
    );

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    const data = await res.json();

    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
