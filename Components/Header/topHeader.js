
import styles from './topHeader.module.css'
import { ImFacebook,ImTwitter,ImPinterest,ImGoogle} from "react-icons/im";
function TopHeader() {
    return (
        <div className='bg-green-700'>
           <div className="xl:container xl:mx-auto lg:px-10 flex flex-col lg:flex-row justify-between items-center py-3">

            <div className=" left flex flex-col md:flex-row md:space-x-5 text-white text-sm mx-auto lg:mx-0 text-center lg:text-left">
               <div className="contact flex space-x-3 ">
                <p>ic</p>
               <p>FoodFarm, W 35th St, New York</p>
               </div>
               <div className="contact flex space-x-3">
                <p>ic</p>
               <p>info_floor@gmail.com</p>
               </div>
            </div>

            <div className="right text-white flex space-x-5 justify-start">
                <h1><ImFacebook></ImFacebook></h1>
                <h1><ImTwitter></ImTwitter></h1>
                <h1><ImPinterest></ImPinterest></h1>
                <h1><ImGoogle></ImGoogle></h1>
               
            </div>

           </div>
        </div>
    );
}



export default TopHeader;