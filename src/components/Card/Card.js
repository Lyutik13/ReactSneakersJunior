import React from 'react'
import ContentLoader from 'react-content-loader'

import AppContext from '../../context'

import btnPlusImg from '../../resources/img/btn/btnPlus.svg'
import btnChekedImg from '../../resources/img/btn/btnCheked.svg'
import heardLikeImg from '../../resources/img/btn/heardLike.svg'
import heardUnlokImg from '../../resources/img/btn/heardUnlok.svg'
import cardImg1 from '../../resources/img/sneakers/sneakers1.jpg'
import cardImg2 from '../../resources/img/sneakers/sneakers2.jpg'
import cardImg3 from '../../resources/img/sneakers/sneakers3.jpg'
import cardImg4 from '../../resources/img/sneakers/sneakers4.jpg'
import cardImg5 from '../../resources/img/sneakers/sneakers5.jpg'
import cardImg6 from '../../resources/img/sneakers/sneakers6.jpg'
import cardImg7 from '../../resources/img/sneakers/sneakers7.jpg'
import cardImg8 from '../../resources/img/sneakers/sneakers8.jpg'
import cardImg9 from '../../resources/img/sneakers/sneakers9.jpg'
import cardImg10 from '../../resources/img/sneakers/sneakers10.jpg'
import notFound from '../../resources/img/sneakers/not_found-min.jpg'
import styles from './Card.module.scss'

/* function imgVisual(url) {
	if (url === 'img/sneakers/sneakers1.jpg') {
		return cardImg1
	} else if (url === 'img/sneakers/sneakers2.jpg') {
		return cardImg2
	}
} */

export function imgVisual(url) {
	switch (url) {
		case 'img/sneakers/sneakers1.jpg':
			return cardImg1
		case 'img/sneakers/sneakers2.jpg':
			return cardImg2
		case 'img/sneakers/sneakers3.jpg':
			return cardImg3
		case 'img/sneakers/sneakers4.jpg':
			return cardImg4
		case 'img/sneakers/sneakers5.jpg':
			return cardImg5
		case 'img/sneakers/sneakers6.jpg':
			return cardImg6
		case 'img/sneakers/sneakers7.jpg':
			return cardImg7
		case 'img/sneakers/sneakers8.jpg':
			return cardImg8
		case 'img/sneakers/sneakers9.jpg':
			return cardImg9
		case 'img/sneakers/sneakers10.jpg':
			return cardImg10
		default:
			return notFound
	}
}

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
						{onFavorite && (
							<img
								onClick={onClickLike}
								src={isLike ? heardLikeImg : heardUnlokImg}
								alt="Unlok"
							/>
						)}
					</div>
					<div className={styles.wrapperImg}>
						<img
							width={133}
							height={112}
							src={imgVisual(imageUrl)}
							alt="sneakers"
						/>
					</div>
					<h5>{name}</h5>
					<div className={styles.cardFooter}>
						<div className={styles.cardFooterPrise}>
							<span>Цена:</span>
							<b>{price} руб</b>
						</div>
						{onPlus && (
							<img
								className={styles.plus}
								onClick={onClickPlus}
								src={isItemAdded(id) ? btnChekedImg : btnPlusImg}
								alt="plus"
							/>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default Card
