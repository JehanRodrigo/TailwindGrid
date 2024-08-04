import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <div className="max-w-[900px] min-h-[600px] bg-black p-6 mx-auto my-12  grid md:grid-cols-3 gap-6 ">
        <div className="bg-red-500 md:col-span-2 md:row-span-2 p-3 flex  gap-3 justify-center relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-700 z-0 w-1/2">1.2</div>
          <div className="bg-teal-500 w-1/2">1.2</div>
          <div className="bg-teal-500 w-1/2">1.2</div>
          <div className="bg-teal-500 w-1/2">1.2</div>
        </div>
        <div className="bg-green-500">2</div>
        <div className="bg-yellow-500">3</div>
        <div className="bg-indigo-500">4</div>
        <div className="bg-gray-500 md:col-span-2 md:row-span-2">5</div>
        <div className="bg-blue-500 ">6</div>
      </div>
    </div>
  );
};

export default App;
