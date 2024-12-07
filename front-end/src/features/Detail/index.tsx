import { useParams } from "react-router-dom";
import { cutters, Cutter } from "../../constant/Data";
import Image from "../../assets/images/test.jpg";
import { useState } from "react";
import { FaFacebook, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";

function Detail() {
  const { id } = useParams();

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const cutter = cutters.find((k: Cutter) => k.id.toString() === id); // Tìm dao theo ID

  if (!cutter) {
    return <div>Không tìm thấy sản phẩm.</div>; // Nếu không tìm thấy dao
  }

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Hình ảnh dao cắt</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Hình ảnh dao cắt */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt={cutter.code}
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        <p className="text-2xl font-bold text-orange-500">
          MÃ DAO: {cutter.code}
        </p>

        <button
          className="bg-green-500 text-white font-bold px-4 py-2 rounded text-xl"
          onClick={togglePopup}
        >
          Báo giá
        </button>
        {showPopup && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-orange-500">
                Thông Tin Liên Hệ
              </h2>

              {/* zalo */}
              <p className="mb-2 flex items-center text-sm">
                <FaComments className="mr-2" color="green" />{" "}
                <strong>Zalo:</strong>
                &nbsp;0916412896
              </p>

              {/* Điện thoại */}
              <p className="mb-2 flex items-center text-sm">
                <FaPhone className="mr-2" color="blue" />{" "}
                <strong>Điện Thoại:</strong>
                &nbsp;0916412896
              </p>

              {/* Email */}
              <p className="mb-2 flex items-center text-sm">
                <FaEnvelope className="mr-2" color="yellow" />{" "}
                <strong>Mail:</strong>&nbsp;
                <a
                  href="mailto:maycatchinhthuc@gmail.com"
                  className="text-blue-400 ml-1"
                >
                  maycatchinhthuc@gmail.com
                </a>
              </p>

              {/* Facebook */}
              <p className="mb-2 flex items-center text-sm">
                <FaFacebook className="mr-2" color="blue" />{" "}
                <strong>Facebook:</strong>&nbsp;
                <a
                  href="https://www.facebook.com/profile.php?id=61558399526686"
                  className="text-blue-400 ml-1 truncate"
                  style={{
                    maxWidth: "200px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  https://www.facebook.com/profile.php?id=61558399526686
                </a>
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={togglePopup}
              >
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* Chi tiết dao*/}
        <div className="text-left">
          <p className="text-xl font-bold text-gray-800 mb-2">
            THÔNG TIN CHI TIẾT
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Chất liệu: {cutter.material}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Góc (°): {cutter.angle}°
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Dài (mm): {cutter.length}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Rộng (mm): {cutter.width}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Độ dày (mm): {cutter.thickness}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Chiều dài lưỡi dao (mm): {cutter.bladeLength}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            - Chiều dài đường kính lỗ (mm): {cutter.holeDiameter}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
