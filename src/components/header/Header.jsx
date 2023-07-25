import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='container'>
            <div>
                <p className='name'>Martín Aguilar</p>
            </div>
            <div className='enlaces_container'>

                <a className='link' href='#projectos'>Proyectos</a>
                <a className='link' href='#habilidades'>Habilidades</a>
                <a className='link' href='#contacto'>Contacto</a>
                <Link className='link'>Comunidadades</Link>

            </div>

        </div>
    )
}

export default Header
