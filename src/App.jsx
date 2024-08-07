import React from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from "./Quiz"
import './App.css'
import Home from "./Home"
import About from "./About"
import Leaderboard from "./Leaderboard";
import Contact from "./Contact"
import Layout from "./Layout"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="about" element={<About />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
