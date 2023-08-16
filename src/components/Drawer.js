function Drawer() {
	return (
		<div style={{ display: 'none' }} className="overlay">
			<div className="drawer">
				<h2>
					Корзина
					<img
						className="btnClouse"
						src="img/btn/btnClouseActive.svg"
						alt="btnClouse"
					/>
				</h2>

				<div className="cartItems">
					<div className="cartItem">
						<img
							width={70}
							height={70}
							src="img/sneakers/sneakers1.jpg"
							alt="sneakers1"
						/>
						<div>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 999 руб.</b>
						</div>
						<img
							className="btnClouse"
							src="img/btn/btnClouseActive.svg"
							alt="btnClouse"
						/>
					</div>
					<div className="cartItem">
						<img
							width={70}
							height={70}
							src="img/sneakers/sneakers2.jpg"
							alt="sneakers2"
						/>
						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>8 499 руб.</b>
						</div>
						<img
							className="btnClouse"
							src="img/btn/btnClouseActive.svg"
							alt="btnClouse"
						/>
					</div>
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