import React from 'react'
import ContentLoader from 'react-content-loader'

import AppContext from '../../context'

import styles from './Card.module.scss'

function Card({
	id,
	name,
	price,
	imageUrl,
	onPlus,
	onFavorite,
	isFavorites = false,
	loaging = false,
}) {
  const { isItemAdded } = React.useContext(AppContext)
	const [isLike, setIsLike] = React.useState(isFavorites)

	const onClickPlus = () => {
		onPlus({ id, parentId: id, name, price, imageUrl })
	}

	const onClickLike = () => {
		onFavorite({ id, parentId: id, name, price, imageUrl })
		setIsLike(!isLike)
	}

	return (
		<div className={styles.card}>
			{loaging ? (
				<ContentLoader
					speed={2}
					width={150}
					height={206}
					viewBox="0 0 150 185"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
					// {...props}
				>
					<rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
					<rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
					<rect x="0" y="125" rx="5" ry="5" width="93" height="15" />
					<rect x="0" y="158" rx="8" ry="8" width="80" height="24" />
					<rect x="115" y="153" rx="10" ry="10" width="32" height="32" />
				</ContentLoader>
			) : (
				<>
					<div className={styles.favorite}>
						{onFavorite && <img
							onClick={onClickLike}
							src={isLike ? 'img/btn/heardLike.svg' : 'img/btn/heardUnlok.svg'}
							alt="Unlok"
						/>}
					</div>
					<img width={133} height={112} src={imageUrl} alt="sneakers1" />
					<h5>{name}</h5>
					<div className={styles.cardFooter}>
						<div className={styles.cardFooterPrise}>
							<span>Цена:</span>
							<b>{price} руб</b>
						</div>
						{onPlus && <img
							className={styles.plus}
							onClick={onClickPlus}
							src={isItemAdded(id) ? 'img/btn/btnCheked.svg' : 'img/btn/btnPlus.svg'}
							alt="plus"
						/>}
					</div>
				</>
			)}
		</div>
	)
}

export default Card
