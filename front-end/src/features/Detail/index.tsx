import { useParams } from "react-router-dom";
import { cutters, Cutter } from "../../constant/Data";
import Image from "../../assets/images/test.jpg";
import Video from "../../assets/videos/test.mp4";
import { useState } from "react";
import { FaFacebook, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import InformationCutter from "./components/InformationCutter";

function Detail() {
  const { id } = useParams();

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const cutter = cutters.find((k: Cutter) => k.id.toString() === id);

  if (!cutter) {
    return <div>Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 md:flex md:justify-center md:gap-24">
        {/* Hình ảnh dao cắt */}
        <div className="md:flex md:flex-col md:items-start">
          <h3 className="text-xl font-bold text-gray-200 mb-4">
            Hình ảnh dao cắt
          </h3>
          <div className="flex justify-center md:justify-start">
            <img
              src={Image}
              alt={cutter.code}
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
        {/* Thông tin dao */}
        <div className="max-w-full">
          <p className="text-2xl font-bold text-orange-600 md:text-left">
            MÃ DAO: {cutter.code}
          </p>

          {/* Button Báo giá */}
          <div className="md:text-left mb-3">
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2 rounded text-xl md:w-60 md:h-12 md:mb-2 mt-4 mb-4 flex items-center justify-center"
              onClick={togglePopup}
            >
              <FaComments className="mr-2" />
              Nhận báo giá
            </button>
          </div>

          {/* Thông tin chi tiết dao*/}
          <InformationCutter cutter={cutter} />

          {/* Video dao*/}
          <p className="text-xl font-bold text-white bg-blue-800 text-left py-1 mb-2  pl-4">
            VIDEO SẢN PHẨM
          </p>
          <div className="flex justify-center">
            <video
              muted
              autoPlay
              playsInline
              loop
              className="max-w-xs max-h-96 md:max-w-xl"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Popup thông tin liên hệ */}
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
                <FaPhone className="mr-2" color="red" />{" "}
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
      </div>
    </div>
  );
}

export default Detail;
