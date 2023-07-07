import "./AdoptStyles.css"
import icon from "../assets/user.svg"
import verify from "../assets/verification.svg"
import process from "../assets/process.svg"
import adopt from "../assets/adopt.svg"


function Adoption() {
    return (
        <div className="adopt1">
          
            <h1>Why adoption ?</h1>
            <p>Adopting stray animals is important because it saves lives, reduces animal homelessness, offers health and behavior benefits,
                provides unique and diverse pets, and supports ethical practices. The "adopt don't shop" philosophy promotes giving priority
                to shelter or rescue animals over purchasing from breeders or pet stores.</p>

            <div className="adopt2">
                <h1>Adoption process</h1>
                <h3>How do we do it?</h3>
            </div>
            <div className="process">
                <div className="container">
                    <img alt="user" src={icon} className="icons" />
                    <h4 className="text">Discovery</h4>
                    <p>Once any Dog/Cat is up for adoption <br/>
                        we start accepting adoptio <br />
                         requests via Social Media,<br />
                        on email or on calls.
                    </p>
                </div>
                <div className="container">
                    <img alt="user" src={verify} className="icons" />
                    <h4 className="text">Verification</h4>
                    <p>
                    Once documents are received, <br/>
                    we proceed for Identity <br/>
                    verification,Financial Stability<br/>
                    and House Check.
                    </p>
                </div>
                <div className="container">
                    <img alt="user" src={process} className="icons" />
                    <h4 className="text">Process</h4>
                    <p>
                    Once verification is completed,<br/>
                    we proceed for adoption<br/>
                    process by filling up adoption<br/>
                    Financial Stability and House Check.
                    </p>
                </div>
                <div className="container">
                    <img alt="user" src={adopt} className="icons" />
                    <h4 className="text">Adoption</h4>
                    <p>
                    Once adoption process is<br/>
                    completed, we<br/>
                    handover/deliver dog/cat to the<br/>
                    new parents.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Adoption