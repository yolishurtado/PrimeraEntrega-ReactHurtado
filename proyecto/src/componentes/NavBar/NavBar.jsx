import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'

 function NavBar() {
    return (
        <header className='Barra' >
            <h1>Delfi Bazterrica Pasteleria</h1>

            <nav>
                <ul>
                    <li>Tienda</li>
                    <li>Contacto</li>
                    <li>Sobre Mi</li>
                </ul>
            </nav>

         <CartWidget/>
     
        </header>


    )
}


 export default NavBar
