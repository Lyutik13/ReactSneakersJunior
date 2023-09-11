import React from 'react'
import axios from 'axios'

import Info from '../info'
import { useCard } from '../hooks/useCard'

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
// kostil with mockAPI

function Drawer({ onClouseBasket, items = [], onRemuve, opened }) {
  const {cartItems, setCartItems, totalPrice} = useCard()
  // myHooks

	const [isOrderComplited, setIsOrderComplited] = React.useState(false)
	const [orderId, setOrderId] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)

	const onClickOrder = async () => {
		try {
			setIsLoading(true)
			const { data } = await axios.post(
				'https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/orders',
				{ items: cartItems }
			)
			setOrderId(data.id)
			setIsOrderComplited(true)
			setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          'https://64e20681ab00373588189d07.mockapi.io/cart/' + item.id)
          await delay(1000)
      }
      // kostil with mockAPI
		} catch (error) {
			alert('Ошибка при создании заказа :(')
		}
		setIsLoading(false)
	}

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
			<div className={`${styles.drawer}`}>
				<h2>
					Корзина
					<img
						onClick={onClouseBasket}
						className="btnClouse"
						src="img/btn/btnClouseActive.svg"
						alt="btnClouse"
					/>
				</h2>

				{items.length > 0 ? (
					<div className="cartWrapper">
						<div className="cartItems">
							{items.map((obj) => (
								<div key={obj.id} className="cartItem">
									<img
										width={70}
										height={70}
										src={obj.imageUrl}
										alt="sneakers2"
									/>
									<div>
										<p>{obj.name}</p>
										<b>{obj.price} руб.</b>
									</div>
									<img
										onClick={() => onRemuve(obj.id)}
										className="btnClouse"
										src="img/btn/btnClouseActive.svg"
										alt="btnClouse"
									/>
								</div>
							))}
						</div>
						<div className="cartFooterBlock">
							<ul className="cartFooter">
								<li>
									<span>Итого:</span>
									<div></div>
									<b>{totalPrice} руб. </b>
								</li>
								<li>
									<span>Налог 5%:</span>
									<div></div>
									<b>{(totalPrice * 0.05).toFixed(2)} руб. </b>
								</li>
							</ul>
							<button
								disabled={isLoading}
								onClick={onClickOrder}
								className="greenBtn"
							>
								Оформить заказ
								<img src="img/btn/btnImg.svg" alt="basket" />
							</button>
						</div>
					</div>
				) : (
					<Info
						img={isOrderComplited ? 'img/compliteOder.jpg' : 'img/box.jpg'}
						title={isOrderComplited ? 'Заказ оформлен!' : 'Корзина пустая'}
						subTitle={
							isOrderComplited
								? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
						}
					/>
				)}
			</div>
		</div>
	)
}

export default Drawer
