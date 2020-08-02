import React, { Fragment } from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category } ) =>{

	// const [images, setImages] = useState([]);
	const { data, loading } = useFetchGifs( category );


	// Este hook previene que la función se re-renderice ante un nuevo evento
	// Se ejecuta una sola vez
	// El segundo parámetro es la lista (o arreglo) de dependencias de esta función
	// useEffect( () => {
	// 	getGifs( category )
	// 	.then( imgs => setImages( imgs ) );
	// }, []);




	return (
		<Fragment>
			<h3>{ category }</h3>

			{ loading && <p>Cargando...</p>}

			<div className="card-grid">
				{data.map( (img)  => 
					<GifGridItem 
					key={img.id}
					{ ...img } /> )}
			</div>
		</Fragment>
		);
}