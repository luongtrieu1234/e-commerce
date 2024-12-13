import { Link } from "react-router-dom";
import { Cutter } from "../../../constant/Data";
import Image from "../../../assets/images/test.jpg";

type CutterProps = {
  cutter: Cutter;
};

function CutterCard({ cutter }: CutterProps) {
  return (
    <li
      key={cutter.id}
      className="border-2 p-6 md:max-h-96 bg-gray-800 shadow-lg hover:shadow-xl hover:border-blue-600 transition-shadow duration-300 border-gray-300"
    >
      <Link to={`/detail/${cutter.id}`} className="block hover:no-underline">
        <p className="text-lg text-blue-700 mb-1 text-left font-bold">
          Lưỡi Dao
        </p>
        <div className="overflow-hidden rounded-lg max-w-[280px] max-h-[220px]">
          <img
            src={Image}
            alt="cutter"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <p className="text-base text-gray-300 mb-1 mt-3">
          Mã dao: {cutter.code}
        </p>
        <button className="mt-4 px-4 py-2 bg-gradient-to-r bg-blue-200 hover:bg-blue-600 rounded shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-500">
          Xem chi tiết
        </button>
      </Link>
    </li>
  );
}

export default CutterCard;
