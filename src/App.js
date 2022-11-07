import './App.css';
import { motion } from 'framer-motion';
import ScrollFromLeft from './components/ScrollFromLeft';
import PopUp from './components/PopUp';
import SlamDown from './components/SlamDown';

function App() {
  return (
    <div className='App'>
      {/* SECTION 1 - Header */}
      <section className='secondary'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h1>Animations</h1>
          <br />
          <p>Practicing animations using Framer Motion!</p>
        </motion.div>
      </section>
      {/* SECTION 2 - Description */}
      <section className='primary'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h2>Celebrations</h2>
          <br />
          <p>
            Using celebrations as a topic because they are very colorful and
            fun.
          </p>
        </motion.div>
      </section>
      {/* SECTION 3 - Favorites */}
      <section className='secondary'>
        <h2>Here are some of my favorite celebrations...</h2>
      </section>
      <ScrollFromLeft theme='primary' />
      <PopUp />
      <SlamDown />
    </div>
  );
}

export default App;
