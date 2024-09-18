import img from '../assets/images/homepage/enjoyable-place-mobile@2x.jpg'
import secondImg from '../assets/images/homepage/locally-sourced-mobile@2x.jpg'

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
