import { cutters } from "../../constant/Data";
import { useState } from "react";
import CutterCard from "./components/CutterCard";

function Home() {
  // State active tab
  const [activeTab, setActiveTab] = useState("Tất cả");

  // List categories
  const categories = ["Tất cả", "Lưỡi dao", "Máy cắt"];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Sidebar */}
      <nav className="md:w-2/12 w-full md:h-screen bg-gray-100 shadow-md p-2">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">
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
          <li
            key={cutter.id}
            className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CutterCard cutter={cutter} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
