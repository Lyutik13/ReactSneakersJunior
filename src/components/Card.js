function Card() {
	return (
		<div className="card">
			<div className="favorite">
				<img src="img/btn/heardUnlok.svg" alt="Unlok" />
			</div>
			<img
				width={133}
				height={112}
				src="img/sneakers/sneakers1.jpg"
				alt="sneakers1"
			/>
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className="card-footer">
				<div className="card-footer__prise">
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className="button">
					<img width={12} height={12} src="img/plus.svg" alt="plus" />
				</button>
			</div>
		</div>
	)
}

export default Card