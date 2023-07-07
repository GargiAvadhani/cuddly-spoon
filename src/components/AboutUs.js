import "./AboutUsStyles.css"
import picture from "../assets/team1.jpg"

function AboutUs() {
    return (
        <div className="about-container">
           
            <h1>Our Mission</h1>
            <p>Our Seva team is mainly focused on ABC drives in various areas of Pune city and we successfully sterilized more than 4000 dogs
                with the help of Canine Control And Care and Blue Cross Society Of Pune. ( Till Nov 21) and not to forget our volunteers
                who are dedicated to this noble cause. We are always supported by Rescue Charitable Trust, Pets Force Pune and Animal Rescue Trust
                for all our rescue cases, without whom it is always tough to attend thousands of injured animals. Our adoption coordinators
                are always busy finding loving and forever homes for our indies which helps them live a safe and healthy life ahead.
                Our each volunteer is a feeder himself/herself and plays a key role in our animal welfare. </p>


            <div className="team">
                <h1>Meet our Team</h1>
                <p>Our animal welfare NGO volunteers are a compassionate and dedicated team. Rescuers save animals in distress,
                    caregivers provide essential care, and advocates raise awareness.
                    Together, we strive to improve the lives of animals in need, one act of kindness at a time</p>
                <img alt="img" src={picture}  className="team"/>
            </div>

            <div className="tag">
                <h1>Help Us to build better life to animals</h1>
                <h3> Become a volunteer</h3>
                <h3>Adopt an animal</h3>
            </div>
        </div>
    )
}

export default AboutUs