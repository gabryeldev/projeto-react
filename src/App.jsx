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
      <BannerSlider slides={['/img/banner/b1.jpg',
                            '/img/banner/b2.jpg',
                            '/img/banner/b4.jpg',
                            '/img/banner/b7.jpg']}/>
      <div className='produtos-destaque'>
        <h3>Produtos em Destaque</h3>
        <ProductSlider products={['/img/products/f1.jpg',
                                '/img/products/f2.jpg',
                                '/img/products/f3.jpg',
                                '/img/products/f4.jpg',
                                '/img/products/f5.jpg',
                                '/img/products/1.jpg',
                                '/img/products/2.jpg',
                                '/img/products/3.jpg',
                                '/img/products/4.jpg',
                                '/img/products/5.jpg']}/>
      </div>
      <BannerSlider slides={['/img/banner/b7.jpg',
                            '/img/banner/b4.jpg',
                            '/img/banner/b2.jpg',
                            '/img/banner/b1.jpg']}/>
    </div>
  )
}

export default App;
