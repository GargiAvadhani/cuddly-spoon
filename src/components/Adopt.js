import "./AdoptStyles.css"
import dis from "../assets/user-group-solid.png"
//import img2 from "../assets/square-check-regular.jpg"
//import img3 from "../assets/arrow-right-to-bracket-solid.jpg"
//import img4 from "../assets/paw-solid.jpg"

function Adoption(){
    return(
        <div className="adopt1">
            <h1>Why adoption ?</h1>
            <p>Adopting stray animals is important because it saves lives, reduces animal homelessness, offers health and behavior benefits,
                 provides unique and diverse pets, and supports ethical practices. The "adopt don't shop" philosophy promotes giving priority
                  to shelter or rescue animals over purchasing from breeders or pet stores.</p>
            
            <div className="=adopt2">
                <h1>Adoption process</h1>
                <h3>How do we do it?</h3>

            <div className="icon1">
            <img alt="img" src={dis}/>
            <h4>Discovery</h4>
            <p>Once any Dog/Cat is up for adoption we start accepting adoption requests via Social Media, on email or on calls.​</p>
            </div>


           
                
                


            </div>
        </div>
    )

}

export default Adoption