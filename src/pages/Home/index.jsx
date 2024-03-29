import Landing from './../../components/Landing'
import APropos from '../../components/APropos'
import Projets from '../../components/Projets'
import Cv from '../../components/CV'
import Contact from '../../components/Contact'

function Home() {
  return (
    <div className="App">
      <Landing />
      <APropos />
      <Projets />
      <Cv />
      <Contact />
    </div>
  )
}

export default Home
