export interface Knife {
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
}

export const knifes: Knife[] = [];

for (let i = 1; i <= 5; i++) {
  knifes.push({
    id: i,
    code: "KZA01",
    material: "Thép Vonfram",
    angle: 15,
    length: 30,
    width: 6.3,
    thickness: 0.63,
    bladeLength: 23,
    holeDiameter: 0, // Assuming no value provided
    imageUrl: "@assets/images/exp.jpg",
  });
}
