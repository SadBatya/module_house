import img1 from '@/page/page-about/ui/section-production/ui/assets/1.png';
import img2 from '@/page/page-about/ui/section-production/ui/assets/2.png';
import img3 from '@/page/page-about/ui/section-production/ui/assets/3.png';
import img4 from '@/page/page-about/ui/section-production/ui/assets/4.png';

export const cardData = [
  {
    title: 'Заготовка древесины',
    img: img1,
    text: 'wood harvesting process to make sure we get the best logs',
  },
  {
    title: 'Обработка древесины',
    img: img2,
    text: 'wood  processing process to keep our wood in the best shape ',
  },
  {
    title: 'Сушка материала',
    img: img3,
    text: 'getting dry wood process  to get it ready for using',
  },
  {
    title: 'Профилирование',
    img: img4,
    text: 'adjusting  wood process to get it prepared for customers',
  },
] as const;
