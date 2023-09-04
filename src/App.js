import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'

// import arr from './bd'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [cartLike, setcartLike] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)

	React.useEffect(() => {
		// fetch('https://64e20681ab00373588189d07.mockapi.io/items')
		//   .then((res) => {
		//     return res.json()
		//   })
		//   .then((json) => {
		//     setItems(json)
		//   })

      async function fetcData() {
        const cartResponse = await axios.get('https://64e20681ab00373588189d07.mockapi.io/cart')
        const likeResponse = await axios.get('https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/like')
        const itemsResponse = await axios.get('https://64e20681ab00373588189d07.mockapi.io/items')

        setCartItems(cartResponse.data)
        setcartLike(likeResponse.data)
        setItems(itemsResponse.data)
      }

      fetcData()
	}, [])

	const onAddToCart = (obj) => {
		try {
      console.log(obj)
			if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://64e20681ab00373588189d07.mockapi.io/cart/${obj.id}`)
				setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
			} else {
				axios.post('https://64e20681ab00373588189d07.mockapi.io/cart', obj)
				setCartItems((prev) => [...prev, obj])
			}
		} catch (error) {}
	}

	const onRemuveItem = (id) => {
		axios.delete(`https://64e20681ab00373588189d07.mockapi.io/cart/${id}`)
		console.log(id)
		setCartItems((prev) => prev.filter((item) => item.id !== id))
	}

	const onLikeToCart = async (obj) => {
		try {
			if (cartLike.find((favObj) => favObj.id === obj.id)) {
				axios.delete(
					`https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/like/${obj.id}`
				)
				setcartLike((prev) => prev.filter((item) => item.id !== obj.id))
			} else {
				const { data } = await axios.post(
					'https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/like',
					obj
				)
				setcartLike((prev) => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
		}
	}

	return (
		<div className="wrapper clear">
			{/* {cartOpened ? <Drawer onClouseBasket={() => setCartOpened(false)} /> : null} */}
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClouseBasket={() => setCartOpened(false)}
					onRemuve={onRemuveItem}
				/>
			)}

			<Header onClickCard={() => setCartOpened(true)} />

			<Routes>
				{/* <Route path="/favorites" element={<div>This is Test</div>} exact /> */}
				<Route
					path="/"
					element={
						<Home
							items={items}
              cartItems={cartItems}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onLikeToCart={onLikeToCart}
							onAddToCart={onAddToCart}
						/>
					}
					exact
				/>
			</Routes>

			<Routes>
				<Route
					path="/favorites"
					element={<Favorites items={cartLike} onLikeToCart={onLikeToCart} />}
					exact
				/>
			</Routes>
		</div>
	)
}

export default App

// #6 1 08 skeleton
