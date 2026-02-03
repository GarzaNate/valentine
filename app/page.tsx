"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0a6ca] font-playfair">
      <button
        onClick={() => router.push("/question")}
        className="px-8 py-4 h-40 w-160 text-2xl font-bold bg-[#7a1f3d]  hover:bg-[#8b2a4f] text-white rounded-lg transition-colors"
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;
