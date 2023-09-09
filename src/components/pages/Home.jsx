import React from 'react'

import Card from '../Card/Card'

function Home({
	items,
	searchValue,
	setSearchValue,
	onLikeToCart,
	onAddToCart,
	isLoading,
}) {

	const renderItems = () => {
		const filtredItems =
			items &&
			items.filter((item) =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			)

		return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
			<Card
				key={index}
				onFavorite={(obj) => onLikeToCart(obj)}
				onPlus={onAddToCart}
				loaging={isLoading}
				{...item}
			/>
		))
	}

	return (
		<div className="content clear">
			<div className="search">
				<h1>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</h1>
				<div className="search-block">
					<img
						className="imgSearch"
						width={15}
						height={15}
						src="img/search.svg"
						alt="search"
					/>
					<input
						onChange={(event) => setSearchValue(event.target.value)}
						value={searchValue}
						placeholder="Поиск..."
					/>
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className="btnClouseSearch"
							src="img/btn/btnClouseActive.svg"
							alt="Clear"
						/>
					)}
				</div>
			</div>
			<div className="cardWrapper">{renderItems()}</div>
		</div>
	)
}

export default Home
