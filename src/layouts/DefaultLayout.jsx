import { Outlet } from "react-router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from "../components/Loader/Loader";
import { useContext } from "react";
import globalContext from "../context/globalContext"


export default function Deafultlayout() {
    const { isLoading } = useContext(globalContext)
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </>
    )

}