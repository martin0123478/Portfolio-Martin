import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import Project1 from "../components/project1/Project1"
import Project2 from "../components/project2/Project2"
import Project from "../components/project3/Project"
import Contacto from "../components/contacto/Contacto"
import Footer from "../components/footer/Footer"
import Habilidades from "../components/habilities/Habilidades"
import Comunidades from "../components/comunidades/Comunidades"
import Project4 from "../components/project4/Project"
const Principal = () => {
    return (
        <>
            <Header />
            <Hero />
            <Project1 />
            <Project2 />
            <Project />
            <Project4 />
            <Comunidades />
            <Habilidades />

            <Contacto />
            <Footer />

        </>
    )
}

export default Principal
