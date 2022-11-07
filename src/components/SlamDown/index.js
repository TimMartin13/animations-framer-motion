import React from 'react';
import { motion } from 'framer-motion';
// import scrollFromLeftStyles from './ScrollFromLeft.module.css';

const cards = [
  {
    image: '/images/songkran/Songkran Water Festival 2017.jpg',
    alt: 'Water fight!',
    text: 'Songkran',
  },
  {
    image: '/images/songkran/Songkran_Water_Festival.jpg',
    alt: 'Elephant spraying water onto crowd',
    text: 'Water',
  },
  {
    image: '/images/songkran/songkran-water.jpg',
    alt: 'Woman shooting super-soaker',
    text: 'Festival',
  },
];

const SlamDown = () => {
  const popUp = {
    hidden: { opacity: 0, scale: 2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', bounce: 0.25, duration: 0.4 },
    },
  };

  const description = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delay: 4 } },
  };

  return (
    <section className='primary'>
      <motion.div
        variants={popUp}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='img-container'
      >
        {cards.map((card, index) => {
          return (
            <motion.div variants={item} className='card' key={index}>
              <img
                src={process.env.PUBLIC_URL + card.image}
                alt={card.alt}
                className='img1-3'
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
        viewport={{ once: true }}
        className='section__description'
      >
        Songkran is the Thai New Year's national holiday. Songkran is on 13
        April every year, but the holiday period extends from 14 to 15 April. In
        2018 the Thai cabinet extended the festival nationwide to five days,
        12–16 April, to enable citizens to travel home for the holiday.
      </motion.p>
    </section>
  );
};

export default SlamDown;
