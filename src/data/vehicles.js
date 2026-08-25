// ─── Vehicle Fleet Data ───────────────────────────────────────────────────────
import audiA6Img from '@/assets/audi-a6.jpg'
import innovaCrystaImg from '@/assets/innova-crysta.jpg'
import bmw5SeriesImg from '@/assets/bmw-5-series.jpg'
import mercedesGleImg from '@/assets/mercedes-gle.jpg'
import fortunerImg from '@/assets/toyota-fortuner.jpg'
import tucsonImg from '@/assets/hyundai-tucson.jpg'

export const vehicles = [
  {
    id: 1,
    name: 'Audi A6',
    category: 'Luxury Sedan',
    seating: 5,
    type: 'Daily/Lease',
    driverAvailable: true,
    image: audiA6Img
  },
  {
    id: 2,
    name: 'Toyota Innova Crysta',
    category: 'Executive MPV',
    seating: 7,
    type: 'Daily/Lease',
    driverAvailable: true,
    image: innovaCrystaImg,
  },
  {
    id: 3,
    name: 'BMW 5 Series',
    category: 'Luxury Sedan',
    seating: 5,
    type: 'Corporate Lease',
    driverAvailable: false,
    image: bmw5SeriesImg,
  },
  {
    id: 4,
    name: 'Mercedes GLE',
    category: 'Premium SUV',
    seating: 5,
    type: 'Daily/Lease',
    driverAvailable: true,
    image: mercedesGleImg,
  },
  {
    id: 5,
    name: 'Toyota Fortuner',
    category: 'Premium SUV',
    seating: 7,
    type: 'Daily/Lease',
    driverAvailable: true,
    image: fortunerImg,
  },
  {
    id: 6,
    name: 'Hyundai Tucson',
    category: 'Premium SUV',
    seating: 5,
    type: 'Personal Rental',
    driverAvailable: false,
    image: tucsonImg,
  },
]
