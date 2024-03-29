import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Header from '../Header'
import Footer from '../Footer'

function Routeur() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routeur
