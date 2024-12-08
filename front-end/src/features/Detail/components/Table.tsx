function Table() {
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
              <td className="border px-4 py-2 w-[30%]">Dữ liệu 1</td>
              <td className="border px-4 py-2 w-[70%]">Giá trị 1</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 2</td>
              <td className="border px-4 py-2">Giá trị 2</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 3</td>
              <td className="border px-4 py-2">Giá trị 3</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 4</td>
              <td className="border px-4 py-2">Giá trị 4</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 5</td>
              <td className="border px-4 py-2">Giá trị 5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 6</td>
              <td className="border px-4 py-2">Giá trị 6</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 7</td>
              <td className="border px-4 py-2">Giá trị 7</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 8</td>
              <td className="border px-4 py-2">Giá trị 8</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 9</td>
              <td className="border px-4 py-2">Giá trị 9</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 10</td>
              <td className="border px-4 py-2">Giá trị 10</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 11</td>
              <td className="border px-4 py-2">Giá trị 11</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 12</td>
              <td className="border px-4 py-2">Giá trị 12</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 13</td>
              <td className="border px-4 py-2">Giá trị 13</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 14</td>
              <td className="border px-4 py-2">Giá trị 14</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 15</td>
              <td className="border px-4 py-2">Giá trị 15</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dữ liệu 16</td>
              <td className="border px-4 py-2">Giá trị 16</td>
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

export default Table;
