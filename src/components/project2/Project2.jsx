import vet from '../../assets/images/vet-mern.png'
import './project2.css'
const Project2 = () => {
    return (
        <div className='container-project-1'>
            <div className='project-1'>
                <div>
                    <img className='img-project' src={vet} alt="" />
                </div>

            </div>
            <div className='info'>
                <p className='title-project'>Vet-MERN: Administrador citas de veterinario</p>
                <p className='description-project'>Controla el registro de tus citas de veterinario</p>
                <p className='description-project'>Puedes controlar a tus pacientes crenado una cuenta.</p>
                <p className='description-project'>Tecnologias:<br /></p>
                <p className='description-project'>Mongo DB, Express, React y Node JS </p>
                <a className='link-repo' href="https://github.com/martin0123478/Vet_MERN_Frontend" target="_blank">Ver código</a>
            </div>


        </div>
    )
}

export default Project2
