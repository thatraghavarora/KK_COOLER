// ============================================================
// KK COOLER — Complete Product Catalog (15 models)
// Transcribed directly from the 19-page factory catalog posters.
// No invented specs: only Size, Tank, Fan/Blade, Circle, Motor,
// and the 6 common features printed on every poster.
// Prices / wattage / CFM / cooling-area are NOT in the catalog,
// so they are intentionally left out (price = on request).
// ============================================================

// ---- Product posters (one per catalog page) ----
import yoyoImg from '../assets/a740ed28-0efd-4a41-abb6-2d3eecfc0174.png'
import zingoImg from '../assets/f70ca075-eee8-4078-b422-56700f90c45a.png'
import hillerImg from '../assets/cd2c7897-f801-4523-8341-79452a1dbaf1.png'
import hillerXlImg from '../assets/636a1587-5a58-4a7c-a359-f9b9786d68cd.png'
import nimbusImg from '../assets/dd1257d0-29f6-475a-86c5-a1dfe59c0a3f.png'
import terminatorWhiteImg from '../assets/55b17c8d-70ce-4846-bfee-99f65dca93ea.png'
import terminatorBlackImg from '../assets/97c7c855-6d48-4106-9df0-60b5de17180e.png'
import terminatorGreenImg from '../assets/f1b5d978-a7e2-4476-ba71-707f378e13de.png'
import sultanImg from '../assets/33a8d710-5417-4d69-8daf-c0618801a3fd.png'
import badshahImg from '../assets/c3801909-566c-434a-980b-03b246e60357.png'
import yuvrajImg from '../assets/1dac5477-ef4f-4362-9e0c-6bb3e771f3ec.png'
import yuvrajFlapImg from '../assets/3b32483b-8b3c-4696-8ada-d3c5b3930eac.png'
import tuktukImg from '../assets/beffb962-5739-4e10-b91c-54d96f24ce1e.png'
import frostyImg from '../assets/86e81506-14e9-416e-9d00-08be30a60323.png'
import sukhoiImg from '../assets/23d814f8-cc3f-401f-8746-650299f37014.png'
import safariImg from '../assets/4c33a828-fb08-4d6e-910f-6d4db63eede6.png'
import safariFlapImg from '../assets/f05e9b7f-6c8f-4282-b4f6-042aa549ef4e.png'

// ---- Website banners ----
import jodhpurBanner from '../assets/1b554958-16d7-40ef-bb82-3fcd2a57e3c4.png'
import comfortBanner from '../assets/ChatGPT Image Sep 29, 2026, 08_46_39 AM.png'
import wholesaleBanner from '../assets/8225e15a-2f71-43d8-a0e8-62699aa0f320.png'
import catalogBanner from '../assets/WhatsApp Image 2026-09-28 at 8.17.23 PM.jpeg'

export const brandInfo = {
  brand: 'KK COOLER',
  category: 'Air Coolers',
  positioning: 'Premium Indian Manufacturer of High-Performance Air Coolers',
  experience: '15+ Years Manufacturing Experience',
  builtFor: 'Made for Indian Conditions / Built to Last',
  madeIn: 'Made in India',
  messages: [
    'Powerful Cooling',
    'Energy Efficient',
    'Durable & Long Lasting',
    'Wide Air Delivery',
    'Innovative Designs',
    'Built for You',
  ],
}

export const heroBanners = [
  {
    id: 'banner-jodhpur',
    image: jodhpurBanner,
    title: 'Jodhpur Ki Garmi Ka Perfect Solution',
    subtitle: 'Powerful cooling for every home — 15+ years manufacturing experience',
    link: '/all-coolers',
    cta: 'Explore Our Range',
  },
  {
    id: 'banner-comfort',
    image: comfortBanner,
    title: 'Cooling Comfort For Every Space',
    subtitle: 'Premium Indian manufacturer of high-performance air coolers',
    link: '/all-coolers',
    cta: 'Explore Our Range',
  },
  {
    id: 'banner-catalog',
    image: catalogBanner,
    title: 'KK Cooler Product Catalog — 15 Models',
    subtitle: 'YOYO • ZINGO • HILLER • NIMBUS • TERMINATOR • SULTAN • BADSHAH • YUVRAJ • TUK-TUK • FROSTY • SUKHOI • SAFARI',
    link: '/all-coolers',
    cta: 'View All 15 Models',
  },
  {
    id: 'banner-wholesale',
    image: wholesaleBanner,
    title: 'Wholesale Counter — Direct From Factory',
    subtitle: 'Best wholesale rates • Bulk orders • Bhadu Market, Jodhpur • 93513 59518',
    link: '/contact-us',
    cta: 'Contact Wholesale',
  },
]

