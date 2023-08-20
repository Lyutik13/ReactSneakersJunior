import styles from './Card.module.scss'
import React from 'react'

function Card(props) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isLike, setIsLike] = React.useState(false)

	const onClickPlus = () => {
		setIsAdded(!isAdded)
	}

	const onClickLike = () => {
		setIsLike(!isLike)
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img
					onClick={onClickLike}
					src={isLike ? 'img/btn/heardLike.svg' : "img/btn/heardUnlok.svg"}
					alt="Unlok"
				/>
			</div>
			<img width={133} height={112} src={props.imageUrl} alt="sneakers1" />
			<h5>{props.name}</h5>
			<div className={styles.cardFooter}>
				<div className={styles.cardFooterPrise}>
					<span>Цена:</span>
					<b>{props.price} руб</b>
				</div>
				<img
					className={styles.plus}
					onClick={onClickPlus}
					src={isAdded ? 'img/btn/btnCheked.svg' : 'img/btn/btnPlus.svg'}
					alt="plus"
				/>
			</div>
		</div>
	)
}

export default Card
