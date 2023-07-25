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
                <a className='link-project' href="https://vet-mern-frontend.vercel.app/" target="_blank">Ver proyecto</a>
                <a className='link-repo' href="https://github.com/martin0123478/Vet_MERN_Frontend" target="_blank">Ver código</a>
            </div>


        </div>
    )
}

export default Project2
