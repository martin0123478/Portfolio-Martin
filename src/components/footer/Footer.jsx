
import git from '../../assets/icons/github.png'
import insta from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <p className='footer-description'>© Copyright 2023 | Martín Aguilar</p>
            </div>
            <div className='footer-logos'>
                <a href="https://github.com/martin0123478" target="_blank"><img className='logo' src={git} alt="git" /></a>
                <a href="https://www.instagram.com/martinpaker7/" target="_blank"><img className='logo' src={insta} alt="insta" /></a>

                <a href="https://twitter.com/martin_parker7" target='_blank'><img className='logo' src={twitter} alt="twitter" /></a>


            </div>
        </div>
    )
}

export default Footer
