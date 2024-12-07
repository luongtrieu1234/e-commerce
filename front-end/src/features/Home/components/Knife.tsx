import { Link } from "react-router-dom";
import { Knife } from "../../../constant/Data";
import Image from "../../../assets/images/exp.jpg";

type KnifeProps = {
  knife: Knife;
};

function KnifeCard({ knife }: KnifeProps) {
  return (
    <li
      key={knife.id}
      className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/detail/${knife.id}`} className="block hover:no-underline">
        <p className="text-lg text-gray-600 mb-1">Id: {knife.id}</p>
        <div className="overflow-hidden rounded-lg">
          <img
            src={Image}
            alt="knife"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <p className="text-lg text-gray-600 mb-1">Mã dao: {knife.code}</p>
        <p className="text-lg text-gray-600 mb-1">
          Chất liệu: {knife.material}
        </p>
        <button className="mt-4 px-4 py-2 bg-gradient-to-r bg-green-500 hover:bg-green-700 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300">
          Xem chi tiết
        </button>
      </Link>
    </li>
  );
}

export default KnifeCard;
