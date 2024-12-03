export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [];

for (let i = 1; i <= 15; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    description: `Description for product ${i}`,
    price: 99.99,
    imageUrl: `https://example.com/product${i}.jpg`,
    category: `Category ${i}`,
  });
}
