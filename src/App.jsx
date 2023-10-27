import './App.css'
import BannerSlider from './components/BannerSlider';
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import ProductSlider from './components/ProductSlider';

function App() {

  return (
    <div className="App">
      <Header/>
      <NavMenu/>
      <div className='secao'>
        <BannerSlider slides={['/img/banner/b1.jpg',
                              '/img/banner/b2.jpg',
                              '/img/banner/b4.jpg',
                              '/img/banner/b7.jpg']}/>
        <ProductSlider slides={['/img/banner/b1.jpg',
                              '/img/banner/b2.jpg',
                              '/img/banner/b4.jpg',
                              '/img/banner/b7.jpg',
                              '/img/banner/b1.jpg',
                              '/img/banner/b2.jpg',
                              '/img/banner/b4.jpg',
                              '/img/banner/b7.jpg']}/>
      </div>
    </div>
  )
}

export default App;
