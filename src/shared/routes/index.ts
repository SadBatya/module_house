import { PHONE, EMAIL, TELEGRAM } from '../consts/consts';

export const INTERNAL_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CATALOG: '/catalog',
  FEEDBACK: '/feedback',
} as const;

export const EXTERNAL_ROUTES = {
  TELEGRAM: `https://t.me/${TELEGRAM}`,
  WHATSAPP: `https://wa.me/${PHONE}`,
  EMAIL: `https://wa.me/${EMAIL}`,
  PHONE: `tel:${PHONE}`,
} as const;
