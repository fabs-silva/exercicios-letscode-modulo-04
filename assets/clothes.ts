export type ClothingAd = {
  id: number;
  title: string;
  type: string;
  color: string;
  image: string;
  originalValue: number;
  currentValue: number;
  isDiscounted: boolean;
  isInStock: boolean;
};

export const clothes: ClothingAd[] = [
  {
    id: 0,
    title: 'Camiseta Feminina Yankees LeMahieu',
    type: 'tshirt',
    color: 'blue',
    image:
      'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3757000/altimages/ff_3757332-6ac22160ce20387733daalt1_full.jpg&w=900',
    originalValue: 75,
    currentValue: 65,
    isDiscounted: true,
    isInStock: true,
  },
  {
    id: 1,
    title: "Camiseta Maneskin 'Zitti e Buoni'",
    type: 'tshirt',
    color: 'white',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzQz18YZK9dmWSG6HT1LJTlH8TaIcsLq1ddOMaxLl9uvZUau0BIyPt2Uxmkprtkl3X2FembENV8r9Ve64-cIYtzXrcC1Gq&usqp=CAY',
    originalValue: 45,
    currentValue: 45,
    isDiscounted: false,
    isInStock: false,
  },
  {
    id: 2,
    title: 'Camiseta Dr. House',
    type: 'tshirt',
    color: 'white',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQVGYvUzz8m5NL4QBqpEzBr4pe4JXYoJG4znQjza6q5eWEF8qDEA_Pdn3UG0Gqd4QrVkN1kyI0Wq-JGJk1gPc0ByxfPd5Z0PiigW1mptnu&usqp=CAE',
    originalValue: 30,
    currentValue: 30,
    isDiscounted: false,
    isInStock: false,
  },
  {
    id: 3,
    title: 'Camiseta Centralizar em CSS',
    type: 'tshirt',
    color: 'white',
    image:
      'https://cdn.shopify.com/s/files/1/2651/2090/products/mockup-8436f1dd_720x.jpg?v=1606426638',
    originalValue: 40,
    currentValue: 35,
    isDiscounted: true,
    isInStock: true,
  },
  {
    id: 4,
    title: 'Camista Stack Overflow',
    type: 'tshirt',
    color: 'white',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmi8a8ze9F2uZO4ATN_i-j4oq6j2zh36na5ns-kuXFixrdavGHdycdfKmF-VVAMf0EX2TyvFKQUYY4O1wbJ0_nCS_WpbZLX0IVWKyYlQlwyxDNSSE0coCZEQ&usqp=CAE',
    originalValue: 40,
    currentValue: 35,
    isDiscounted: true,
    isInStock: true,
  },
  {
    id: 5,
    title: 'Camiseta Café Não Costuma Faiá',
    type: 'tshirt',
    color: 'white',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6orKryuIe1jY8ngkAMXUFg9REYxQ1t796NIxftDcvlZHDO_ggwaulyOeRCjbDIrbtcrQWe7V43oHWNUaDfR3e2aS4hwLW-h-64ys5gj2L_BrEUynaal-n2w&usqp=CAE',
    originalValue: 50,
    currentValue: 50,
    isDiscounted: false,
    isInStock: false,
  },
  {
    id: 6,
    title: 'Camiseta Khachapuri e Khinkali',
    type: 'tshirt',
    color: 'white',
    image:
      'https://i5.walmartimages.com/asr/d16f3200-8e77-4a01-8755-046f1f7c6601_1.80a4ae85e523a44598ec0820af7db11d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    originalValue: 35,
    currentValue: 35,
    isDiscounted: false,
    isInStock: true,
  },
  {
    id: 7,
    title: 'Camista Spread Ajvar Not Hate',
    type: 'tshirt',
    color: 'orange',
    image:
      'https://m.media-amazon.com/images/I/B1F7+hokpLS._CLa%7C2140%2C2000%7C51Vh7xVjihL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png',
    originalValue: 35,
    currentValue: 35,
    isDiscounted: false,
    isInStock: true,
  },
  {
    id: 8,
    title: 'Camiseta Adenia Chloe',
    type: 'tshirt',
    color: 'white',
    image:
      'https://cdn.awsli.com.br/1000x1000/236/236627/produto/133763450/desca-triste-entao-camiseta-basicona-unissex-92583930.jpg',
    originalValue: 60,
    currentValue: 50,
    isDiscounted: true,
    isInStock: false,
  },
  {
    id: 9,
    title: 'Camiseta Css-in-JS',
    type: 'tshirt',
    color: 'white',
    image:
      'https://cdn.shopify.com/s/files/1/2651/2090/products/mockup-39c0178b_1200x1200.jpg?v=1606426778',
    originalValue: 35,
    currentValue: 35,
    isDiscounted: false,
    isInStock: true,
  },
];
