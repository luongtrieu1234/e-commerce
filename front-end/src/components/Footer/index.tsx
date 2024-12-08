import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-start md:gap-36">
        <div className="mb-4 md:mb-0 text-left max-w-xl">
          <h1 className="text-xl font-bold text-blue-400 mb-4">
            Thông Tin Công Ty
          </h1>
          <h1 className="text-lg font-bold mb-2 text-orange-500">
            CÔNG TY TNHH CHÍNH THỰC
          </h1>
          <p className="mb-2 flex items-start flex-wrap text-sm">
            <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" color="red" />
            <strong className="whitespace-nowrap flex-shrink-0">Map:</strong>
            <span className="flex-grow">
              &nbsp;Ô7 Lô Oxh, Đường D2, Khu nhà ở An Phú 1, Khu phố 1B, Phường
              An Phú, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam
            </span>
          </p>
        </div>
        <div className="mb-4 md:mb-0 text-left">
          <h1 className="text-xl font-bold text-blue-400 mb-4">
            Kết Nối Với Chúng Tôi
          </h1>
          <p className="mb-2 flex items-center text-sm">
            <FaComments className="mr-2" color="green" /> <strong>Zalo:</strong>
            &nbsp;0916412896
          </p>
          <p className="mb-2 flex items-center text-sm">
            <FaPhone className="mr-2" color="red" />{" "}
            <strong>Điện Thoại:</strong>
            &nbsp;0916412896
          </p>
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
        </div>
      </div>
      <div className="bg-blue-700 text-center text-xs py-4 mt-4">
        <p>© Bản quyền thuộc về Công ty TNHH Chính Thực</p>
      </div>
    </footer>
  );
}

export default Footer;
