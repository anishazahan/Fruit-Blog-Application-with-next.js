import Footer from "../Components/Header/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import TopHeader from "../Components/Header/topHeader";



function Format({children}) {
    return (
        <>
         <TopHeader></TopHeader>
         <Navbar></Navbar>
         <main>{children}</main>
         <Footer></Footer>
        </>
    );
}



export default Format;