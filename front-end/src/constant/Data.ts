export interface Cutter {
  id: number;
  code: string;
  material: string;
  angle: number;
  length: number;
  width: number;
  thickness: number;
  bladeLength: number;
  holeDiameter: number;
  imageUrl: string;
  videoUrl?: string;
}

export interface CuttingMchine {
  id: number;
  name: string;
  code: string;
  material: string;
  angle: number;
  length: number;
  width: number;
  thickness: number;
  bladeLength: number;
  holeDiameter: number;
  imageUrl: string;
  videoUrl?: string;
}

export const cutters: Cutter[] = [];
export const cuttingMchines: CuttingMchine[] = [];

for (let i = 1; i <= 10; i++) {
  cutters.push({
    id: i,
    code: "KZA01",
    material: "Thép Vonfram",
    angle: 15,
    length: 30,
    width: 6.3,
    thickness: 0.63,
    bladeLength: 23,
    holeDiameter: 0, // Assuming no value provided
    imageUrl: "@/assets/images/test.jpg",
    videoUrl: "../../../assets/video/test.mp4",
  });
}

for (let i = 1; i <= 1; i++) {
  cuttingMchines.push({
    id: i + 1,
    name: "Máy cắt mẫu carton bao bì",
    code: "KZA01",
    material: "Thép Vonfram",
    angle: 15,
    length: 30,
    width: 6.3,
    thickness: 0.63,
    bladeLength: 23,
    holeDiameter: 0, // Assuming no value provided
    imageUrl: "@/assets/images/test.jpg",
    videoUrl: "../../../assets/video/test.mp4",
  });
}
