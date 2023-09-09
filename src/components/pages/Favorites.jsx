import React from 'react'
import Card from '../Card/Card'
import AppContext from '../../context'

function Favorites() {
	const { cartLike,  onLikeToCart} = React.useContext(AppContext)

	return (
		<div className="content clear">
			<div className="search">
				<h1>Мои закладки</h1>
			</div>

			<div className="cardWrapper">
				{cartLike.map((item, index) => (
					<Card
						key={index}
						isFavorites={true}
						onFavorite={onLikeToCart}
						{...item}
						// onFavorite={(obj) => onLikeToCart(obj)}
						// onPlus={onAddToCart}
					/>
				))}
			</div>
		</div>
	)
}

export default Favorites
