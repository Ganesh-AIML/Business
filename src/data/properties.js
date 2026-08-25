// ─── Properties Data ──────────────────────────────────────────────────────────
import apartmentImg from '@/assets/Apartment.jpg'
import spaceImg from '@/assets/space.jpg'
import villaImg from '@/assets/villa.jpg'
import flat2bhkImg from '@/assets/flat-2bhk.jpg'
import officeSpaceImg from '@/assets/office-space.jpg'
import studio1bhkImg from '@/assets/studio-1bhk.jpg'

export const properties = [
  {
    id: 1,
    name: 'Luxury 3BHK Apartment',
    type: 'Flat',
    status: 'For Sale',
    location: 'Downtown South District',
    price: '₹1,05,00,000',
    priceUnit: 'total',
    govtApproved: false,
    beds: 3,
    baths: 3.5,
    sqft: 2400,
    image: apartmentImg
  },
  {
    id: 2,
    name: 'Premium Retail Space',
    type: 'Shop',
    status: 'For Lease',
    location: 'Financial District',
    price: '₹85,000/mo',
    priceUnit: 'monthly',
    govtApproved: true,
    floor: 'Ground',
    ceiling: '15ft',
    sqft: 1850,
    image: spaceImg,
  },
  {
    id: 3,
    name: 'Modern Architectural Villa',
    type: 'Villa',
    status: 'For Sale',
    location: 'West Hills Estate',
    price: '₹3,80,00,000',
    priceUnit: 'total',
    govtApproved: false,
    beds: 5,
    baths: 6,
    sqft: 5200,
    image: villaImg
  },
  {
    id: 4,
    name: 'Spacious 2BHK Flat',
    type: 'Flat',
    status: 'For Rent',
    location: 'Goregaon East',
    price: '₹45,000/mo',
    priceUnit: 'monthly',
    govtApproved: false,
    beds: 2,
    baths: 2,
    sqft: 1050,
    image: flat2bhkImg,
  },
  {
    id: 5,
    name: 'Corporate Office Space',
    type: 'Office',
    status: 'For Lease',
    location: 'NESCO IT Park, Goregaon',
    price: '₹1,20,000/mo',
    priceUnit: 'monthly',
    govtApproved: true,
    floor: '4th',
    ceiling: '10ft',
    sqft: 1500,
    image: officeSpaceImg,
  },
  {
    id: 6,
    name: 'Premium 1BHK Studio',
    type: 'Flat',
    status: 'For Sale',
    location: 'Malad East',
    price: '₹52,00,000',
    priceUnit: 'total',
    govtApproved: false,
    beds: 1,
    baths: 1,
    sqft: 650,
    image: studio1bhkImg,
  },
]
