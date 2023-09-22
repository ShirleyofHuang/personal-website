import Navbar from "../components/Navbar"
import App from "../App"
import LandingPage from "./LandingPage"
import WorkPage from "./WorkPage"
import ProjectsPage from "./ProjectsPage"
import Parallex from "../components/Parallex"
import TravelPage from "./TravelPage"
const HomePage = () => {
    return (
    <>
    {/* <Navbar /> */}
    <App />
    <LandingPage />
    <WorkPage />
    <ProjectsPage />
    <Parallex image="IMG_4727.jpeg" title="travels"/>
    </>
    )
}

export default HomePage