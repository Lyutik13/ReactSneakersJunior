import React from 'react'
import AppContext from '../context'

import styles from './Drawer/Drawer.module.scss'

const Info = ({img, title, subTitle}) => {
  const {setCartOpened } = React.useContext(AppContext)

	return (
		<div className="cartEmpty">
			<img src={img} alt="box" />
			<div className={`${styles.drawer__title}`}>{title}</div>
			<p>{subTitle}</p>
			<button onClick={() => setCartOpened(false)} className="greenBtn greenBtnLeftImg">
				<img src="img/btn/btnImgLeft.svg" alt="btnImgLeft" />
				Вернуться назад
			</button>
		</div>
	)
}

export default Info
