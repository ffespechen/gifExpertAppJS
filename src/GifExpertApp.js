import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GiftExpertApp = () => {

	const [categories, setCategories] = useState( ['Transformers'] );

	// const handleClick = () => {
	// 	const valor = 'Akira';
	// 	// setCategories( [...categories, valor] );
	// 	setCategories( (cats) => [...cats, valor]);
	// };

	return(
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories }/>
			<hr />

			<ol>
				{ categories.map( (category) =>
					<GifGrid 
					category = {category}
					key={category} />
					)}

			</ol>

		</Fragment>
		);

};

export default GiftExpertApp;