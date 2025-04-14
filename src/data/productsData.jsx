import img1 from '../assets/obr.png';
import img2 from '../assets/ttt.png';
import img3 from '../assets/kkk.png';
import img4 from '../assets/yupka.png';
import img5 from '../assets/fiffa.png';
import img6 from '../assets/obr.png'; // можно дублировать

import obr_1 from '../obraz/first.png';
import obr_2 from '../obraz/first2.png';
import obr_3 from '../obraz/first3.png';

// Хиджабы
import hid_pub_1 from '../hidjabs/hid_pub_1.png';
import hid_pub_2 from '../hidjabs/hid_pub_2.png';
import hid_pub_3 from '../hidjabs/hid_pub_3.png';
import hid_pub_4 from '../hidjabs/hid_pub_4.png';
import hid_pub_5 from '../hidjabs/hid_pub_5.png';
import hid_pub_6 from '../hidjabs/hid_pub_6.png';
import hid_pub_7 from '../hidjabs/hid_pub_7.png';
import hid_pub_8 from '../hidjabs/hid_pub_8.png';
import hid_pub_9 from '../hidjabs/hid_pub_9.png';

import hidjab_pub_2_1 from '../hidjabs/hidjab_pub_2.1.png';
import hidjab_pub_2_2 from '../hidjabs/hidjab_pub_2.2.png';
import hidjab_pub_2_3 from '../hidjabs/hidjab_pub_2.3.png';
import hidjab_pub_2_4 from '../hidjabs/hidjab_pub_2.4.png';
import hidjab_pub_2_5 from '../hidjabs/hidjab_pub_2.5.png';

import hidjab_pub_3_1 from '../hidjabs/hidjab_pub_3.1.jpg';
import hidjab_pub_3_2 from '../hidjabs/hidjab_pub_3.2.jpg';
import hidjab_pub_3_3 from '../hidjabs/hidjab_pub_3.3.jpg';
import hidjab_pub_3_4 from '../hidjabs/hidjab_pub_3.4.jpg';
import hidjab_pub_3_5 from '../hidjabs/hidjab_pub_3.5.jpg';
import hidjab_pub_3_6 from '../hidjabs/hidjab_pub_3.6.jpg';

import hidjab_4_1 from '../hidjabs/hidjab_4_1.jpg';
import hidjab_4_2 from '../hidjabs/hidjab_4_2.jpg';
import hidjab_4_3 from '../hidjabs/hidjab_4_3.jpg';

import hidjab_5_1 from '../hidjabs/hidjab_5_1.jpg';
import hidjab_5_2 from '../hidjabs/hidjab_5_2.jpg';
import hidjab_5_3 from '../hidjabs/hidjab_5_3.jpg';

import hidjab_6_1 from '../hidjabs/hidjab_6_1.jpg';
import hidjab_6_2 from '../hidjabs/hidjab_6_2.jpg';
import hidjab_6_3 from '../hidjabs/hidjab_6_3.jpg';
import hidjab_6_4 from '../hidjabs/hidjab_6_4.jpg';

import hidjab_7_1 from '../hidjabs/hidjab_7_1.jpg';
import hidjab_7_2 from '../hidjabs/hidjab_7_2.jpg';

import hidjab_8_1 from '../hidjabs/hidjab_8_1.jpg';

import hidjab_9_1 from '../hidjabs/hidjab_9_1.jpg';
import hidjab_9_2 from '../hidjabs/hidjab_9_2.jpg';
import hidjab_9_3 from '../hidjabs/hidjab_9_3.jpg';

import hidjab_10_1 from '../hidjabs/hidjab_10_1.jpg';
import hidjab_10_2 from '../hidjabs/hidjab_10_2.jpg';
import hidjab_10_3 from '../hidjabs/hidjab_10_3.jpg';
import hidjab_10_4 from '../hidjabs/hidjab_10_4.jpg';

import hidjab_11_1 from '../hidjabs/hidjab_11_1.jpg';
import hidjab_11_2 from '../hidjabs/hidjab_11_2.jpg';

import hidjab_12_1 from '../hidjabs/hidjab_12_1.jpg';

