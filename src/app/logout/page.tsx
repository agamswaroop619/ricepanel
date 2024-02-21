export default function Home() {
  return (
    <main className="bg-blue-800 flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-lg font-semibold text-black">
            Facebook Page Integration
          </h1>
          <p className="text-gray-700 mt-2">
            Integrated Page:{" "}
            <span className="font-semibold">Amazon Business</span>
          </p>
          <div className="mt-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition ease-in duration-150 mb-2 w-full">
              Delete Integration
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-150 w-full">
              Reply To Messages
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