export const factoryDetails = {
  name: 'KK COOLER (K.K. Enterprises)',
  proprietor: 'Mr. Kamal Arora',
  address: 'KK COOLER, Bhadu Market, Aditya Nagar, Jodhpur, Rajasthan – 342001',
  landmark: 'Bhadu Market, Aditya Nagar',
  phone: '9351359518',
  altPhone: '9760098098',
  email: 'info@kkcoolerjodhpur.com',
  website: 'www.kkcooler.in',
  whatsapp: '919351359518',
  workingHours: 'Open daily: 10:00 AM – 7:00 PM',
  experience: '15+ Years Manufacturing Experience',
  dispatch: 'Direct From Factory — Wholesale Counter Jodhpur. Best wholesale rates, bulk orders, reliable supply.',
}

export const wholesaleInfo = {
  title: 'KK COOLER Wholesale Counter',
  points: [
    'Direct from manufacturer',
    'Best wholesale rates',
    'Wide range of models',
    'Bulk orders available',
    'Reliable supply',
  ],
  phone: '9351359518',
  address: 'KK COOLER, Bhadu Market, Aditya Nagar, Jodhpur, Rajasthan – 342001',
}

export const coolerCategories = [
  {
    id: 'personal',
    name: 'Compact Coolers',
    slug: 'personal-coolers',
    path: '/personal-coolers',
    image: yoyoImg,
    tagline: '30–50 LTR • Home & Counter',
    count: '5 Models Available',
    desc: 'YOYO, ZINGO, HILLER, TUK-TUK & FROSTY — compact 12.5" 3-leaf coolers.',
  },
  {
    id: 'tower',
    name: 'Family Coolers',
    slug: 'tower-coolers',
    path: '/tower-coolers',
    image: nimbusImg,
    tagline: '70 LTR • Tall Family Bodies',
    count: '2 Models Available',
    desc: 'HILLER-XL (44") & NIMBUS (50") — tall 70L coolers with 3-leaf wheel fan.',
  },
  {
    id: 'commercial',
    name: 'Jumbo Desert Coolers',
    slug: 'commercial-cooler',
    path: '/commercial-cooler',
    image: terminatorWhiteImg,
    tagline: '90–150 LTR • Hall & Commercial',
    count: '8 Models Available',
    desc: 'SUKHOI, YUVRAJ, SAFARI, SULTAN, BADSHAH & TERMINATOR — 4-leaf heavy throw.',
  },
]

// Common bullet set printed on every poster
const COMMON_6 = [
  'Powerful Air Delivery',
  'High Efficiency Cooling',
  'Durable & Long Lasting',
  'Low Power Consumption',
  'Easy Mobility',
  'Reverse / Forward Motor — Reverse for Cooling, Forward for Ventilation',
]

