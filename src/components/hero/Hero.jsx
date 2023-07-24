import './hero.css'
import logo from '../../assets/images/Martín.jpg'
const Hero = () => {
    return (
        <div className='container'>
            <div className='info'>

            </div>
            <div className='foto'>
                <img src={logo} alt="foto" />
            </div>
        </div>

    )
}

export default Hero
