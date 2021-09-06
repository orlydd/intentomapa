import Dashboard from '../Elements/Dashboard';
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/footer";

const dashboardPage = () => {
    return(
        <>
        <Navbar/>
        <div className="headerDash">
            <div class="text">
                <h2>Proyecto sig-unimet</h2>
                <h1>Panel de control</h1>
            </div>
        </div>
        <Dashboard/>
        <Footer/>
        </>
    )
};
export default dashboardPage;