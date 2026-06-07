export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  stock: number;
  image: string;
  images: string[];
  averageRating: number;
  reviewCount: number;
  shortDescription: string;
  isFeatured: boolean;
  isTrending: boolean;
  specs: Record<string, string>;
}

export const products: Product[] = [
{
  id: '1',
  name: 'Intel Core i7-14700K',
  slug: 'intel-core-i7-14700k',
  brand: 'Intel',
  category: 'CPUs',
  price: 62000,
  originalPrice: 72000,
  discountPercent: 14,
  stock: 12,
  image:
  'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.8,
  reviewCount: 156,
  shortDescription: '20 cores, 28 threads, up to 5.6 GHz boost clock',
  isFeatured: true,
  isTrending: true,
  specs: {
    Cores: '20',
    Threads: '28',
    'Base Clock': '3.4 GHz',
    'Boost Clock': '5.6 GHz'
  }
},
{
  id: '2',
  name: 'NVIDIA RTX 4070 Ti Super',
  slug: 'nvidia-rtx-4070-ti-super',
  brand: 'Nvidia',
  category: 'Graphics Cards',
  price: 165000,
  originalPrice: 185000,
  discountPercent: 11,
  stock: 5,
  image:
  'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.9,
  reviewCount: 203,
  shortDescription: '16GB GDDR6X, Ada Lovelace architecture, DLSS 3.0',
  isFeatured: true,
  isTrending: true,
  specs: { VRAM: '16GB GDDR6X', 'Boost Clock': '2610 MHz', TDP: '285W' }
},
{
  id: '3',
  name: 'Corsair Vengeance DDR5 32GB',
  slug: 'corsair-vengeance-ddr5-32gb',
  brand: 'Corsair',
  category: 'RAMs',
  price: 18500,
  originalPrice: 22000,
  discountPercent: 16,
  stock: 30,
  image:
  'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.7,
  reviewCount: 89,
  shortDescription: 'DDR5-6000MHz, CL36, Intel XMP 3.0 optimized',
  isFeatured: true,
  isTrending: false,
  specs: { Capacity: '32GB (2x16GB)', Speed: '6000MHz', Latency: 'CL36' }
},
{
  id: '4',
  name: 'Samsung 990 Pro 2TB NVMe',
  slug: 'samsung-990-pro-2tb',
  brand: 'Samsung',
  category: 'SSDs',
  price: 28000,
  originalPrice: 32000,
  discountPercent: 12,
  stock: 18,
  image:
  'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.9,
  reviewCount: 312,
  shortDescription: '7,450 MB/s read, PCIe 4.0 x4, NVMe 2.0',
  isFeatured: true,
  isTrending: true,
  specs: {
    Capacity: '2TB',
    Read: '7,450 MB/s',
    Write: '6,900 MB/s',
    Interface: 'PCIe 4.0'
  }
},
{
  id: '5',
  name: 'ASUS ROG Strix B650-E',
  slug: 'asus-rog-strix-b650e',
  brand: 'ASUS',
  category: 'Motherboards',
  price: 45000,
  originalPrice: 52000,
  discountPercent: 13,
  stock: 8,
  image:
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.6,
  reviewCount: 67,
  shortDescription: 'AM5 Socket, DDR5, PCIe 5.0, WiFi 6E, 2.5G LAN',
  isFeatured: false,
  isTrending: true,
  specs: { Socket: 'AM5', Chipset: 'B650E', RAM: 'DDR5-6400+', WiFi: '6E' }
},
{
  id: '6',
  name: 'Logitech G502 X Plus',
  slug: 'logitech-g502-x-plus',
  brand: 'Logitech',
  category: 'Mice',
  price: 14500,
  stock: 25,
  image:
  'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.7,
  reviewCount: 445,
  shortDescription: 'LIGHTFORCE hybrid switches, HERO 25K sensor, wireless',
  isFeatured: false,
  isTrending: true,
  specs: {
    Sensor: 'HERO 25K',
    DPI: '25,600',
    Weight: '106g',
    Battery: '130hrs'
  }
},
{
  id: '7',
  name: 'Corsair K70 RGB Pro',
  slug: 'corsair-k70-rgb-pro',
  brand: 'Corsair',
  category: 'Keyboards',
  price: 22000,
  originalPrice: 25000,
  discountPercent: 12,
  stock: 15,
  image:
  'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.8,
  reviewCount: 178,
  shortDescription:
  'Cherry MX Red, per-key RGB, aluminum frame, tournament mode',
  isFeatured: false,
  isTrending: true,
  specs: {
    Switches: 'Cherry MX Red',
    Backlight: 'Per-key RGB',
    Layout: 'Full-size'
  }
},
{
  id: '8',
  name: 'LG UltraGear 27" QHD 165Hz',
  slug: 'lg-ultragear-27-qhd',
  brand: 'LG',
  category: 'LCDs',
  price: 55000,
  originalPrice: 65000,
  discountPercent: 15,
  stock: 3,
  image:
  'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.6,
  reviewCount: 92,
  shortDescription: '27" QHD IPS, 165Hz, 1ms GtG, HDR10, G-Sync Compatible',
  isFeatured: false,
  isTrending: false,
  specs: {
    Resolution: '2560x1440',
    Panel: 'IPS',
    'Refresh Rate': '165Hz',
    Response: '1ms'
  }
},
{
  id: '9',
  name: 'AMD Ryzen 7 7800X3D',
  slug: 'amd-ryzen-7-7800x3d',
  brand: 'AMD',
  category: 'CPUs',
  price: 55000,
  stock: 10,
  image:
  'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.9,
  reviewCount: 287,
  shortDescription: '8 cores, 16 threads, 3D V-Cache, best gaming CPU',
  isFeatured: false,
  isTrending: true,
  specs: {
    Cores: '8',
    Threads: '16',
    Cache: '104MB (3D V-Cache)',
    TDP: '120W'
  }
},
{
  id: '10',
  name: 'NVIDIA RTX 4090 Founders',
  slug: 'nvidia-rtx-4090',
  brand: 'Nvidia',
  category: 'Graphics Cards',
  price: 350000,
  originalPrice: 380000,
  discountPercent: 8,
  stock: 2,
  image:
  'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop',
  images: [],
  averageRating: 5.0,
  reviewCount: 89,
  shortDescription: '24GB GDDR6X, 16384 CUDA cores, ultimate 4K gaming',
  isFeatured: true,
  isTrending: true,
  specs: { VRAM: '24GB GDDR6X', 'CUDA Cores': '16384', TDP: '450W' }
},
{
  id: '11',
  name: 'G.Skill Trident Z5 RGB 64GB',
  slug: 'gskill-trident-z5-64gb',
  brand: 'G.Skill',
  category: 'RAMs',
  price: 35000,
  stock: 7,
  image:
  'https://images.unsplash.com/photo-1592664474505-51c549ad15c5?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.8,
  reviewCount: 56,
  shortDescription: 'DDR5-6400MHz, CL32, dual-channel, RGB lighting',
  isFeatured: false,
  isTrending: false,
  specs: { Capacity: '64GB (2x32GB)', Speed: '6400MHz', Latency: 'CL32' }
},
{
  id: '12',
  name: 'Razer DeathAdder V3 Pro',
  slug: 'razer-deathadder-v3-pro',
  brand: 'Razer',
  category: 'Mice',
  price: 18000,
  originalPrice: 21000,
  discountPercent: 14,
  stock: 20,
  image:
  'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.7,
  reviewCount: 334,
  shortDescription:
  'Focus Pro 30K sensor, 63g ultralight, HyperSpeed wireless',
  isFeatured: false,
  isTrending: false,
  specs: {
    Sensor: 'Focus Pro 30K',
    DPI: '30,000',
    Weight: '63g',
    Battery: '90hrs'
  }
},
{
  id: '13',
  name: 'HyperX Cloud II Wireless',
  slug: 'hyperx-cloud-ii-wireless',
  brand: 'HyperX',
  category: 'Gaming Accessories',
  price: 12000,
  originalPrice: 15000,
  discountPercent: 20,
  stock: 35,
  image:
  'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.5,
  reviewCount: 567,
  shortDescription:
  '7.1 surround sound, 53mm drivers, 30hr battery, memory foam',
  isFeatured: false,
  isTrending: true,
  specs: {
    Drivers: '53mm',
    Surround: '7.1 Virtual',
    Battery: '30hrs',
    Connection: '2.4GHz Wireless'
  }
},
{
  id: '14',
  name: 'WD Black SN850X 2TB',
  slug: 'wd-black-sn850x-2tb',
  brand: 'WD',
  category: 'SSDs',
  price: 24000,
  stock: 22,
  image:
  'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.8,
  reviewCount: 198,
  shortDescription: '7,300 MB/s read, PCIe Gen4, Game Mode 2.0',
  isFeatured: false,
  isTrending: false,
  specs: {
    Capacity: '2TB',
    Read: '7,300 MB/s',
    Write: '6,600 MB/s',
    Interface: 'PCIe Gen4'
  }
},
{
  id: '15',
  name: 'Keychron K2 V2 Wireless',
  slug: 'keychron-k2-v2',
  brand: 'Keychron',
  category: 'Keyboards',
  price: 9500,
  stock: 40,
  image:
  'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.6,
  reviewCount: 223,
  shortDescription: '75% layout, Gateron Brown, Bluetooth 5.1, hot-swappable',
  isFeatured: false,
  isTrending: false,
  specs: {
    Layout: '75%',
    Switches: 'Gateron Brown',
    Connection: 'BT 5.1 + USB-C'
  }
},
{
  id: '16',
  name: 'Samsung Odyssey G7 32" 4K',
  slug: 'samsung-odyssey-g7-32',
  brand: 'Samsung',
  category: 'LCDs',
  price: 95000,
  originalPrice: 110000,
  discountPercent: 14,
  stock: 4,
  image:
  'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.7,
  reviewCount: 78,
  shortDescription: '32" 4K UHD, 144Hz, 1ms, Quantum Dot, 1000R curve',
  isFeatured: true,
  isTrending: false,
  specs: {
    Resolution: '3840x2160',
    Panel: 'VA',
    'Refresh Rate': '144Hz',
    Curve: '1000R'
  }
},
{
  id: '17',
  name: 'Intel Core i9-14900K',
  slug: 'intel-core-i9-14900k',
  brand: 'Intel',
  category: 'CPUs',
  price: 82000,
  stock: 6,
  image:
  'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.7,
  reviewCount: 134,
  shortDescription: '24 cores, 32 threads, up to 6.0 GHz, unlocked',
  isFeatured: false,
  isTrending: false,
  specs: {
    Cores: '24',
    Threads: '32',
    'Boost Clock': '6.0 GHz',
    TDP: '253W'
  }
},
{
  id: '18',
  name: 'Corsair MM700 RGB Mousepad',
  slug: 'corsair-mm700-rgb',
  brand: 'Corsair',
  category: 'Gaming Accessories',
  price: 5500,
  stock: 50,
  image:
  'https://images.unsplash.com/photo-1616588589676-62b3d4ff6e04?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.4,
  reviewCount: 89,
  shortDescription: 'Extended XL, 360° RGB lighting, micro-weave surface',
  isFeatured: false,
  isTrending: false,
  specs: {
    Size: '930x400x4mm',
    Surface: 'Micro-weave cloth',
    Lighting: '360° RGB'
  }
},
{
  id: '19',
  name: 'RX 7900 XTX',
  slug: 'amd-rx-7900-xtx',
  brand: 'AMD',
  category: 'Graphics Cards',
  price: 195000,
  originalPrice: 220000,
  discountPercent: 11,
  stock: 3,
  image:
  'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.8,
  reviewCount: 145,
  shortDescription: '24GB GDDR6, RDNA 3, 96 Compute Units, 4K gaming beast',
  isFeatured: true,
  isTrending: false,
  specs: {
    VRAM: '24GB GDDR6',
    Architecture: 'RDNA 3',
    'Compute Units': '96',
    TDP: '355W'
  }
},
{
  id: '20',
  name: 'MSI MAG X670E Tomahawk',
  slug: 'msi-mag-x670e-tomahawk',
  brand: 'MSI',
  category: 'Motherboards',
  price: 52000,
  originalPrice: 58000,
  discountPercent: 10,
  stock: 9,
  image:
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
  images: [],
  averageRating: 4.5,
  reviewCount: 43,
  shortDescription: 'AM5, DDR5, PCIe 5.0 x16, USB4, 2.5G LAN, WiFi 6E',
  isFeatured: false,
  isTrending: false,
  specs: {
    Socket: 'AM5',
    Chipset: 'X670E',
    RAM: 'DDR5-7200+',
    USB: 'USB4 Type-C'
  }
}];


export function getFeaturedProducts() {
  return products.filter((p) => p.isFeatured).slice(0, 8);
}

export function getTrendingProducts() {
  return products.filter((p) => p.isTrending).slice(0, 8);
}

export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString()}`;
}