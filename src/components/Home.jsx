import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <div className='home-container'>
        <div className='home-banner-container' >
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              Hundreds of flavors under one roof where every flavor tells a story.
              Healthy switcher chefs do all the prep work, like peeding, chopping
              & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button">
              Order Now
            </button>
          </div>
          {/* <div className="home-image-section">
            <img src={} alt="" />
        </div> */}
        </div>
      </div>
      {/* <div className='card-wrap'>
        {data.productData.map((item, index) => {
          return (
            <div>
              <MenuCard
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                id={item.id}
                key={index}
              />
            </div>
          )
        })}
      </div> */}
    </div >

  )
}

export default Home