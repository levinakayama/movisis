import "./styles.css"
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function Header(){
    return (    
        <>
        <header className='menu'>
            <Link to ={'/'}><p>inicio</p></Link>
            <Link to={'/Carrinho'}>
                <BsCart2 className='carrinho'/>
            </Link>
        </header>
        </>
    )
}
export default Header;