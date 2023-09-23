import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import logo from "../../public/logo.png";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { BsArrowCounterclockwise } from "react-icons/bs";

const SignIn = () => {
  return (
    <>
      <div className=" px-6 py-12 lg:px-8 border ">
        <div className="lg:border max-w-[600px] py-12 mx-auto lg:rounded-md lg:shadow-md">
          <div className="sm:mx-auto  sm:w-full sm:max-w-sm flex flex-col justify-start items-center ">
            <Link href="/">
              <div className={""}>
                <Image src={logo} alt="Logo" height={30} width={150} />
              </div>
            </Link>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Button
              onClick={() => signIn("google")}
              color="blue"
              className="flex w-full justify-center items-center my-2 "
            >
              <BsGoogle className="mr-2" />
              Sign in with Google
            </Button>

            <Button
              onClick={() => signIn("github")}
              color="black"
              className="flex w-full justify-center items-center"
            >
              <BsGithub className="mr-2" />
              Sign in with Github
            </Button>

            <div className="mt-10 flex justify-center items-center text-sm">
              <Link
                href="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                <p>Back To Home</p>
              </Link>
              <BsArrowCounterclockwise className="w-8 text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
