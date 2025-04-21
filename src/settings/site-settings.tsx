"use client"
import sd from '@/assets/img/bravormain.png';

export const siteSettings = {
  name: 'Vogue Decor',
  description: 'Офицальный представитель фабрики VogueDecor Russia в России',
  author: {
    name: 'Vogue Decor',
    websiteUrl: 'http://Vogue-Decor.ru/Home',
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
        path: '/Chapter/Lights',
        label: 'Свет',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Lights',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Lights/lyustry',
            label: 'Люстры',
          },
          {
            id: 2,
            path: '/Chapter/Lights/bra',
            label: 'Бра',
          },
          {
            id: 3,
            path: '/Chapter/Lights/nastolnyelampy',
            label: 'Настольные лампы',
          },
          {
            id: 4,
            path: '/Chapter/Lights/torshery',
            label: 'Торшеры',
          },
          {
            id: 5,
            path: '/Chapter/Lights/podvesnyesvetilniki',
            label: 'Подвесные светильники',
          },
          {
            id: 6,
            path: '/Chapter/Lights/potolochnesvetilniki',
            label: 'Потолочные светильники',
          },
          {
            id: 7,
            path: '/Chapter/Lights/ulichnyysvet',
            label: 'Уличный свет',
          },
          {
            id: 8,
            path: '/Chapter/Lights/podsvetkadlyakartin',
            label: 'Подсветка для картин',
          },
          {
            id: 10,
            path: '/Chapter/Lights/trekiispoty',
            label: 'Треки и споты',
          },
          // {
          //   id: 11,
          //   path: '/Chapter/Lights/aksessuaryksvetilnikam',
          //   label: 'Аксессуары к светильникам',
          // },
          {
            id: 9,
            path: '/Chapter/Lights?IsSale=true',
            label: 'Sale',
          },
        ],
        subMenu1: [
          {
            id: 0,
            path: '/Chapter?ProductTypes=1&ProductTypes=8',
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
      // {
      //   id: 2,
      //   path: '/Chapter/Furniture',
      //   label: 'Мебель',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/Chapter/Furniture',
      //       label: 'Все категории',
      //     },
      //     {
      //       id: 2,
      //       path: '/Chapter/Furniture/divany',
      //       label: 'Диваны',
      //     },
      //     {
      //       id: 3,
      //       path: '/Chapter/Furniture/kresla',
      //       label: 'Кресла',
      //     },
      //     {
      //       id: 4,
      //       path: '/Chapter/Furniture/stoly',
      //       label: 'Столы',
      //     },
      //     {
      //       id: 5,
      //       path: '/Chapter/Furniture/stulya',
      //       label: 'Стулья',
      //     },
      //     {
      //       id: 6,
      //       path: '/Chapter/Furniture/komody',
      //       label: 'Комоды',
      //     },
      //     {
      //       id: 7,
      //       path: '/Chapter/Furniture/konsoli',
      //       label: 'Консоли',
      //     },
      //     {
      //       id: 8,
      //       path: '/Chapter/Furniture/krovati',
      //       label: 'Кровати',
      //     },
      //     {
      //       id: 10,
      //       path: '/Chapter/Furniture/matrasy',
      //       label: 'Матрасы',
      //     },
      //     {
      //       id: 11,
      //       path: '/Chapter/Furniture/pufyibanketki',
      //       label: 'Пуфы и банкетки',
      //     },
      //     {
      //       id: 9,
      //       path: '/Chapter/Furniture?IsSale=true',
      //       label: 'Sale',
      //     }
      //   ],
      //   // subMenu1: [
      //   //   {
      //   //     id: 0,
      //   //     path: '/   label: 'Аксессуры для мебели',
      //   //   },
      //   //   {
      //   //     id: 1,
      //   //     path: '/sub-menu-1',
      //   //     label: 'Средство по уходу за обивкой',
      //   //   },
      //   //   {
      //   //     id: 2,
      //   //     path: '/sub-menu-2',
      //   //     label: 'Декоративные подушки',
      //   //   },
      //   //   {
      //   //     id: 3,
      //   //     path: '/vintage',
      //   //     label: 'Пледы',
      //   //   },
      //   //   {
      //   //     id: 4,
      //   //     path: '/standard',
      //   //     label: 'Покрывала',
      //   //   }
      //   // ],
      //   subMenu2: [
      //     {
      //       id: 0,
      //       path: '/sub-menu-1',
      //       label: 'Доставка и сборка',
      //     },
      //     {
      //       id: 1,
      //       path: '/sub-menu-1',
      //       label: 'Условия доставки',
      //     },
      //     {
      //       id: 2,
      //       path: '/sub-menu-2',
      //       label: 'Условия монтажа',
      //     },
      //     {
      //       id: 9,
      //       path: '/vintage',
      //       label: 'Беспланая доставка и сборка',
      //     }
      //   ],
      //   subMenu3: [
      //     {
      //       id: 0,
      //       path: '/PUPUPU',
      //       label: 'Популярная позиция',
      //     },
      //     {
      //       id: 1,
      //       path: '/POPOPOPO',
      //       label: 'Диван Polo Rofo',
      //       article: '12536',
      //       price: '98000₽',
      //       finalPrice: '88000₽',
      //       url: sd,
      //       // url: '../assets/img/Buttlogo.png',
      //     }
      //   ],
      // },
      // {
      //   id: 3,
      //   path: '/Chapter/Mirrors',
      //   label: 'Зеркала',
      //   subMenu: [
      //     {
      //       id: 0,
      //       path: '/Chapter/Mirrors',
      //       label: 'Все категории',
      //     },
      //     {
      //       id: 2,
      //       path: '/Chapter/Mirrors/zerkalo-panno-artobekt',
      //       label: 'Зеркало - пано - Арт-объекты',
      //     },
      //     {
      //       id: 3,
      //       path: '/Chapter/Mirrors/sprintami',
      //       label: 'С принтами',
      //     },
      //     {
      //       id: 4,
      //       path: '/Chapter/Mirrors/zerkalo-solnyshko',
      //       label: 'Зеркало - солнышко',
      //     },
      //     {
      //       id: 5,
      //       path: '/Chapter/Mirrors/sderevom',
      //       label: 'С деревом',
      //     },
      //     {
      //       id: 6,
      //       path: '/Chapter/Mirrors/dizaynerskiesmetallom',
      //       label: 'Дизайнерские с металлом',
      //     },
      //     {
      //       id: 7,
      //       path: '/Chapter/Mirrors/klassicheskie',
      //       label: 'Классические',
      //     },
      //     {
      //       id: 8,
      //       path: '/Chapter/Mirrors/nastolnyezerkala',
      //       label: 'Настольные зеркала',
      //     },
      //     {
      //       id: 10,
      //       path: '/Chapter/Mirrors/napolnyezerkala',
      //       label: 'Напольные зеркала',
      //     },
      //     {
      //       id: 11,
      //       path: '/Chapter/Mirrors/prmougolnye',
      //       label: 'Прмоугольные',
      //     },
      //     {
      //       id: 12,
      //       path: '/Chapter/Mirrors/kruglye',
      //       label: 'Круглые',
      //     },
      //     {
      //       id: 9,
      //       path: '/Chapter/Mirrors?IsSale=true',
      //       label: 'Sale',
      //     },
      //   ],
      //   subMenu2: [
      //     {
      //       id: 0,
      //       path: '/sub-menu-1',
      //       label: 'Доставка и установка',
      //     },
      //     {
      //       id: 1,
      //       path: '/sub-menu-1',
      //       label: 'Условия доставки',
      //     },
      //     {
      //       id: 2,
      //       path: '/sub-menu-2',
      //       label: 'Условия монтажа',
      //     },
      //     {
      //       id: 9,
      //       path: '/vintage',
      //       label: 'Беспланая доставка и монтаж',
      //     }
      //   ],
      //   subMenu3: [
      //     {
      //       id: 0,
      //       path: '/PUPUPU',
      //       label: 'Популярные позиция',
      //     },
      //     {
      //       id: 1,
      //       path: '/POPOPOPO',
      //       label: 'Зеркало Sun Polo',
      //       article: '8575',
      //       price: '98000₽',
      //       finalPrice: '88000₽',
      //       url: sd,
      //     },
      //     {
      //       id: 2,
      //       path: '/POPOPOPO',
      //       label: 'Зеркало Sun Polo',
      //       article: '8575',
      //       price: '98000₽',
      //       finalPrice: '88000₽',
      //       url: sd,
      //     }
      //   ],
      // },
      {
        id: 4,
        path: '/Chapter/Carpets',
        label: 'Ковры',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Carpets',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Carpets/pryamougolnye',
            label: 'Прямоугольные',
          },
          {
            id: 2,
            path: '/Chapter/Carpets/kvadratnye',
            label: 'Квадратные',
          },
          {
            id: 3,
            path: '/Chapter/Carpets/kruglye',
            label: 'Круглые',
          },
          {
            id: 4,
            path: '/Chapter/Carpets/ovalnye',
            label: 'Овальные',
          },
          {
            id: 5,
            path: '/Chapter/Carpets/dorozhki',
            label: 'Дорожки',
          },
          {
            id: 6,
            path: '/Chapter/Carpets/nestandartnye',
            label: 'Нестандартные',
          },
          {
            id: 9,
            path: '/Chapter/Carpets?IsSale=true',
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
        path: '/Chapter/TovariDlyaDoma',
        label: 'Товары для дома',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/TovariDlyaDoma',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/TovariDlyaDoma/dizaynerskietarelki',
            label: 'Дизайнерские тарелки',
          },
          {
            id: 2,
            path: '/Chapter/TovariDlyaDoma/stremyankiiskami',
            label: 'Стремянки и скамьи',
          },
          {
            id: 3,
            path: '/Chapter/TovariDlyaDoma/sushilki',
            label: 'Сушилки',
          },
          {
            id: 4,
            path: '/Chapter/TovariDlyaDoma/gladilnyedoski',
            label: 'Гладильные доски',
          },
          {
            id: 5,
            path: '/Chapter/TovariDlyaDoma/veshalkinapolnye',
            label: 'Вешалки напольные',
          },
          {
            id: 6,
            path: '/Chapter/TovariDlyaDoma/veshalkinastennye',
            label: 'Вешалки настенные',
          },
          {
            id: 7,
            path: '/Chapter/TovariDlyaDoma/aksessuarydlyavannoy',
            label: 'Аксессуары для ванной',
          },
          {
            id: 8,
            path: '/Chapter/TovariDlyaDoma/lozhkidlyaobuvi',
            label: 'Ложки для обуви',
          },
          {
            id: 10,
            path: '/Chapter/TovariDlyaDoma/vazyipodsvechniki',
            label: 'Вазы и подсвечники',
          },
          {
            id: 11,
            path: '/Chapter/TovariDlyaDoma/dekorativnyepodushki',
            label: 'Декоративные подушки',
          },
          {
            id: 12,
            path: '/Chapter/TovariDlyaDoma/pledy',
            label: 'Пледы',
          },
          {
            id: 13,
            path: '/Chapter/TovariDlyaDoma/pokryvala',
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
            path: '/Chapter/TovariDlyaDoma?IsSale=true',
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
        path: '/Chapter/Accessories',
        label: 'Аксессуары',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Accessories',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Accessories/sovremennyeigrushki-statuetki',
            label: 'Современные игрушки / статуэтки',
          },
          {
            id: 2,
            path: '/Chapter/Accessories/chasy',
            label: 'Часы',
          },
          {
            id: 4,
            path: '/Chapter/Accessories/nastolnyeinastennyeigry',
            label: 'Настольные и настенные игры',
          },
          {
            id: 5,
            path: '/Chapter/Accessories/zonty',
            label: 'Зонты',
          },
          {
            id: 6,
            path: '/Chapter/Accessories/podstavkidlyazontov',
            label: 'Подставки для зонтов',
          },
          {
            id: 7,
            path: '/Chapter/Accessories/derzhateliknig',
            label: 'Держатели книг',
          },
          {
            id: 9,
            path: '/Chapter/Accessories?IsSale=true',
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
        path: '/Chapter/Paints',
        label: 'Картины',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Paints',
            label: 'Все картины и панно',
          },
          {
            id: 1,
            path: '/Chapter/Paints/art-obekty',
            label: 'Арт-объекты',
          },
          {
            id: 2,
            path: '/Chapter/Paints/kartinyavtorskie',
            label: 'Картины авторские',
          },
          {
            id: 3,
            path: '/Chapter/Paints/postery',
            label: 'Постеры',
          },
          {
            id: 4,
            path: '/Chapter/Paints/pannoslego',
            label: 'Панно с лего',
          },
          {
            id: 5,
            path: '/Chapter/Paints/panovsportivnomstile',
            label: 'Панно в спортивном стиле',
          },
          {
            id: 6,
            path: '/Chapter/Paints/reproduktsiya',
            label: 'Репродукция',
          },
          {
            id: 9,
            path: '/Chapter/Paints?IsSale=true',
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
        path: '/Brands',
        label: 'Бренды',
      },
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
