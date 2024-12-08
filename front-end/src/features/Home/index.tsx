import { cutters } from "../../constant/Data";
import { useState } from "react";
import CutterCard from "./components/CutterCard";

function Home() {
  // State active tab
  const [activeTab, setActiveTab] = useState("Tất cả");

  // List categories
  const categories = ["Tất cả", "Lưỡi dao", "Máy cắt"];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:mx-40">
      {/* Sidebar */}
      <nav className="border md:w-3/12 w-full md:h-screen bg-gray-100 shadow-md p-2 border-gray-300">
        <h1 className="text-xl font-bold text-blue-600 mb-2 text-left">
          Danh mục sản phẩm
        </h1>
        <ul className="flex md:flex-col justify-between items-center md:space-y-4">
          {categories.map((category) => (
            <li key={category} className="flex-1 text-center md:text-left">
              <button
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                  activeTab === category
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:text-blue-500 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Product List */}
      <ul className="md:w-10/12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cutters.map((cutter) => (
          <CutterCard key={cutter.id} cutter={cutter} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
