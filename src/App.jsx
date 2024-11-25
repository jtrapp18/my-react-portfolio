import Headroom from "react-headroom"
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Footer from "./components/Footer";

function App(){

    return(
        <>
            <Headroom>
                <Header />
            </Headroom>
            <Outlet/>
            <Messages/>
            <Footer />
        </>
    );
};

export default App;