import dinero from '../../assets/images/planificador.png'

const Project = () => {
    return (
        <div className='container-project-1'>
            <div className='project-1'>
                <div>
                    <img className='img-project' src={dinero} alt="" />
                </div>

            </div>
            <div className='info'>
                <p className='title-project'>Planificador de gastos</p>
                <p className='description-project'>Ten un control de tus gastos y ahorra dinero</p>
                <a className='link-project' href="https://tourmaline-centaur-5eb861.netlify.app/" target="_blank">Ver proyecto</a>
                <a className='link-repo' href="https://github.com/martin0123478/React-Gastos" target="_blank">Ver código</a>
            </div>


        </div>
    )
}

export default Project
