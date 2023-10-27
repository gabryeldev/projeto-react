import './App.css'
import BannerSlider from './components/BannerSlider';
import Header from './components/Header'
import NavMenu from './components/NavMenu'

function App() {

  return (
    <div className="App">
      <Header/>
      <NavMenu/>
      <BannerSlider slides={['/img/banner/b1.jpg', '/img/banner/b2.jpg']}/>
    </div>
  )
}

export default App;
