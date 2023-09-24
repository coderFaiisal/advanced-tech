import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <Link href={`/categories/${category?.name}`}>
        <div className="max-w-sm bg-white rounded-lg shadow-md shadow-gray-500 hover:shadow-gray-500 hover:shadow-lg transition-all p-4">
          <Image
            className="rounded-t-lg w- mx-auto p-"
            src={category?.image}
            alt={category?.name}
            priority={true}
            quality={100}
            width="75"
            height="75"
          />

          <h5 className="mt-3 text-center text-xl font-bold text-gray-900 line-clamp-1">
            {category?.name}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
