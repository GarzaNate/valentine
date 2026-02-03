"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import heartGif from "../../public/valentineHeart.gif";
import sadSanji from "../../public/sadSanji.gif";

const QuestionPage = () => {
  const router = useRouter();
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleYesCheck = () => {
    setYes(true);
    setNo(false);
    setShowMessage(false);
  };

  const handleNoCheck = () => {
    setNo(true);
    setYes(false);
    setShowMessage(false);
  };

  const handleContinue = () => {
    if (yes) {
      router.push("/itinerary");
    } else if (no) {
      setShowMessage(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 gap-8 relative bg-[#f0a6ca] font-playfair">
      <h1 className="text-6xl font-extrabold animate-bounce">Ejah Maria</h1>

      <div className="w-full max-w-3xl h-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={heartGif.src}
          alt="Imported GIF"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl">Will you be my Valentine?</p>
        <div className="flex items-center gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={yes}
              onChange={handleYesCheck}
              className="w-6 h-6"
            />
            <span className="text-xl">Yes</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={no}
              onChange={handleNoCheck}
              className="w-6 h-6"
            />
            <span className="text-xl">No</span>
          </label>
        </div>

        {(yes || no) && (
          <button
            onClick={handleContinue}
            className="mt-6 px-8 py-3 bg-[#7a1f3d] hover:bg-[#8b2a4f] text-white text-xl font-bold rounded-lg transition-colors"
          >
            Continue
          </button>
        )}
      </div>

      {showMessage && (
        <div className="fixed inset-0 flex flex-col p-10 items-center justify-center bg-[#f0a6ca] bg-opacity-50 z-50 gap-8">
          <div className="w-full max-w-3xl h-80 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={sadSanji.src}
              alt="Imported GIF"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-bold mb-4">Too bad. Try again.</p>
            <button
              onClick={() => setShowMessage(false)}
              className="px-6 py-2 bg-[#7a1f3d] hover:bg-[#8b2a4f] text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
