import './hero.css'
import logo from '../../assets/images/Martín.jpg'
const Hero = () => {
    return (
        <div className='container-hero'>

            <div className='foto'>
                <img src={logo} alt="foto" />
            </div>
            <div className='info'>
                <p className='hero-text'>Hola ✋, Soy Martín Aguilar un Frontend, centrado en la creación de productos digitales durante los últimos 2 años.</p>
                <p className='hero-description'>Me encanta centrarme en los detalles de las experiencias de nuevos productos con una  implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.</p>
                <button className='cv'>Descargar currículum</button>
            </div>
        </div>

    )
}

export default Hero
