import Card from "../Card/Card"

function Home({items, cartItems, searchValue, setSearchValue, onLikeToCart, onAddToCart,}) {
  return(
    <div className="content clear">
    <div className="search">
      <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
      <div className="search-block">
        <img className='imgSearch' width={15} height={15} src="img/search.svg" alt="search" />
        <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder="Поиск..." />
        {searchValue && <img onClick={() => setSearchValue('')} className="btnClouseSearch" src="img/btn/btnClouseActive.svg" alt="Clear" />}
      </div>
    </div>
    <div className="cardWrapper">
      {items
        .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onLikeToCart(obj)}
            onPlus={onAddToCart}
            added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
            {...item}
          />
        ))}
    </div>
  </div>
  )
}

export default Home