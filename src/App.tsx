
import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import { AnimatedHero } from './components/Hero'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
 
 const [isStart, setIsStart] = useState(false)

 const changeStart = () => {
  setIsStart(!isStart)
 }
  return (
    <>
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
         { isStart ? <AnimatedHero onFinish={changeStart} /> : <Intro onFinish={changeStart} />}
      </motion.div>
    </AnimatePresence>
  
    </>
  )
}

export default App
