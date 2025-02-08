import crm from '../../assets/images/crm.png'

const Project = () => {
    return (
        <div className='container-project-1'>
            <div className='project-1'>
                <div>
                    <img className='img-project' src={crm} alt="" />
                </div>

            </div>
            <div className='info'>
                <p className='title-project'>CRM Productos</p>
                <p className='description-project'>Administrador de produtos para tienda Online</p>
                <p className='description-project'>Crea, Lee, Edita y Elimina los productos</p>
                <p className='description-project'>Tecnologias:<br /></p>
                <p className='description-project'>PostgreSQL, Express, React y Node JS </p>

                <a className='link-repo' href="https://github.com/martin0123478/products_frontend" target="_blank">Ver código</a>
            </div>


        </div>
    )
}

export default Project
