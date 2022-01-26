import React from 'react'
import './Home.css'
import Product from './Product';
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="home">

        
 
            <Carousel className='home__image'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://zippyimage.com/images/2022/01/10/53985dd7ba84a9659bc8c9ababc52b7a.png"
      alt="First slide"
    />
    
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://zippyimage.com/images/2022/01/15/f27a019e42caf1de54cf4460878cdfad.png"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://zippyimage.com/images/2022/01/15/22f19ce9ab8a831a3cfccbc31115f09f.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://zippyimage.com/images/2022/01/15/ef98f957fb5c44dbc7a35d75a2f66523.png"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            <div className="home__row">
                <Product 
                    id="12321351"
                    title=" The Smart Barbell - This is India's 1st Smart Barbell and easily replacable"
                    image="https://images-na.ssl-images-amazon.com/images/I/71JzIFabTlL._AC_UL160_SR160,160_.jpg"
                    price={4300.00}
                    rating={5}
                />

                
<Product
                    id="12321360"
                    title="Roller wheel- Strengthhttpsens and Tones ABS, Shoulders, Arms and Back"
                    image="https://images-na.ssl-images-amazon.com/images/I/61JvORtKs5L._AC_UL160_SR160,160_.jpg"
                    price={1550.00}
                    rating={4}

                />

<Product
                    id="12321361"
                    title="Skipping Ropes- The jumping rope is durable and of good quality, anti-slip foam handles"
                    image="https://github.com/ripperkumar/gym-ecommerce-site/blob/main/New%20folder/skr.jpeg?raw=true"
                    price={490.00}
                    rating={5}
                />

            </div>
            <div className="home__row">
                <Product
                    id="12321353"
                    title="The Flexnest Dumbbell- The latest innovation in Home Fitness, replacing multiple sets of weights.
                    1 Flexnest Dumbbell is equivalent to 15 different dumbbells.
                    The product has easy-to-use selection dials for adjusting weights."
                    image="http://s7d2.scene7.com/is/image/dkscdn/16BFXUSLCTTCHDMBBSLC/?$DSG_ProductCard$"
                    price={3790}
                    rating={4}
                />

                <Product
                    id="12321354"
                    title="Handgrip- ADJUSTABLE RESISTANCE : You Can Adjust Resistance Of Your Hand Gripper From 10-40 Kgs As Per Requirements. Also Its Easy And Fast To Do So."
                   
                    image="http://gloimg.gearbest.com/gb/2015/201511/grid-img/1451945384066646516.jpg"
                    price={599.00}
                    rating={5}
                />

                <Product
                    id="12321355"
                    title="Indoor Cycle- Bluetooth enabled smart bike with a 1-year complimentary membership to The Flexnest app with On-Demand Workouts"
                    image="https://m.dam-img.rfdcontent.com/offers/003/837/858/180x180_pad.jpg"
                    price={24990.00}
                    rating={4}
                />



            </div>
            <div className="home__row">

                <Product
                    id="12321356"
                    title="Leg Press- ✅【NO WORRY】 - For All National Bodyline Bench, The Measurement and Capacity Is Actual Result, Not as Others Mendacious Bench"
                    image="http://www.thehomegymcritic.com/wp-content/uploads/2013/11/leg-press.jpg"
                    price={36909.00}
                    rating={3}
                />

<Product
                    id="12321357"
                    title="punching bag with gloves best quality "
                    image="https://images-na.ssl-images-amazon.com/images/I/31iLnSeX75L._SL160_.jpg"
                    price={9800.00}
                    rating={4}
                />

<Product
                    id="12321358"
                    title="Pushup Bar- Powerful Upper Body: good "
                    image="https://images-na.ssl-images-amazon.com/images/I/71%2BcuioHAFL._AC_UL160_SR160,160_.jpg"
                    price={1700.00}
                    rating={5}
                />


<Product
                    id="12321359"
                    title="Resistance Band- UNBREAKABLE BANDS"
                    image="https://images-na.ssl-images-amazon.com/images/I/71M%2B6MQDH7L._AC_UL160_SR160,160_.jpg"
                    price={2500.00}
                    rating={4}
                    />

                






            </div>

        </div>
    )
}

export default Home
