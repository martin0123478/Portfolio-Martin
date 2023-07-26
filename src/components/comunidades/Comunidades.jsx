import './comunidades.css'
import io from '../../assets/images/io.png'
import leads from '../../assets/images/leads.png'
import latam from '../../assets/images/latam.png'
import charla1 from '../../assets/images/charla1.jpeg'
const Comunidades = () => {
    return (
        <div className='comunidades container' id='comunidades'>
            <div>
                <p className='title-comunidades'>Comunidades</p>
                <p className='subtitle-comunidades'>Tengo más de 2 años en comunidades tecnológicas</p>
                <p className='subtitle-comunidades'>Durante 2021 a 2022 estuve siendo Líder Google Developer Student Club en mi Universidad</p>
                <p className='subtitle-comunidades'>Donde tuve la oportunidad de dar las siguientes conferencias:</p>
                <ol>
                    <li>
                        <a className='conferencia' href="https://www.facebook.com/gdsc.latam/videos/898278691189909" target="_blank" >Diseño para Developers</a>

                    </li>
                    <li><a className='conferencia' href="https://www.youtube.com/watch?v=_rEzEgEAV78" target="_blank" >Qué es el Síndrome del Impostor y cómo superarlo</a></li>
                    <li><a className='conferencia' href="https://www.youtube.com/watch?v=ZemwbWgjA0E" target="_blank" >Introducción a CSS</a></li>
                    <li><a className='conferencia'  >Mi camino en Comunidadades (Presencial)</a></li>
                    <li><a className='conferencia'  >Introducción al Desarrollo Frontend (Presencial)</a></li>
                </ol>
            </div>

            <div className='images-comunnity'>
                <img className='io' src={io} alt="" />
                <img className='io' src={leads} alt="" />
                <img className='io' src={latam} alt="" />
                <img className='io' src={charla1} alt="" />

            </div>

        </div>
    )
}

export default Comunidades
