import { Cutter } from "../../../constant/Data";

type CutterProps = {
  cutter: Cutter;
};

function InformationCutter({ cutter }: CutterProps) {
  return (
    <div className="text-left">
      <p className="text-xl font-bold text-gray-800 mb-2">THÔNG TIN CHI TIẾT</p>
      <p className="text-lg text-gray-600 mb-2">
        - Chất liệu: {cutter.material}
      </p>
      <p className="text-lg text-gray-600 mb-2">- Góc (°): {cutter.angle}°</p>
      <p className="text-lg text-gray-600 mb-2">- Dài (mm): {cutter.length}</p>
      <p className="text-lg text-gray-600 mb-2">- Rộng (mm): {cutter.width}</p>
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
  );
}

export default InformationCutter;
