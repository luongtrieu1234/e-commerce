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
      className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/detail/${cutter.id}`} className="block hover:no-underline">
        <p className="text-lg text-gray-600 mb-1">Id: {cutter.id}</p>
        <div className="overflow-hidden rounded-lg">
          <img
            src={Image}
            alt="cutter"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <p className="text-lg text-gray-600 mb-1">Mã dao: {cutter.code}</p>
        <p className="text-lg text-gray-600 mb-1">
          Chất liệu: {cutter.material}
        </p>
        <button className="mt-4 px-4 py-2 bg-gradient-to-r bg-green-500 hover:bg-green-700 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300">
          Xem chi tiết
        </button>
      </Link>
    </li>
  );
}

export default CutterCard;
