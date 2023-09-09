import React from 'react'
import AppContext from '../context'

const Info = ({img, title, subTitle}) => {
  const {setCartOpened } = React.useContext(AppContext)

	return (
		<div className="cartEmpty">
			<img src={img} alt="box" />
			<h2>{title}</h2>
			<p>{subTitle}</p>
			<button onClick={() => setCartOpened(false)} className="greenBtn greenBtnLeftImg">
				<img src="img/btn/btnImgLeft.svg" alt="btnImgLeft" />
				Вернуться назад
			</button>
		</div>
	)
}

export default Info
