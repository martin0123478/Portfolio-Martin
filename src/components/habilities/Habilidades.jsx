import './habilidades.css'
const Habilidades = () => {
    return (
        <div className='container-habilidades' id='habilidades'>
            <div>
                <p className='title-habilidades'>Habilidades Principales</p>
                <hr />
                <p className='text-habilidades'>Front-End Development</p>
                <p className='front'>Git, HTML, CSS, Javascript, React, Redux, Context</p>
            </div>
            <div>
                <p className='title-habilidades'>Herramientas</p>
                <hr />
                <p className='text-habilidades'>Programación</p>
                <p className='front'>Github, Bitbucket, VSCode, Jira, Figma, Scketch</p>

            </div>
        </div>
    )
}

export default Habilidades
