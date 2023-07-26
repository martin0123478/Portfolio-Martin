import task from '../../assets/images/up-task.png'
import './project1.css'
const Project1 = () => {
    return (
        <div className='container-project-1' id='projectos'>
            <div className='project-1'>
                <div>
                    <img className='img-project' src={task} alt="" />
                </div>

            </div>
            <div>
                <p className='title-project'>Up-Task: Administrador de proyectos</p>
                <p className='description-project'>Administra tus proyectos desde una apliación intuitiva y eficiente.</p>
                <p className='description-project'>Up-Task es una aplicación Full Stack con el MERN Stack:</p>
                <p className='description-project'>      Mongo DB, Express, React y Node JS </p>

                <a className='link-project' href="https://up-task-mern-frontend-pi.vercel.app/" target="_blank">Ver proyecto</a>
                <a className='link-repo' href="https://github.com/martin0123478/UpTask_MERN_Frontend/tree/main" target="_blank">Ver código</a>
            </div>


        </div>



    )
}

export default Project1
