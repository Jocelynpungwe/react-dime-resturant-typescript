import img from '../assets/images/homepage/enjoyable-place-mobile@2x.jpg'
import secondImg from '../assets/images/homepage/locally-sourced-mobile@2x.jpg'

import serviceImgOne from '../assets/images/homepage/salmon-mobile@2x.jpg'
import serviceImgTwo from '../assets/images/homepage/beef-mobile@2x.jpg'
import serviceImgThree from '../assets/images/homepage/chocolate-mobile@2x.jpg'

export type SectionProps = {
  readonly id?: number
  imageSrc: string
  heading: string
  desc: string
  alt: string
}

export const aboutLink: SectionProps[] = [
  {
    id: 1,
    imageSrc: img,
    heading: 'Enjoyable place for all the family',
    desc: 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
    alt: 'road and relaxing',
  },
  {
    id: 2,
    imageSrc: secondImg,
    heading: 'The most locally sourced food',
    desc: 'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.',
    alt: 'chips and burger',
  },
]

export const serviceLink: SectionProps[] = [
  {
    id: 1,
    imageSrc: serviceImgOne,
    alt: 'Seared Salmon Fillet',
    heading: 'Seared Salmon Fillet',
    desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
  },
  {
    id: 2,
    imageSrc: serviceImgTwo,
    alt: 'Rosemary Filet Mignon',
    heading: 'Rosemary Filet Mignon',
    desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
  },
  {
    id: 3,
    imageSrc: serviceImgThree,
    alt: 'Summer Fruit Chocolate Mousse',
    heading: 'Summer Fruit Chocolate Mousse',
    desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
  },
]
