import { products } from "../../constant/Data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-4 rounded-lg bg-white shadow hover:bg-gray-200"
          >
            <Link to="/detail" className="block">
              <div className="text-2xl text-gray-800">{product.name}</div>
              <p className="text-lg text-gray-600">{product.description}</p>
              <p className="text-lg text-gray-600">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