const productsData = [
  {
    id: 1,
    title: 'Пиджак с юпкой',
    images: [obr_1, obr_2, obr_3],
    description: 'Пиджак с короткими рукавами Размер S M Шикарная посадка 2600 сом Юбка атласная 🥰Размер S M L 1500 сом',
    price: 2600,
    category: 'Образы',
  },
  {
    id: 3,
    title: 'Юбка Макси',
    images: [img4, img1],
    description: 'Макси-юбка из легкой ткани. Стильная и удобная.',
    price: 4000,
    category: 'Брюки и юбки',
  },
  {
    id: 4,
    title: 'Футболка Oversize',
    images: [img3, img5],
    description: 'Футболка свободного кроя. Отлично сочетается с джинсами или юбками.',
    price: 2500,
    category: 'Рубашки и футболки',
  },
  {
    id: 5,
    title: 'Пальто Классика',
    images: [img5, img2],
    description: 'Классическое пальто для холодных дней. Элегантный дизайн и теплый материал.',
    price: 8000,
    category: 'Пальто и куртки',
  },
  {
    id: 6,
    title: 'Костюм-двойка',
    images: [img6, img1],
    description: 'Универсальный костюм для деловых встреч и повседневной носки.',
    price: 9000,
    category: 'Костюмы и комбинизоны',
  },
  // Хиджабы
  {
    id: 20,
    title: 'Королевская химар 🕊',
    images: [
      hid_pub_1,
      hid_pub_2,
      hid_pub_3,
      hid_pub_4,
      hid_pub_5,
      hid_pub_6,
      hid_pub_7,
      hid_pub_8,
      hid_pub_9,
    ],
    description: 'Элегантный и утончённый химар, подчёркивающий благородство и скромность. Лёгкая ткань, роскошный вид.',
    price: 1900,
    category: 'Хиджабы',
  },
  {
    id: 21,
    title: 'Платье "Летний бриз" 🕊',
    images: [
      hidjab_pub_3_1,
      hidjab_pub_3_2,
      hidjab_pub_3_3,
      hidjab_pub_3_4,
      hidjab_pub_3_5,
      hidjab_pub_3_6,
    ],
    description: 'Легкое и воздушное платье с "летучими" рукавами. Идеальный выбор для жаркой погоды, подчеркивающее женственность и стиль. 🌸',
    price: 2300,
    category: 'Хиджабы',
  },
  {
  id: 22,
  title: 'Платья летучка 🕊',
  images: [
    hidjab_pub_2_1,
    hidjab_pub_2_2,
    hidjab_pub_2_3,
    hidjab_pub_2_4,
    hidjab_pub_2_5,
  ],
  description: 'Платья свободного кроя с "летучими" рукавами. Воздушные, легкие и женственные. Идеальный вариант для тёплой погоды. ☁️',
  price: 2100,
  category: 'Хиджабы',
},{
  id: 23,
  title: 'Двойка с накидкой',
  images: [hidjab_4_1, hidjab_4_2, hidjab_4_3],
  description: 'Элегантная двойка с лёгкой накидкой. Подходит для особых случаев и повседневной носки. Лёгкий и дышащий материал.',
  price: 2050,
  category: 'Хиджабы',
},
{
  id: 24,
  title: 'Тыкань Калифорния',
  images: [hidjab_5_1, hidjab_5_2, hidjab_5_3],
  description: 'Тыкань "Калифорния" — утончённый стиль в каждой детали. Приятная к телу ткань, изысканный фасон и воздушная лёгкость. Подчёркивает индивидуальность и скромность.',
  price: 2850,
  category: 'Хиджабы',
},
{
  id: 25,
  title: 'Льняной хиджаб',
  images: [hidjab_6_1, hidjab_6_2, hidjab_6_3, hidjab_6_4],
  description: 'Хиджаб из натурального льна — лёгкий, дышащий и невероятно комфортный в носке. Идеален для повседневного образа в тёплую погоду.',
  price: 2100,
  category: 'Хиджабы',
},
{
  id: 26,
  title: 'Абайка + сарафан (лён)',
  images: [hidjab_7_1, hidjab_7_2],
  description: 'Комплект из абайки и сарафана, выполненный из натурального льна. Дышащий материал и свободный крой обеспечивают комфорт и элегантность. Идеально для тёплого сезона.',
  price: 2300,
  category: 'Хиджабы',
},
{
  id: 27,
  title: 'Двойка с юбкой (ткань париж)',
  images: [hidjab_8_1],
  description: 'Элегантная двойка с юбкой из костюмной ткани "париж". Лёгкая, удобная и универсальная модель для повседневной носки и особых случаев.',
  price: 2500,
  category: 'Хиджабы',
},
{
  id: 28,
  title: 'Намазник с балаклавой',
  images: [hidjab_9_1, hidjab_9_2, hidjab_9_3],
  description: 'Намазник из бамбуковой ткани с пришитой балаклавой — мягкий, дышащий и удобный. Идеально подходит для молитвы и повседневного ношения.',
  price: 1650,
  category: 'Хиджабы',
},
{
  id: 29,
  title: 'Двойка Супрем',
  images: [hidjab_10_1, hidjab_10_2, hidjab_10_3, hidjab_10_4], // Здесь добавлены изображения, которые ты указал
  description: 'Стильная и удобная двойка из ткани супрем. Идеальный выбор для повседневного использования, комфортная и стильная на каждый день.',
  price: 2300,
  category: 'Хиджабы',
},
{
  id: 30,
  title: 'Двойка юбочная (двунитка)',
  images: [hidjab_11_1, hidjab_11_2], // заменишь на реальные изображения
  description: 'Двойка юбочная из ткани двунитка. Мягкий материал, универсальный фасон, подходит для повседневной носки и особых случаев. Доступна в разных цветах.',
  price: 2700,
  category: 'Хиджабы',
},
{
  id: 31,
  title: 'Хиджаб с изюминкой 🌿',
  images: [hidjab_12_1],
  description: 'Хиджаб из ткани варёнка джинс — стильный, комфортный и практичный вариант для повседневного ношения. Отлично держит форму и подчёркивает образ.',
  price: 2400,
  category: 'Хиджабы',
},

];

export default productsData;