function makeCooler({
  id, model, size, sizeLabel, tank, fan, circle, category, categoryName,
  type, image, poster, gallery, badge, highlight, launch, extraFeatures = [],
}) {
  const specsSheet = {
    Model: model,
    'Size': `${size} (${sizeLabel})`,
    'Tank Capacity': `${tank} LTR.`,
    'Fan Blade': fan,
    'Circle Size': `${circle}"`,
    Motor: 'Reverse / Forward — Reverse for Cooling, Forward for Ventilation',
  }
  if (launch) specsSheet['Launch (as per poster)'] = launch
  specsSheet['Brand'] = 'KK COOLER — Premium Indian Manufacturer of High-Performance Air Coolers'
  specsSheet['Experience'] = '15+ Years Manufacturing Experience'
  specsSheet['Built For'] = 'Made for Indian Conditions / Built to Last'

  return {
    id,
    name: `KK COOLER ${model} — ${tank} LTR`,
    category,
    categoryName,
    coolerType: type,
    modelNumber: `KK-${model.replace(/[\s-]+/g, '-').toUpperCase()}-${tank}L`,
    image,
    poster: poster || image,
    badge,
    gallery: gallery || [{ label: 'Catalog Poster (tap to zoom)', image }],
    // No catalog price — UI must show "Contact for price"
    mrp: null,
    sellingPrice: null,
    priceOnRequest: true,
    capacity: `${tank} Litres`,
    coolingCapacity: highlight,
    tankCapacity: `${tank} Litres Tank Capacity`,
    dimensions: `${size} (${sizeLabel})`,
    motorPump: 'Reverse / Forward Motor — Reverse for Cooling, Forward for Ventilation',
    powerConsumption: 'Low Power Consumption (as per catalog)',
    fanBlower: `${circle}" Circle — ${fan}, Maximum Air Delivery`,
    airDelivery: `${circle}" ${fan} — Powerful Air Delivery`,
    airThrow: `Catalog: ${circle}" circle, ${fan}`,
    bodyMaterial: 'Durable cooler body — Built for Indian Conditions (as per catalog)',
    availableColors: 'As shown in catalog poster',
    warranty: '15+ Years Manufacturing Experience',
    keyFeatures: [...COMMON_6, ...extraFeatures],
    highlight,
    specsSheet,
    specs: [
      `Tank: ${tank} LTR.`,
      `Size: ${size} (${sizeLabel})`,
      `Fan: ${fan} / Circle ${circle}"`,
      'Motor: Reverse (Cooling) / Forward (Ventilation)',
    ],
  }
}

