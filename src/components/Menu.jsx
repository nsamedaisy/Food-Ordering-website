import React from 'react'
import MenuCard from './MenuCard'
import data from './data'
import { useCart } from 'react-use-cart';


function Menu() {
  return (
    <div>
      <div className='card-wrap'>
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
      </div>
    </div>
  )
}

export default Menu