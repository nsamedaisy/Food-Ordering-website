import React, { useState } from 'react';
import '../index.css'
import { useCart } from 'react-use-cart';


function MenuCard(props) {
	const { addItem } = useCart();

	return (
		<div className='card-container' >
			<img src={props.img} class='card-img-top img-fluid' />
			<div class='card-body'>
				<h5 class='card-title'>{props.title}</h5>
				<h5 class='card-title'>$ {props.price}</h5>
				<p class='card-text'>{props.desc}</p>
				<button className='tertiarry-btn' onClick={() => addItem(props)}>Add to cart</button>
			</div>
		</div>
	)
}

export default MenuCard