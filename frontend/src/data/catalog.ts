export interface Category {
  id: number;
  name: string;
  path: string;
  children?: Category[];
}

export const catalogData: Category[] = [
  {
    id: 1,
    name: 'Ванны',
    path: '/catalog/baths',
    children: [
      {
        id: 11,
        name: 'Акриловые ванны',
        path: '/catalog/baths/acrylic',
        children: [
          { id: 111, name: 'Прямоугольные', path: '/catalog/baths/acrylic/rectangular' },
          { id: 112, name: 'Угловые', path: '/catalog/baths/acrylic/corner' },
          { id: 113, name: 'Асимметричные', path: '/catalog/baths/acrylic/asymmetric' }
        ]
      },
      {
        id: 12,
        name: 'Чугунные ванны',
        path: '/catalog/baths/cast-iron',
        children: [
          { id: 121, name: 'Классические', path: '/catalog/baths/cast-iron/classic' },
          { id: 122, name: 'Ретро', path: '/catalog/baths/cast-iron/retro' }
        ]
      },
      {
        id: 13,
        name: 'Стальные ванны',
        path: '/catalog/baths/steel',
        children: [
          { id: 131, name: 'Эмалированные', path: '/catalog/baths/steel/enamel' },
          { id: 132, name: 'С покрытием', path: '/catalog/baths/steel/coated' }
        ]
      },
      {
        id: 14,
        name: 'Каменные ванны',
        path: '/catalog/baths/stone',
        children: [
          { id: 141, name: 'Мраморные', path: '/catalog/baths/stone/marble' },
          { id: 142, name: 'Гранитные', path: '/catalog/baths/stone/granite' }
        ]
      },
      {
        id: 15,
        name: 'Деревянные ванны',
        path: '/catalog/baths/wooden',
        children: [
          { id: 151, name: 'Кедровые', path: '/catalog/baths/wooden/cedar' },
          { id: 152, name: 'Дубовые', path: '/catalog/baths/wooden/oak' }
        ]
      },
      {
        id: 16,
        name: 'Медные ванны',
        path: '/catalog/baths/copper',
        children: [
          { id: 161, name: 'Ручной работы', path: '/catalog/baths/copper/handmade' },
          { id: 162, name: 'Антикварные', path: '/catalog/baths/copper/antique' }
        ]
      },
      {
        id: 17,
        name: 'Керамические ванны',
        path: '/catalog/baths/ceramic',
        children: [
          { id: 171, name: 'Глазурованные', path: '/catalog/baths/ceramic/glazed' },
          { id: 172, name: 'Неглазурованные', path: '/catalog/baths/ceramic/unglazed' }
        ]
      },
      {
        id: 18,
        name: 'Пластиковые ванны',
        path: '/catalog/baths/plastic',
        children: [
          { id: 181, name: 'Полипропиленовые', path: '/catalog/baths/plastic/polypropylene' },
          { id: 182, name: 'Полиэтиленовые', path: '/catalog/baths/plastic/polyethylene' }
        ]
      },
      {
        id: 19,
        name: 'Карбоновые ванны',
        path: '/catalog/baths/carbon',
        children: [
          { id: 191, name: 'С углеродным волокном', path: '/catalog/baths/carbon/fiber' },
          { id: 192, name: 'С углеродным покрытием', path: '/catalog/baths/carbon/coated' }
        ]
      },
      {
        id: 20,
        name: 'Стеклянные ванны',
        path: '/catalog/baths/glass',
        children: [
          { id: 201, name: 'Прозрачные', path: '/catalog/baths/glass/transparent' },
          { id: 202, name: 'Матовые', path: '/catalog/baths/glass/frosted' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Смесители',
    path: '/catalog/faucets',
    children: [
      {
        id: 21,
        name: 'Для ванны',
        path: '/catalog/faucets/bathroom',
        children: [
          { id: 211, name: 'Однорычажные', path: '/catalog/faucets/bathroom/single-lever' },
          { id: 212, name: 'Двухрычажные', path: '/catalog/faucets/bathroom/two-lever' }
        ]
      },
      {
        id: 22,
        name: 'Для кухни',
        path: '/catalog/faucets/kitchen',
        children: [
          { id: 221, name: 'С выдвижным изливом', path: '/catalog/faucets/kitchen/pull-out' },
          { id: 222, name: 'С сенсорным управлением', path: '/catalog/faucets/kitchen/touch' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Раковины',
    path: '/catalog/sinks',
    children: [
      {
        id: 31,
        name: 'Накладные',
        path: '/catalog/sinks/countertop',
        children: [
          { id: 311, name: 'Круглые', path: '/catalog/sinks/countertop/round' },
          { id: 312, name: 'Квадратные', path: '/catalog/sinks/countertop/square' }
        ]
      },
      {
        id: 32,
        name: 'Встраиваемые',
        path: '/catalog/sinks/undermount',
        children: [
          { id: 321, name: 'Под столешницу', path: '/catalog/sinks/undermount' },
          { id: 322, name: 'Вровень со столешницей', path: '/catalog/sinks/integrated' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Душевые кабины',
    path: '/catalog/showers',
    children: [
      {
        id: 41,
        name: 'Закрытые кабины',
        path: '/catalog/showers/enclosed',
        children: [
          { id: 411, name: 'С гидромассажем', path: '/catalog/showers/enclosed/hydro' },
          { id: 412, name: 'С сауной', path: '/catalog/showers/enclosed/sauna' }
        ]
      },
      {
        id: 42,
        name: 'Душевые уголки',
        path: '/catalog/showers/corners',
        children: [
          { id: 421, name: 'Квадратные', path: '/catalog/showers/corners/square' },
          { id: 422, name: 'Прямоугольные', path: '/catalog/showers/corners/rectangle' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Унитазы',
    path: '/catalog/toilets',
    children: [
      {
        id: 51,
        name: 'Подвесные унитазы',
        path: '/catalog/toilets/wall-hung',
        children: [
          { id: 511, name: 'Безободковые', path: '/catalog/toilets/wall-hung/rimless' },
          { id: 512, name: 'С инсталляцией', path: '/catalog/toilets/wall-hung/installation' }
        ]
      },
      {
        id: 52,
        name: 'Напольные унитазы',
        path: '/catalog/toilets/floor-standing',
        children: [
          { id: 521, name: 'Компакт', path: '/catalog/toilets/floor-standing/compact' },
          { id: 522, name: 'Моноблок', path: '/catalog/toilets/floor-standing/monoblock' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Биде',
    path: '/catalog/bidets',
    children: [
      {
        id: 61,
        name: 'Напольные биде',
        path: '/catalog/bidets/floor-standing',
        children: [
          { id: 611, name: 'Классические', path: '/catalog/bidets/floor-standing/classic' },
          { id: 612, name: 'Современные', path: '/catalog/bidets/floor-standing/modern' }
        ]
      },
      {
        id: 62,
        name: 'Подвесные биде',
        path: '/catalog/bidets/wall-hung',
            children: [
          { id: 621, name: 'Классические', path: '/catalog/bidets/wall-hung/classic' },
          { id: 622, name: 'Современные', path: '/catalog/bidets/wall-hung/modern' }
        ]
      }
    ]
  }
]; 