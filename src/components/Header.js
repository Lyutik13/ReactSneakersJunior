function Header() {
	return (
		<header className="header">
			<div className="headerLeft">
				<img width={40} height={40} src="img/logo.svg" alt="logo" />
				<div className="headerInfo">
					<h3>REACT SNEAKERS</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="headerRight">
				<li>
					<img width={18} height={18} src="img/bay.svg" alt="bay" />
					<span>1205 руб.</span>
				</li>
				<li>
					<img width={18} height={18} src="img/like.svg" alt="like" />
				</li>
				<li>
					<img width={18} height={18} src="img/user.svg" alt="user" />
				</li>
			</ul>
		</header>
	)
}

export default Header