function TechnicalDataTable() {
  return (
    <>
      <p className="text-xl font-bold text-white bg-blue-800 text-left mt-4 py-1 mb-2 pl-4 lg:mx-20 xl:mx-52">
        BẢNG THÔNG SỐ KỸ THUẬT
      </p>
      <div className="overflow-x-auto mt-4 lg:mx-20 xl:mx-52">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th colSpan={2} className="py-2 px-4 bg-gray-200 text-center">
                Thông số kỹ thuật
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 w-[30%]">Mã máy</td>
              <td className="border text-left px-4 py-2 w-[70%]">
                AKZ101713, AKZ102616, AKZ101310
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kích thước làm việc</td>
              <td className="border px-4 py-2 text-left">
                1700 x 1300mm, 2500 x 1600mm, 1300 x 1000mm
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cấu hình</td>
              <td className="border px-4 py-2 text-left">
                Lưỡi dao rung, bút vẽ, bánh xe tạo ngấn, dao kéo
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Chức năng</td>
              <td className="border px-4 py-2 text-left">
                Đây là thiết bị mẫu phù hợp cho các nhà máy sản xuất bao bì
                carton, bao bì giấy dùng để cắt mẫu trước khi ra sản phẩm hàng
                loạt, máy này có thể cắt và cấn độ dày lên tới 15mm, sóng carton
                5 lớp, 7 lớp.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Vật liệu cắt</td>
              <td className="border px-4 py-2 text-left">
                {" "}
                Giấy carton 3-7 lớp, giấy tổ ong, bìa cứng, xốp, bảng KT, tấm
                PVC, v.v
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Phương pháp cố định vật liệu</td>
              <td className="border px-4 py-2 text-left">Hút chân không</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Bánh tỳ kèm theo máy</td>
              <td className="border px-4 py-2 text-left">
                {" "}
                Con lăn áp lực 7mm: thích hợp cho giấy carotns sóng trong phạm
                vi (7-15) mm. Con lăn áp lực 5mm: thích hợp cho giấy carotns
                sóng trong phạm vi (5-7) mm. Con lăn áp lực 3 mm: thích hợp cho
                giấy carotns sóng trong phạm vi (3-5) mm. Con lăn áp lực 0,8mm:
                thích hợp cho giấy card, giấy kraft, cartons lạnh, tấm nhựa PVC,
                vv…. trong phạm vi 2 mm.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tốc độ tối đa</td>
              <td className="border px-4 py-2 text-left">1400mm/s</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Đường kính cắt nhỏ nhất</td>
              <td className="border px-4 py-2 text-left">6mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Độ dày cắt tối đa</td>
              <td className="border px-4 py-2 text-left">30mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Độ chính xác</td>
              <td className="border px-4 py-2 text-left">&le;0.1mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Công suất hút chân không</td>
              <td className="border px-4 py-2 text-left">5.5kw</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Điện áp</td>
              <td className="border px-4 py-2 text-left">(220V+10%)50Hz</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mẫu file</td>
              <td className="border px-4 py-2 text-left">HPGL</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tùy chọn</td>
              <td className="border px-4 py-2 text-left">
                Hệ thống định dạng Camera, dao cắt V, dao cắt xốp
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kích thước chiếm dụng</td>
              <td className="border px-4 py-2 text-left">
                2500 x 2160 x 1180mm, 3300 x 2460 x 1180mm, 3300 x 2460 x 1180mm
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="py-2 px-4 bg-gray-200 text-red-600 text-center"
              >
                Lưu ý: có thể đặt hàng theo kích thước tùy chọn
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TechnicalDataTable;
