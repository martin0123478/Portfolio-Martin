import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='container'>
            <div>
                <p className='name'>Martín Aguilar</p>
            </div>
            <div className='enlaces_container'>
                <Link className='link' to='#projectos'>Proyectos</Link>
                <Link className='link' to='#contacto'>Contacto</Link>
                <Link className='link' to='#experiencia'>Experiencia</Link>
            </div>

        </div>
    )
}

export default Header
