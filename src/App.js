import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import AppContext from './context'
import Header from './components/Header'
import Drawer from './components/Drawer/Drawer'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import Orders from './components/pages/Orders'

// import arr from './bd'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [cartLike, setcartLike] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		// fetch('https://64e20681ab00373588189d07.mockapi.io/items')
		//   .then((res) => {
		//     return res.json()
		//   })
		//   .then((json) => {
		//     setItems(json)
		//   })

		async function fetchData() {
			try {
				const [cartResponse, likeResponse, itemsResponse] = await Promise.all([
					axios.get('https://64e20681ab00373588189d07.mockapi.io/cart'),
					axios.get('https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/like'),
					axios.get('https://64e20681ab00373588189d07.mockapi.io/items'),
				])

				setIsLoading(false)
				setCartItems(cartResponse.data)
				setcartLike(likeResponse.data)
				setItems(itemsResponse.data)
			} catch (error) {
				alert('Ошибка при запросе данных')
			}
		}

		fetchData()
	}, [])

	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find(
				(item) => Number(item.parentId) === Number(obj.id)
			)
			if (findItem) {
				setCartItems((prev) =>
					prev.filter((item) => Number(item.parentId) !== Number(obj.id))
				)
				await axios.delete(
					`https://64e20681ab00373588189d07.mockapi.io/cart/${findItem.id}`
				)
			} else {
				setCartItems((prev) => [...prev, obj])
				const { data } = await axios.post(
					'https://64e20681ab00373588189d07.mockapi.io/cart',
					obj
				)
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }))
			}
		} catch (error) {
			alert('Ошибка при добавлении в корзину')
			console.error(error)
		}
	}

	const onRemuveItem = (id) => {
		try {
			axios.delete(`https://64e20681ab00373588189d07.mockapi.io/cart/${id}`)
			setCartItems((prev) =>
				prev.filter((item) => Number(item.id) !== Number(id))
			)
		} catch (error) {
			alert('Ошибка при удалении из корзины')
			console.error(error)
		}
	}

	const onLikeToCart = async (obj) => {
		try {
			if (cartLike.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				await axios.delete(
					`https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/like/${obj.id}`
				)
				setcartLike((prev) =>
					prev.filter((item) => Number(item.id) !== Number(obj.id))
				)
			} else {
				const { data } = await axios.post(
					'https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/like',
					obj
				)
				setcartLike((prev) => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
			console.error(error)
		}
	}

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{
				items,
				cartItems,
				cartLike,
				isItemAdded,
				onLikeToCart,
				setCartOpened,
				setCartItems,
			}}
		>
			<div className="wrapper clear">
				<div>
					<Drawer
						items={cartItems}
						onClouseBasket={() => setCartOpened(false)}
						onRemuve={onRemuveItem}
						opened={cartOpened}
					/>
				</div>

				<Header onClickCard={() => setCartOpened(true)} />

				<Routes>
					<Route
						path=""
						element={
							<Home
								items={items}
								cartItems={cartItems}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onLikeToCart={onLikeToCart}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
						exact
					/>
          <Route path="/favorites" element={<Favorites />} exact />
          <Route path="/orders" element={<Orders />} exact />
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App

// #7 1 05
// bag with react Routes path (No routes matched location "/" )
