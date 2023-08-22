function Drawer({ onClouseBasket, items = [] }) {
	return (
		<div className="overlay">
			<div className="drawer">
				<h2>
					Корзина
					<img
						onClick={onClouseBasket}
						className="btnClouse"
						src="img/btn/btnClouseActive.svg"
						alt="btnClouse"
					/>
				</h2>

				<div className="cartItems">
					{items.map((obj) => (
						<div className="cartItem">
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
								className="btnClouse"
								src="img/btn/btnClouseActive.svg"
								alt="btnClouse"
							/>
						</div>
					))}
				</div>

				<ul className="cartFooter">
					<li>
						<span>Итого:</span>
						<div></div>
						<b>21 498 руб. </b>
					</li>
					<li>
						<span>Налог 5%:</span>
						<div></div>
						<b>1074 руб. </b>
					</li>
				</ul>
				<button className="greenBtn">
					Оформить заказ
					<img src="img/btn/btnImg.svg" alt="" />
				</button>
			</div>
		</div>
	)
}

export default Drawer
