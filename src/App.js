import React from 'react'
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

// import arr from './bd'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [cartOpened, setCartOpened] = React.useState(false)

	React.useEffect(() => {
		fetch('https://64e20681ab00373588189d07.mockapi.io/items')
			.then((res) => {
				return res.json()
			})
			.then((json) => {
				setItems(json)
			})
	}, [])

	const onAddToCart = (obj) => {
		setCartItems(prev => [...prev, obj])
	}

	console.log(cartItems)

	return (
		<div className="wrapper clear">
			{/* {cartOpened ? <Drawer onClouseBasket={() => setCartOpened(false)} /> : null} */}
			{cartOpened && (
				<Drawer items={cartItems} onClouseBasket={() => setCartOpened(false)} />
			)}
			<Header onClickCard={() => setCartOpened(true)} />

			<div className="content clear">
				<div className="search">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img width={15} height={15} src="img/search.svg" alt="search" />
						<input placeholder="Поиск..." />
					</div>
				</div>
				<div className="cardWrapper">
					{items.map((item) => (
						<Card
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
							// onFavorite={() => console.log('love')}
							onPlus={onAddToCart}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App

//  1 19
