import './CartWidget.css'


const CartWidget = () => {

    const imgCarro ='https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart-thumbnail.png'
  return(
    <div>
        <img className='imgCarro' src= {imgCarro} alt='Carro de Compras'  />
        <strong>10</strong>
    </div>
  )  
}

export default CartWidget