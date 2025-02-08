import './habilidades.css'
const Habilidades = () => {
    return (
        <div className='container-habilidades' id='habilidades'>
            <div>
                <p className='title-habilidades'>Habilidades Principales</p>
                <hr />
                <p className='text-habilidades'>Front-End Development</p>
                <p className='front'>HTML, CSS, JavaScript, TypeScript, Git, Bootstrap, <br />Tailwind, React, Next.js,  Context API, Redux, Redux Toolkit, Zustand, <br />React Query, Node.js, MySQL, MongoDB, PostgreSQL, Testing , Jest.

                </p>
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
