"use client"
import { CNFlag } from '@/components/iconsCode/language/CNFlag';
import { DEFlag } from '@/components/iconsCode/language/DEFlag';
import { ILFlag } from '@/components/iconsCode/language/ILFlag';
import { SAFlag } from '@/components/iconsCode/language/SAFlag';
import { USFlag } from '@/components/iconsCode/language/USFlag';
import sd from '@/assets/img/bravormain.png';

export const siteSettings = {
  name: 'Vogue Decor',
  description: 'Офицальный представитель фабрики VogueDecor Russia в России',
  author: {
    name: 'Vogue Decor',
    websiteUrl: 'http://VogueDecor.ru/Home',
    address: '',
  },
  logo: {
    // url: '/assets/img/Buttlogo.png',
    alt: 'BtterflyLC',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 0,
        path: '/Chapter',
        label: 'Все товары',
      },
      {
        id: 1,
        path: '/Chapter/Light?ProductTypes=1',
        label: 'Свет',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Light?ProductTypes=1',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Light/Lyustri?ProductTypes=1&Categories=1',
            label: 'Люстры',
          },
          {
            id: 2,
            path: '/Chapter/Light/Bra?ProductTypes=1&Categories=2',
            label: 'Бра',
          },
          {
            id: 3,
            path: '/Chapter/Light/NastolnieLampi?ProductTypes=1&Categories=3',
            label: 'Настольные лампы',
          },
          {
            id: 4,
            path: '/Chapter/Light/Torsheri?ProductTypes=1&Categories=4',
            label: 'Торшеры',
          },
          {
            id: 5,
            path: '/Chapter/Light/PodvesnoiSvet?ProductTypes=1&Categories=5',
            label: 'Подвесные светильники',
          },
          {
            id: 6,
            path: '/Chapter/Light/PotolochniySvet?ProductTypes=1&Categories=6',
            label: 'Потолочные светильники',
          },
          {
            id: 7,
            path: '/Chapter/Light/UlichniySvet?ProductTypes=1&Categories=7',
            label: 'Уличный свет',
          },
          {
            id: 8,
            path: '/Chapter/Light/PodsvetkaDlyaKartin?ProductTypes=1&Categories=8',
            label: 'Подсветка для картин',
          },
          {
            id: 10,
            path: '/Chapter/Light/TrekiSpoti?ProductTypes=1&Categories=9',
            label: 'Треки и споты',
          },
          {
            id: 9,
            path: '/Chapter/Light?ProductTypes=1&IsSale=true',
            label: 'Sale',
          },
        ],
        subMenu1: [
          {
            id: 0,
            path: '/Chapter/LightAccessories?ProductTypes=1&ProductTypes=8',
            label: 'Аксессуры к светильникам',
          },
          {
            id: 1,
            path: '/Chapter/LightAccessories/Abajuri?ProductTypes=1&Categories=61',
            label: 'Абажуры',
          },
          {
            id: 2,
            path: '/Chapter/LightAccessories/KolpakiKrepleniya?ProductTypes=1&Categories=62',
            label: 'Колпаки и крепления',
          },
          {
            id: 3,
            path: '/Chapter/LightAccessories/Lampochki?ProductTypes=1&Categories=63',
            label: 'Лампочки',
          },
          {
            id: 6,
            path: '/Chapter/LightAccessories/SvetodiodnieLenti?ProductTypes=1&Categories=64',
            label: 'Светодиодная лента / подсветка',
          },
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и установка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия монтажа',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и монтаж',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярная позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Люстра',
            article: '9027/8 bronze',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
            // url: '../assets/img/Buttlogo.png',
          }
        ],
      },
      {
        id: 2,
        path: '/Chapter/Furniture?ProductTypes=2',
        label: 'Мебель',
        subMenu: [
          {
            id: 1,
            path: '/Chapter/Furniture?ProductTypes=2',
            label: 'Все категории',
          },
          {
            id: 2,
            path: '/Chapter/Furniture/Divani?ProductTypes=2&Categories=11',
            label: 'Диваны',
          },
          {
            id: 3,
            path: '/Chapter/Furniture/Kresla?ProductTypes=2&Categories=12',
            label: 'Кресла',
          },
          {
            id: 4,
            path: '/Chapter/Furniture/Stoli?ProductTypes=2&Categories=13',
            label: 'Столы',
          },
          {
            id: 5,
            path: '/Chapter/Furniture/Stulya?ProductTypes=2&Categories=14',
            label: 'Стулья',
          },
          {
            id: 6,
            path: '/Chapter/Furniture/Komodi?ProductTypes=2&Categories=15',
            label: 'Комоды',
          },
          {
            id: 7,
            path: '/Chapter/Furniture/Konsoli?ProductTypes=2&Categories=16',
            label: 'Консоли',
          },
          {
            id: 8,
            path: '/Chapter/Furniture/Krovati?ProductTypes=2&Categories=17',
            label: 'Кровати',
          },
          {
            id: 10,
            path: '/Chapter/Furniture/Matrasi?ProductTypes=2&Categories=18',
            label: 'Матрасы',
          },
          {
            id: 11,
            path: '/Chapter/Furniture/PufiBanketki?ProductTypes=2&Categories=19',
            label: 'Пуфы и банкетки',
          },
          {
            id: 9,
            path: '/Chapter/Furniture?ProductTypes=2&IsSale=true',
            label: 'Sale',
          }
        ],
        // subMenu1: [
        //   {
        //     id: 0,
        //     path: '/Chapter/Furniture/Accessories',
        //     label: 'Аксессуры для мебели',
        //   },
        //   {
        //     id: 1,
        //     path: '/sub-menu-1',
        //     label: 'Средство по уходу за обивкой',
        //   },
        //   {
        //     id: 2,
        //     path: '/sub-menu-2',
        //     label: 'Декоративные подушки',
        //   },
        //   {
        //     id: 3,
        //     path: '/vintage',
        //     label: 'Пледы',
        //   },
        //   {
        //     id: 4,
        //     path: '/standard',
        //     label: 'Покрывала',
        //   }
        // ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и сборка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия монтажа',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и сборка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярная позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Диван Polo Rofo',
            article: '12536',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
            // url: '../assets/img/Buttlogo.png',
          }
        ],
      },
      {
        id: 3,
        path: '/Chapter/Mirrors?ProductTypes=3',
        label: 'Зеркала',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Mirrors?ProductTypes=3',
            label: 'Все категории',
          },
          // {
          //   id: 1,
          //   path: '/Chapter/Mirrors/Spodsvetkoi',
          //   label: 'С подсветкой',
          // },
          {
            id: 2,
            path: '/Chapter/Mirrors/Artobj?ProductTypes=3&Categories=20',
            label: 'Зеркало - пано / Арт-объекты',
          },
          {
            id: 3,
            path: '/Chapter/Mirrors/Sprintami?ProductTypes=3&Categories=21',
            label: 'С принтами',
          },
          {
            id: 4,
            path: '/Chapter/Mirrors/Solnishko?ProductTypes=3&Categories=22',
            label: 'Зеркало - солнышко',
          },
          {
            id: 5,
            path: '/Chapter/Mirrors/Solnishko?ProductTypes=3&Categories=23',
            label: 'С деревом',
          },
          {
            id: 6,
            path: '/Chapter/Mirrors/DesignMetall?ProductTypes=3&Categories=24',
            label: 'Дизайнерские с металлом',
          },
          {
            id: 7,
            path: '/Chapter/Mirrors/Klassicheskie?ProductTypes=3&Categories=25',
            label: 'Классические',
          },
          {
            id: 8,
            path: '/Chapter/Mirrors/Nastolnie?ProductTypes=3&Categories=26',
            label: 'Настольные зеркала',
          },
          {
            id: 10,
            path: '/Chapter/Mirrors/Napolnie?ProductTypes=3&Categories=27',
            label: 'Напольные зеркала',
          },
          {
            id: 11,
            path: '/Chapter/Mirrors/Pryamougolnie?ProductTypes=3&Categories=28',
            label: 'Прмоугольные',
          },
          {
            id: 12,
            path: '/Chapter/Mirrors/Kruglie?ProductTypes=3&Categories=29',
            label: 'Круглые',
          },
          {
            id: 9,
            path: '/Chapter/Mirrors?ProductTypes=3&IsSale=true',
            label: 'Sale',
          },
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и установка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия монтажа',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и монтаж',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 4,
        path: '/Chapter/Carpets?ProductTypes=4',
        label: 'Ковры',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Carpets?ProductTypes=4',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Carpets/Pryamougolnie?ProductTypes=4&Categories=30',
            label: 'Прямоугольные',
          },
          {
            id: 2,
            path: '/Chapter/Carpets/Kvadratnie?ProductTypes=4&Categories=31',
            label: 'Квадратные',
          },
          {
            id: 3,
            path: '/Chapter/Carpets/Kruglie?ProductTypes=4&Categories=32',
            label: 'Круглые',
          },
          {
            id: 4,
            path: '/Chapter/Carpets/Ovalnie?ProductTypes=4&Categories=33',
            label: 'Овальные',
          },
          {
            id: 5,
            path: '/Chapter/Carpets/Dorojki?ProductTypes=4&Categories=34',
            label: 'Дорожки',
          },
          {
            id: 6,
            path: '/Chapter/Carpets/Nestandartnie?ProductTypes=4&Categories=35',
            label: 'Нестандартные',
          },
          {
            id: 9,
            path: '/Chapter/Carpets?ProductTypes=4&IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 5,
        path: '/Chapter/GoodsForHome?ProductTypes=5',
        label: 'Товары для дома',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/GoodsForHome?ProductTypes=5',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/GoodsForHome/Tarelki?ProductTypes=5&Categories=36',
            label: 'Дизайнерские тарелки',
          },
          {
            id: 2,
            path: '/Chapter/GoodsForHome/Stremyanki?ProductTypes=5&Categories=37',
            label: 'Стремянки и скамьи',
          },
          {
            id: 3,
            path: '/Chapter/GoodsForHome/Sushilki?ProductTypes=5&Categories=38',
            label: 'Сушилки',
          },
          {
            id: 4,
            path: '/Chapter/GoodsForHome/Gladilki?ProductTypes=5&Categories=39',
            label: 'Гладильные доски',
          },
          {
            id: 5,
            path: '/Chapter/GoodsForHome/VeshalkiNapolnie?ProductTypes=5&Categories=40',
            label: 'Вешалки напольные',
          },
          {
            id: 6,
            path: '/Chapter/GoodsForHome/VeshalkiNastennie?ProductTypes=5&Categories=41',
            label: 'Вешалки настенные',
          },
          {
            id: 7,
            path: '/Chapter/GoodsForHome/BathAccess?ProductTypes=5&Categories=42',
            label: 'Аксессуары для ванной',
          },
          {
            id: 8,
            path: '/Chapter/GoodsForHome/LojkiObuvi?ProductTypes=5&Categories=43',
            label: 'Ложки для обуви',
          },
          {
            id: 10,
            path: '/Chapter/GoodsForHome/VaziPodsvechniki?ProductTypes=5&Categories=44',
            label: 'Вазы и подсвечники',
          },
          {
            id: 11,
            path: '/Chapter/GoodsForHome/Podushki?ProductTypes=5&Categories=45',
            label: 'Декоративные подушки',
          },
          {
            id: 12,
            path: '/Chapter/GoodsForHome/Pledi?ProductTypes=5&Categories=46',
            label: 'Пледы',
          },
          {
            id: 13,
            path: '/Chapter/GoodsForHome/Pokrivala?ProductTypes=5&Categories=47',
            label: 'Покрывала',
          },
          // {
          //   id: 14,
          //   path: '/Chapter/ProductTypes=5&GoodsForHome/Podnosi',
          //   label: 'Сервисные столики / подносы',
          // },
          // {
          //   id: 15,
          //   path: '/Chapter/ProductTypes=5&GoodsForHome/Obuvnici',
          //   label: 'Обувницы',
          // },
          {
            id: 9,
            path: '/Chapter/GoodsForHome?ProductTypes=5&IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 6,
        path: '/Chapter/Accessories?ProductTypes=6',
        label: 'Аксессуары',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Accessories?ProductTypes=6',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Accessories/Statuetki?ProductTypes=6&Categories=48',
            label: 'Современные игрушки / статуэтки',
          },
          {
            id: 2,
            path: '/Chapter/Accessories/Watches?ProductTypes=6&Categories=49',
            label: 'Часы',
          },
          {
            id: 4,
            path: '/Chapter/Accessories/NastolnieIgri?ProductTypes=6&Categories=50',
            label: 'Настольные и настенные игры',
          },
          {
            id: 5,
            path: '/Chapter/Accessories/Zonti?ProductTypes=6&Categories=51',
            label: 'Зонты',
          },
          {
            id: 6,
            path: '/Chapter/Accessories/PodstavkaDlyaZontov?ProductTypes=6&Categories=52',
            label: 'Подставки для зонтов',
          },
          {
            id: 7,
            path: '/Chapter/Accessories/LojkiDlyaObuvi?ProductTypes=6&Categories=53',
            label: 'Ложки для обуви',
          },
          {
            id: 8,
            path: '/Chapter/Accessories/DerjateliKnig?ProductTypes=6&Categories=54',
            label: 'Держатели книг',
          },
          // {
          //   id: 10,
          //   path: '/Chapter/ProductTypes=6&Accessories/DesignAccess',
          //   label: 'Дизайнерские аксессуары',
          // },
          {
            id: 9,
            path: '/Chapter/Accessories/?ProductTypes=6&IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 7,
        path: '/Chapter/Paintings?ProductTypes=7',
        label: 'Картины',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Paintings?ProductTypes=7',
            label: 'Все картины и панно',
          },
          {
            id: 1,
            path: '/Chapter/Paintings/Artobj?ProductTypes=7&Categories=55',
            label: 'Арт-объекты',
          },
          {
            id: 2,
            path: '/Chapter/Paintings/Avtorskie?ProductTypes=7&Categories=56',
            label: 'Картины авторские',
          },
          {
            id: 3,
            path: '/Chapter/Paintings/Posteri?ProductTypes=7&Categories=57',
            label: 'Постеры',
          },
          {
            id: 4,
            path: '/Chapter/Paintings/WithLego?ProductTypes=7&Categories=58',
            label: 'Панно с лего',
          },
          {
            id: 5,
            path: '/Chapter/Paintings/SportStyle?ProductTypes=7&Categories=59',
            label: 'Панно в спортивном стиле',
          },
          {
            id: 6,
            path: '/Chapter/Paintings/Reproduction?ProductTypes=7&Categories=60',
            label: 'Репродукция',
          },
          {
            id: 9,
            path: '/Chapter/Paintings?ProductTypes=7&IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 8,
        // path: 'default',
        none: 'default',
        label: 'Обои и шторы - скоро!'
      },
     
    ],
    MainMenu: [
      {
        id: 1,
        path: '/AboutUs',
        label: 'О нас',
      },
      {
        id: 1,
        path: '/Outlet',
        label: 'Outlet',
      },
      {
        id: 1,
        path: '/Factory',
        label: 'Производство',
      },
      {
        id: 1,
        path: '/Collaboration',
        label: 'Сотрудниество',
      },
      {
        id: 1,
        path: '/Contacts',
        label: 'Контакты',
      },
      {
        id: 1,
        path: '/DostavkaOplata',
        label: 'Доставка',
      },
    ],
  },
};
