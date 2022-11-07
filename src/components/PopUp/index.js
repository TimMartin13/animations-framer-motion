import React from 'react';
import { motion } from 'framer-motion';
// import scrollFromLeftStyles from './ScrollFromLeft.module.css';

const cards = [
  {
    image: '/images/holi/pexels-shrey-chapra-2041707.jpg',
    alt: 'Colorful chalk',
    text: 'H',
  },
  {
    image: '/images/holi/pexels-ravi-roshan-7349121.jpg',
    alt: 'Man with sunglasses and chalk on face',
    text: 'O',
  },
  {
    image: '/images/holi/pexels-ómkãr-ñaídu-3928428.jpg',
    alt: 'Woman with chalk on her hands',
    text: 'L',
  },
  {
    image: '/images/holi/pexels-sunil-damor-13807977.jpg',
    alt: 'Man with chalk on face',
    text: 'I',
  },
];

const PopUp = () => {
  const popUp = {
    hidden: { opacity: 0, scale: 0 },
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
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 2 },
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
        Holi, also known as the Festival of Colours, the Festival of Spring, and
        the Festival of Love, is an ancient Hindu religious festival and one of
        the most popular festivals in Hinduism.
      </motion.p>
    </section>
  );
};

export default PopUp;
