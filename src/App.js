import React from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

// import arr from './bd'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    // fetch('https://64e20681ab00373588189d07.mockapi.io/items')
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((json) => {
    //     setItems(json)
    //   })

      axios.get('https://64e20681ab00373588189d07.mockapi.io/items').then(res => {
        setItems(res.data)
      })
      axios.get('https://64e20681ab00373588189d07.mockapi.io/cart').then(res => {
        setCartItems(res.data)
      })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64e20681ab00373588189d07.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onRemuveItem = (id) => {
    axios.delete(`https://64e20681ab00373588189d07.mockapi.io/cart/${id}`)
    console.log(id)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer onClouseBasket={() => setCartOpened(false)} /> : null} */}
      {cartOpened && (
        <Drawer items={cartItems} onClouseBasket={() => setCartOpened(false)} onRemuve ={onRemuveItem}/>
      )}
      <Header onClickCard={() => setCartOpened(true)} />

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
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              // onFavorite={() => console.log('love')}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

// #5 1 14 30
