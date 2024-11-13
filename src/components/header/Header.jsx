import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className='container'>
            <div>
                <p className='name'>Martín Aguilar</p>
            </div>
            <div className='enlaces_container'>

                <a className='link' href='#projectos'>Proyectos</a>
                <a className='link' href='#habilidades'>Habilidades</a>
                <a href='#comunidades' className='link'>Comunidadades</a>
                <a className='link' href='#contacto'>Contacto</a>


            </div>

        </header>
    )
}

export default Header
