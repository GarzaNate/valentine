"use client";

const SaveTheDatePage = () => {
  const dateDetails = [
    { time: "4:30 PM", activity: "Dinner 🍽️" },
    { time: "6:00 PM", activity: "Top Golf 🏌️" },
    { time: "9:00 PM", activity: "Pottery Painting 🎨" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-[#f0a6ca] font-inter">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-2xl p-12 text-center">
          <h1 className="text-5xl font-bold font-playfair mb-2 text-[#7a1f3d]">
            Save the Date
          </h1>
          <p className="text-2xl font-playfair mb-8 text-gray-600">
            Valentine's Day 💘
          </p>

          <div className="mb-8 pb-8 border-b-2 border-pink-200">
            <p className="text-lg text-gray-700 font-semibold">
              Friday, February 13, 2026
            </p>
          </div>

          <div className="space-y-6 text-left">
            {dateDetails.map((detail, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg">
                <p className="text-sm font-bold text-[#7a1f3d] mb-1">
                  {detail.time}
                </p>
                <p className="text-2xl font-bold mb-2">{detail.activity}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-pink-200">
            <p className="text-xl font-playfair text-gray-800 italic">
              Can't wait my love ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDatePage;