export const allCoolers = [
  makeCooler({
    id: 'yoyo-30l', model: 'YOYO', size: '30" × 19" × 15"', sizeLabel: 'H × W × D',
    tank: 30, fan: '3 Leaf Blade', circle: '12.5', category: 'personal', categoryName: 'Compact Coolers',
    type: 'Compact Air Cooler', image: yoyoImg, badge: 'Compact 30L',
    highlight: 'Smallest catalog model — compact 30L solution with 12.5" 3-leaf fan.',
  }),
  makeCooler({
    id: 'zingo-30l', model: 'ZINGO', size: '33" × 21" × 16"', sizeLabel: 'H × W × D',
    tank: 30, fan: '3 Leaf Blade', circle: '12.5', category: 'personal', categoryName: 'Compact Coolers',
    type: 'Compact Air Cooler', image: zingoImg, badge: 'Compact 30L',
    highlight: 'Bigger body than YOYO with same 30L tank and 12.5" fan circle.',
  }),
  makeCooler({
    id: 'hiller-50l', model: 'HILLER', size: '35" × 22" × 15"', sizeLabel: 'H × W × D',
    tank: 50, fan: '3 Leaf Blade', circle: '12.5', category: 'personal', categoryName: 'Compact Coolers',
    type: 'Mid-Size Air Cooler', image: hillerImg, badge: 'Mid 50L',
    highlight: 'Mid-size step-up — 50L tank with 12.5" 3-leaf fan.',
  }),
  makeCooler({
    id: 'hiller-xl-70l', model: 'HILLER-XL', size: '44" × 22" × 15"', sizeLabel: 'H × W × D',
    tank: 70, fan: '3 Leaf Blade with Wheel', circle: '12.5', category: 'tower', categoryName: 'Family Coolers',
    type: 'Tall Family Air Cooler', image: hillerXlImg, badge: 'Family 70L',
    highlight: 'Taller 44" body with 70L tank and wheel-based 3-leaf mobility fan.',
    extraFeatures: ['Wheel-based mobility'],
  }),
  makeCooler({
    id: 'nimbus-70l', model: 'NIMBUS', size: '50" × 22" × 15"', sizeLabel: 'H × W × D',
    tank: 70, fan: '3 Leaf Blade with Wheel', circle: '12.5', category: 'tower', categoryName: 'Family Coolers',
    type: 'Tall Family Air Cooler', image: nimbusImg, badge: 'Family 70L',
    highlight: 'Tallest 70L model at 50" height — 3-leaf wheel fan for family halls.',
    extraFeatures: ['Wheel-based mobility', 'Wheeled tall design'],
  }),
  makeCooler({
    id: 'terminator-150l', model: 'TERMINATOR', size: '58" × 30" × 24"', sizeLabel: 'H × W × D',
    tank: 150, fan: '4 Leaf Blade', circle: '20.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Large Jumbo Air Cooler', image: terminatorWhiteImg, poster: terminatorWhiteImg,
    gallery: [
      { label: 'White Terminator Poster', image: terminatorWhiteImg },
      { label: 'Black Terminator Poster', image: terminatorBlackImg },
      { label: 'Green Terminator Poster', image: terminatorGreenImg },
    ],
    badge: 'Jumbo 150L',
    highlight: 'Same 150L / 20.5" spec in 3 colours — Black, Green & White catalog variants.',
    extraFeatures: ['Large 150-litre tank', '4-leaf fan', 'Available in Black / Green / White'],
  }),
  makeCooler({
    id: 'sultan-150l', model: 'SULTAN', size: '59" × 28" × 21"', sizeLabel: 'H × W × D',
    tank: 150, fan: '4 Leaf Blade', circle: '20.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Large Jumbo Air Cooler', image: sultanImg, badge: 'Jumbo 150L',
    highlight: 'Tallest catalog model at 59" — 150L large-capacity 4-leaf cooler.',
    extraFeatures: ['Large-capacity 150-litre tank'],
  }),
  makeCooler({
    id: 'badshah-150l', model: 'BADSHAH', size: '59" × 28" × 21"', sizeLabel: 'L × W × H',
    tank: 150, fan: '4 Leaf Blade', circle: '20.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Large Jumbo Air Cooler (Flap)', image: badshahImg, badge: 'Jumbo 150L',
    highlight: 'Catalog lists size as L × W × H — 150L flap-front jumbo cooler.',
    extraFeatures: ['150-litre tank', '4-leaf fan', 'Flap front design'],
  }),
  makeCooler({
    id: 'yuvraj-120l', model: 'YUVRAJ', size: '54" × 24" × 19"', sizeLabel: 'L × W × H',
    tank: 120, fan: '4 Leaf Blade', circle: '18.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Jumbo Desert Air Cooler', image: yuvrajImg, badge: 'Jumbo 120L',
    highlight: '120L jumbo with 18.5" 4-leaf fan — grill front design.',
    launch: 'Coming 20 October 2026',
    extraFeatures: ['120-litre tank'],
  }),
  makeCooler({
    id: 'yuvraj-flap-120l', model: 'YUVRAJ FLAP', size: '54" × 24" × 19"', sizeLabel: 'L × W × H',
    tank: 120, fan: '4 Leaf Blade', circle: '18.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Jumbo Desert Air Cooler (Flap)', image: yuvrajFlapImg, badge: 'Jumbo 120L',
    highlight: 'Same 120L / 18.5" spec as YUVRAJ with a different flap front.',
    extraFeatures: ['120-litre tank', 'Flap front design'],
  }),
  makeCooler({
    id: 'tuktuk-35l', model: 'TUK-TUK', size: '31" × 17.5" × 15"', sizeLabel: 'H × W × D',
    tank: 35, fan: '3 Leaf Blade', circle: '12.5', category: 'personal', categoryName: 'Compact Coolers',
    type: 'Compact Air Cooler', image: tuktukImg, badge: 'Compact 35L',
    highlight: 'Compact 35L model, 17.5" wide — grill front design.',
    launch: 'Coming 31 October 2026',
    extraFeatures: ['Compact 35-litre tank'],
  }),
  makeCooler({
    id: 'frosty-35l', model: 'FROSTY', size: '31" × 17.5" × 15"', sizeLabel: 'H × W × D',
    tank: 35, fan: '3 Leaf Blade', circle: '12.5', category: 'personal', categoryName: 'Compact Coolers',
    type: 'Compact Air Cooler (Flap)', image: frostyImg, badge: 'Compact 35L',
    highlight: 'Same 35L spec as TUK-TUK with a different flap front.',
    launch: 'Coming 31 October 2026',
    extraFeatures: ['Compact 35-litre tank', 'Flap front design'],
  }),
  makeCooler({
    id: 'sukhoi-90l', model: 'SUKHOI', size: '52" × 26" × 18"', sizeLabel: 'H × W × D',
    tank: 90, fan: '4 Leaf Blade', circle: '16.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Mid-Jumbo Air Cooler', image: sukhoiImg, badge: 'Mid-Jumbo 90L',
    highlight: 'Bridge model — 90L tank between 70L family and 120L jumbo, 16.5" 4-leaf fan.',
    launch: 'Coming 30 November 2026',
    extraFeatures: ['90-litre tank'],
  }),
  makeCooler({
    id: 'safari-120l', model: 'SAFARI', size: '56" × 28" × 20.5"', sizeLabel: 'H × W × D',
    tank: 120, fan: '4 Leaf Blade', circle: '18.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Jumbo Desert Air Cooler', image: safariImg, badge: 'Jumbo 120L',
    highlight: '56" jumbo 120L with 18.5" 4-leaf fan — grill front.',
    launch: 'Coming 31 October 2026',
    extraFeatures: ['120-litre tank'],
  }),
  makeCooler({
    id: 'safari-flap-120l', model: 'SAFARI FLAP', size: '56" × 28" × 20.5"', sizeLabel: 'H × W × D',
    tank: 120, fan: '4 Leaf Blade', circle: '18.5', category: 'commercial', categoryName: 'Jumbo Desert Coolers',
    type: 'Jumbo Desert Air Cooler (Flap)', image: safariFlapImg, badge: 'Jumbo 120L',
    highlight: 'Same 120L / 18.5" spec as SAFARI with a flap front.',
    launch: 'Coming 31 October 2026',
    extraFeatures: ['120-litre tank', 'Flap front design'],
  }),
]

