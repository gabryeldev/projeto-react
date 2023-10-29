import './App.css'
import BannerSlider from './components/BannerSlider';
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import ProductSlider from './components/ProductSlider';
import CategoriasDestaque from './components/CategoriasDestaque';
import PromoSlider from './components/PromoSlider';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavMenu/>
      <BannerSlider slides={['/img/banner/b1.jpg',
                            '/img/banner/b2.jpg',
                            '/img/banner/b4.jpg',
                            '/img/banner/b7.jpg']}/>
      <CategoriasDestaque urls={["https://images.unsplash.com/photo-1540240878317-09ccd319e97c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d69099f7142a447593ec6f7c90f7ece&auto=format&fit=crop&w=668&q=80",
                                "https://images.unsplash.com/photo-1542731764-7d0f5660b7e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=371d0fb80ccba8e7afe3619507cfdd74&auto=format&fit=crop&w=668&q=80",
                                "https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2675d4d1e03974db52a3424466d838f9&auto=format&fit=crop&w=668&q=80"]}/>
      <PromoSlider slides={['/img/banner/b7.jpg',
                            '/img/banner/b4.jpg',
                            '/img/banner/b2.jpg',
                            '/img/banner/b1.jpg']}/>
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
      
    </div>
    
  )
}

export default App;
