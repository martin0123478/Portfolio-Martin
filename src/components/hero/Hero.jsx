import './hero.css'
import logo from '../../assets/images/Martín.jpg'
import { saveAs } from 'file-saver'



const Hero = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CV_Jorge_Martin_Aguilar_Hernandez.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_Jorge_Martin_Aguilar_Hernandez.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='container-hero'>

            <div className='foto'>
                <img className='foto-martin' src={logo} alt="foto" />
            </div>
            <div className='info'>
                <p className='hero-text'>Hola ✋, Soy Martín Aguilar un Frontend, centrado en la creación de productos digitales durante los últimos 2 años.</p>
                <p className='hero-description'>Me encanta centrarme en los detalles de las experiencias de nuevos productos con una  implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.</p>
                <button onClick={onButtonClick} className='cv'>Descargar currículum</button>
            </div>
        </div>

    )
}

export default Hero
