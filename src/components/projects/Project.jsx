import task from '../../assets/images/up-task.png'
import './project.css'
const Project = () => {
    return (
        <div className='container-projects'>
            <div className='project-1'>
                <img className='img-project' src={task} alt="" />
            </div>
            <div>
                <p className='title-project'>Up-Task</p>
                <p className='description-project'>Administra tus proyectos desde una apliación intuitiva y eficiente.</p>
                <a className='link-project' href="https://up-task-mern-frontend-pi.vercel.app/" target="_blank">Ver proyecto</a>
                <a className='link-repo' href="https://github.com/martin0123478/UpTask_MERN_Frontend/tree/main" target="_blank">Ver código</a>
            </div>
        </div>
    )
}

export default Project
