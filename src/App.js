import './App.css';
import { motion } from 'framer-motion';

function App() {
  const scrollLeft = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const item1 = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 2, delay: 1 } },
  };

  const item2 = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delay: 2 } },
  };

  const item3 = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delay: 3 } },
  };

  const item4 = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delay: 4 } },
  };

  const description = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delay: 5 } },
  };

  return (
    <div className='App'>
      {/* SECTION 1 - Header */}
      <section className='secondary'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h1>Culture</h1>
          <br />
          <p>There are many beautiful cultures all over the world!</p>
        </motion.div>
      </section>
      {/* SECTION 2 - Description */}
      <section class='primary'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h2>Celebrations</h2>
          <br />
          <p>
            There are so many cool cultures across the globe and so many awesome
            celebrations that not everyone knows about.
          </p>
        </motion.div>
      </section>
      {/* SECTION 3 - Favorites */}
      <section className='secondary'>
        <h2>Here are some of my favorites...</h2>
      </section>
      {/* SECTION 3 - Dia de Los Muertos */}
      <section className='primary'>
        <motion.div
          variants={scrollLeft}
          initial='hidden'
          whileInView='show'
          className='img-container'
        >
          <motion.div variants={item1} className='logo'>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/dia_de_los_muertos/air-kiss.jpg'
              }
              alt='Woman with face paint on a orange background'
              className='img1-4'
            />
            <h3>Dia</h3>
          </motion.div>
          <motion.div variants={item2} className='logo'>
            <img
              src={
                process.env.PUBLIC_URL + '/images/dia_de_los_muertos/skull.jpg'
              }
              alt='Man with skull mask'
              className='img1-4'
            />
            <h3>de</h3>
          </motion.div>
          <motion.div variants={item3} className='logo'>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/dia_de_los_muertos/frightening-mexican-style-mask.jpg'
              }
              alt='Man in skull make-up with a hat'
              className='img1-4'
            />
            <h3>Los</h3>
          </motion.div>
          <motion.div variants={item4} className='logo'>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/dia_de_los_muertos/clown-makeup.jpg'
              }
              alt='Woman in devil make-up'
              className='img1-4'
            />
            <h3>Muertos</h3>
          </motion.div>
        </motion.div>
        <motion.p
          variants={description}
          initial='hidden'
          whileInView='show'
          className='description'
        >
          The Day of the Dead is a holiday traditionally celebrated on November
          1 and 2, though other days, such as October 31 or November 6, may be
          included depending on the locality. It is widely observed in Mexico,
          where it largely developed, and is also observed in other places,
          especially by people of Mexican heritage.
        </motion.p>
      </section>
    </div>
  );
}

export default App;
