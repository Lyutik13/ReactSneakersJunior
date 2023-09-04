import Card from '../Card/Card'

function Favorites({ items, onLikeToCart }) {
	return (
		<div className="content clear">
			<div className="search">
				<h1>Мои закладки</h1>
			</div>

			<div className="cardWrapper">
				{items.map((item, index) => (
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
