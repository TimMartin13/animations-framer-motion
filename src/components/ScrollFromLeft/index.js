import React from 'react';
import { motion } from 'framer-motion';
// import scrollFromLeftStyles from './ScrollFromLeft.module.css';

const cards = [
  {
    image: '/images/dia_de_los_muertos/air-kiss.jpg',
    alt: 'Woman with face paint on a orange background',
    text: 'Dia',
  },
  {
    image: '/images/dia_de_los_muertos/skull.jpg',
    alt: 'Man with skull mask',
    text: 'de',
  },
  {
    image: '/images/dia_de_los_muertos/frightening-mexican-style-mask.jpg',
    alt: 'Man in skull make-up with a hat',
    text: 'Los',
  },
  {
    image: '/images/dia_de_los_muertos/clown-makeup.jpg',
    alt: 'Woman in devil make-up',
    text: 'Muertos',
  },
];

const ScrollFromLeft = () => {
  const scrollLeft = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 2, type: 'tween' } },
  };

  const description = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delay: 4 } },
  };

  return (
    <section className='primary'>
      <motion.div
        variants={scrollLeft}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true }}
        className='img-container'
      >
        {cards.map((card, index) => {
          return (
            <motion.div variants={item} className='card' key={index}>
              <img
                src={process.env.PUBLIC_URL + card.image}
                alt={card.alt}
                className='img1-4'
              />
              <h3 className='card__text'>{card.text}</h3>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.p
        variants={description}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true }}
        className='section__description'
      >
        The Day of the Dead is a holiday traditionally celebrated on November 1
        and 2, though other days, such as October 31 or November 6, may be
        included depending on the locality. It is widely observed in Mexico,
        where it largely developed, and is also observed in other places,
        especially by people of Mexican heritage.
      </motion.p>
    </section>
  );
};

export default ScrollFromLeft;
