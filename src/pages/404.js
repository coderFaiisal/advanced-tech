import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-4xl text-red-500">404 Error... Not Found!!!</h1>
    </div>
  );
};

export default NotFoundPage;
