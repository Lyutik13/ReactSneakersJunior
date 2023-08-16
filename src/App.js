import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
	return (
		<div className="wrapper clear">
			<Drawer />
			<Header />

			<div className="content clear">
				<div className="search">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img width={15} height={15} src="img/search.svg" alt="search" />
						<input placeholder="Поиск..." />
					</div>
				</div>
				<div className="cardWrapper">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default App
