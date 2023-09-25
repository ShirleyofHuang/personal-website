import Navbar from "../components/Navbar"
import App from "../App"
import LandingPage from "./LandingPage"
import WorkPage from "./WorkPage"
import ProjectsPage from "./ProjectsPage"
import Parallex from "../components/Parallex"
import TravelPage from "./TravelPage"
import ContactPage from "./Contact"
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
    return (
    <>
    {/* <Navbar /> */}
    <App />
    <LandingPage />
    <WorkPage />
    <Fade duration={2000}>
        <ProjectsPage />
    </Fade>
    <ContactPage />
    {/* <Parallex image="IMG_4727.jpeg" title="travels"/> */}
    </>
    )
}

export default HomePage