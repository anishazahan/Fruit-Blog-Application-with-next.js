
import styles from './topHeader.module.css'
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

            <div className="right text-white flex space-x-5 text-left">
                <h1>ri</h1>
                <h1>ri</h1>
                <h1>ri</h1>
                <h1>ri</h1>
            </div>

           </div>
        </div>
    );
}



export default TopHeader;