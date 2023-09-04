import styles from './Card.module.scss'
import React from 'react'

function Card({id, name, price, imageUrl, onPlus, onFavorite, isFavorites = false}) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isLike, setIsLike] = React.useState(isFavorites)

	const onClickPlus = () => {
    onPlus({name, price, imageUrl})
		setIsAdded(!isAdded)
	}

	const onClickLike = () => {
    onFavorite({id, name, price, imageUrl})
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
			<img width={133} height={112} src={imageUrl} alt="sneakers1" />
			<h5>{name}</h5>
			<div className={styles.cardFooter}>
				<div className={styles.cardFooterPrise}>
					<span>Цена:</span>
					<b>{price} руб</b>
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
