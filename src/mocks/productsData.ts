import type { Product } from '../types/Product';
import violaoYamaha from '../assets/yamaha-acoustic-guitar-fg150.jpg';
import guitarraFender from '../assets/fender-strato-guitar-eletric.jpg';
import bateriaPearl from '../assets/pearl-acoustic-drum-export.jpg';
import tecladoCasio from '../assets/casio-digital-key-ct-s200.webp';
import baixoFender from '../assets/fender-jazz-bass.jpg';
import flautaYamaha from '../assets/yamaha-flute-YFL222.jpg';
import saxYamaha from '../assets/yamaha-sax-alto-yas280.jpeg';
import violinoDominante from '../assets/dominant-violin-dp01.jpeg';
import acordeonScandalli from '../assets/scandalli-acordeon.webp';
import ukuleleKalani from '../assets/kalani-ukulele-soprano.webp';
import pianoYamaha from '../assets/yamaha-digital-piano-p125.webp';
import cajonPearl from '../assets/pearl-cajon.jpeg';

const productsData: Product[] = [
  {
    id: "1",
    name: "Violão Yamaha F310",
    image: violaoYamaha,
    price: 1899.99,
    description: "Violão folk acústico Yamaha F310 com cordas de aço, corpo em nato/meranti, braço em nato e escala em jacarandá. Ideal para iniciantes e intermediários.",
  },
  {
    id: "2",
    name: "Guitarra Fender Stratocaster",
    image: guitarraFender,
    price: 6399.90,
    description: "Guitarra Fender Stratocaster Player Series com corpo em alder, braço em maple moderno, escala em pau-ferro e 22 trastes. Inclui 3 captadores single-coil Alnico 5.",
  },
  {
    id: "3",
    name: "Bateria Pearl Export",
    image: bateriaPearl, 
    price: 5499.90,
    description: "Bateria Pearl Export EXX 5 peças com bumbo 22'', caixa 14'', tons 10'' e 12'' e surdo 16''. Hardware resistente e acabamento durável em Black Pearl.",
  },
  {
    id: "4",
    name: "Teclado Casio CT-S200",
    image: tecladoCasio,
    price: 899.90,
    description: "Teclado Casio CT-S200 portátil com 61 teclas sensíveis ao toque, 400 timbres, 77 ritmos e conexão USB-MIDI. Funciona com pilhas ou fonte de alimentação.",
  },
  {
    id: "5",
    name: "Baixo Elétrico Fender Jazz Bass",
    image: baixoFender, 
    price: 4999.90,
    description: "Baixo elétrico Fender Jazz Bass Player Series com corpo em alder, braço em maple com perfil moderno e escala em pau-ferro. Possui dois captadores single-coil V-Mod Jazz Bass.",
  },
  {
    id: "6",
    name: "Flauta Transversal Yamaha YFL-222",
    image: flautaYamaha, 
    price: 2899.90,
    description: "Flauta transversal Yamaha YFL-222 em prata niquelada com chaves fechadas e orifício desalinhado. Ideal para estudantes de todos os níveis.",
  },
  {
    id: "7",
    name: "Saxofone Alto Yamaha YAS-280",
    image: saxYamaha, 
    price: 7899.90,
    description: "Saxofone alto Yamaha YAS-280 em acabamento dourado com mecanismo de Fá# agudo e apoio de polegar ajustável. Inclui estojo, boquilha e acessórios.",
  },
  {
    id: "8",
    name: "Violino Dominante 4/4",
    image: violinoDominante, 
    price: 1299.90,
    description: "Violino Dominante 4/4 com tampo em abeto maciço, fundo e laterais em maple, acabamento envernizado e montagem artesanal. Inclui estojo, arco e breu.",
  },
  {
    id: "9",
    name: "Acordeon Scandalli 120 Baixos",
    image: acordeonScandalli, 
    price: 12999.90,
    description: "Acordeon Scandalli 120 baixos com 41 teclas, 5 registros na mão direita e 7 registros na mão esquerda. Acabamento em celuloide e construção italiana tradicional.",
  },
  {
    id: "10",
    name: "Ukulele Kalani Soprano",
    image: ukuleleKalani,
    price: 349.90,
    description: "Ukulele Kalani soprano com corpo em mogno, escala em jacarandá e afinadores de precisão. Acabamento acetinado e cordas Aquila de qualidade.",
  },
  {
    id: "11",
    name: "Piano Digital Yamaha P-125",
    image: pianoYamaha, 
    price: 4599.90,
    description: "Piano digital Yamaha P-125 com 88 teclas GHS com sensibilidade ao toque, 24 vozes, 50 ritmos e amplificadores integrados. Inclui pedal sustain e suporte para partituras.",
  },
  {
    id: "12",
    name: "Cajon Contemporânea",
    image: cajonPearl, 
    price: 599.90,
    description: "Cajon Contemporânea em madeira de alta qualidade com sistema de esteiras e cantoneiras de proteção. Produz sons graves profundos e agudos precisos.",
  }
];

export default productsData;
