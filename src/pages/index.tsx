import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <h1 className="mx-5 text-blue-800">
      Next tailiwindcss starter <Link href={"/about"}>about</Link>
    </h1>
  );
};

export default Home;