export const coolersData = allCoolers
export default allCoolers

// Quick comparison table (as in catalog)
export const comparisonTable = [
  { model: 'YOYO', size: '30 × 19 × 15"', tank: 30, fan: '3 Leaf', circle: '12.5"' },
  { model: 'ZINGO', size: '33 × 21 × 16"', tank: 30, fan: '3 Leaf', circle: '12.5"' },
  { model: 'HILLER', size: '35 × 22 × 15"', tank: 50, fan: '3 Leaf', circle: '12.5"' },
  { model: 'HILLER-XL', size: '44 × 22 × 15"', tank: 70, fan: '3 Leaf + Wheel', circle: '12.5"' },
  { model: 'NIMBUS', size: '50 × 22 × 15"', tank: 70, fan: '3 Leaf + Wheel', circle: '12.5"' },
  { model: 'TERMINATOR', size: '58 × 30 × 24"', tank: 150, fan: '4 Leaf', circle: '20.5"' },
  { model: 'SULTAN', size: '59 × 28 × 21"', tank: 150, fan: '4 Leaf', circle: '20.5"' },
  { model: 'BADSHAH', size: '59 × 28 × 21"', tank: 150, fan: '4 Leaf', circle: '20.5"' },
  { model: 'YUVRAJ', size: '54 × 24 × 19"', tank: 120, fan: '4 Leaf', circle: '18.5"' },
  { model: 'YUVRAJ FLAP', size: '54 × 24 × 19"', tank: 120, fan: '4 Leaf', circle: '18.5"' },
  { model: 'TUK-TUK', size: '31 × 17.5 × 15"', tank: 35, fan: '3 Leaf', circle: '12.5"' },
  { model: 'FROSTY', size: '31 × 17.5 × 15"', tank: 35, fan: '3 Leaf', circle: '12.5"' },
  { model: 'SUKHOI', size: '52 × 26 × 18"', tank: 90, fan: '4 Leaf', circle: '16.5"' },
  { model: 'SAFARI', size: '56 × 28 × 20.5"', tank: 120, fan: '4 Leaf', circle: '18.5"' },
  { model: 'SAFARI FLAP', size: '56 × 28 × 20.5"', tank: 120, fan: '4 Leaf', circle: '18.5"' },
]
