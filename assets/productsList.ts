import barambo from './images/barambo.png';
import ewedel from './images/ewedel.png';
import lindt from './images/lindt.png';
import nestle from './images/nestle.png';
import plazma from './images/plazma.png';
import ritter from './images/ritter.png';
import svoge from './images/svoge.png';
import venchi from './images/venchi.png';

export type Product = {
  id: number;
  name: string;
  country: string;
  image: string;
  price: number;
};

export const productsList: Product[] = [
  {
    id: 0,
    name: 'Lindt Manga e Maracujá',
    country: '🇨🇭',
    image: lindt,
    price: 52,
  },
  {
    id: 1,
    name: 'E.Wedel Framboesa',
    country: '🇵🇱',
    image: ewedel,
    price: 10,
  },
  {
    id: 2,
    name: 'Svoge Avelã e Passas',
    country: '🇧🇬',
    image: svoge,
    price: 13,
  },
  {
    id: 3,
    name: 'Plazma Kocka Avelã',
    country: '🇷🇸',
    image: plazma,
    price: 18,
  },
  {
    id: 4,
    name: 'Ritter Cornflakes',
    country: '🇩🇪',
    image: ritter,
    price: 15,
  },
  {
    id: 5,
    name: 'Nestlé Extrafino Doce de Leite',
    country: '🇪🇸',
    image: nestle,
    price: 22,
  },
  {
    id: 6,
    name: 'Venchi Bombons Sortidos',
    country: '🇮🇹',
    image: venchi,
    price: 75,
  },
  {
    id: 7,
    name: 'Barambo Cappuccino',
    country: '🇬🇪',
    image: barambo,
    price: 12,
  },
];
