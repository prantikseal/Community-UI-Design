// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import BannerImg from './components/BannerImg'

function App() {
return (
    <>
    <div className='position-absolute'>
      <NavBar/>
    </div>
    <div className='position-absolute banner'>
      <Banner/>
    </div>
    <div className="position-absolute image-banner">
      <BannerImg/>
    </div>
    </>
  )
}

export default App
