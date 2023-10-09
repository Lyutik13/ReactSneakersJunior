import React from 'react'
import { Link } from 'react-router-dom'

import { useCard } from './hooks/useCard'

import likeImg from '../resources/img/like.svg'
import logoImg from '../resources/img/logo.svg'
import userImg from '../resources/img/user.svg'
import bayImg from '../resources/img/bay.svg'

function Header(props) {
	const { totalPrice } = useCard()

	return (
		<header className="header">
			<Link to="/">
				<div className="headerLeft">
					<img width={40} height={40} src={logoImg} alt="logo" />
					<div className="headerInfo">
						<h3>REACT SNEAKERS</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className="headerRight">
				<li onClick={props.onClickCard} className="basket">
					<img width={18} height={18} src={bayImg} alt="bay" />
					<span>{totalPrice} руб.</span>
				</li>
				<li className="like">
					<Link to="/favorites">
						<img width={18} height={18} src={likeImg} alt="like" />
					</Link>
				</li>
				<li className="orders">
					<Link to="/orders">
						<img width={18} height={18} src={userImg} alt="user" />
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
