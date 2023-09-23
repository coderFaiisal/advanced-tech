import Image from "next/image";
import coverImage from "../../../public/coverImage.jpg";

const Banner = () => {
  return (
    <div>
      <Image
        src={coverImage}
        alt="background-image"
        layout="responsive"
        priority={true}
      />
    </div>
  );
};

export default Banner;
