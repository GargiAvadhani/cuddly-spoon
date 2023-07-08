import "./AnimalsStyles.css"
import pic1 from "../assets/10.jpg"
import pic2 from "../assets/4.jpg"

function animals() {
    return (
        <div className="aboutrescue">
            <h2>Rescue Cases</h2>
            <p>Our skilled team of rescuers goes out of their way to help all the animals in need. <br/>
                It is often thought that rescues are just accident cases, however, the cases go much beyond that.</p>


            <div className="fifth">
                <img alt="img" src={pic2} className="cat" />
            </div>
            <div className="first">
                <h3>Human-Animal Conflicts</h3>
                <p>Human civilization expands, wildlife habitats face encroachment and conflicts arise.
                    Festivals like kite flying during Sankranti pose dangers to birds and animals due to the use of hazardous glass-stringed manjas.
                    Birds often get entangled in abandoned manja strings, requiring immediate rescue and treatment. Similarly, events like weddings
                    and Diwali lead to animals being scared, injured, and displaced due to fireworks. Our dedicated team rescues and treats these distressed animals,
                    aiming to restore them to their natural habitats.</p>

                <div className="fourth">
                    <img alt="img" src={pic1} />
                </div>

                <div className="second">
                    <h3>Cruelty Cases</h3>
                    <p>Despite compassion being inherent to humanity, some individuals exhibit cruelty towards animals, leading to unfortunate circumstances.
                        Animals, including pets, street animals, and cattle, endure beatings and abuse. Neglectful pet owners subject their pets to appalling conditions,
                        while others abandon them callously. Abandoned pets contribute to the already large population of stray animals, leaving them vulnerable to attacks,
                        harsh weather, and starvation. Intentional harm and running over animals result in fatalities or permanent disabilities.
                        Animal cruelty is a punishable offense in India, and we vehemently condemn such behavior, seeking legal measures for recourse.</p>

                    <div className="third">
                        <h3>Illegal breeding</h3>
                        <p>Commercial breeding of pedigree animals has led to widespread animal abuse. Backyard breeding, exploiting pedigree pets for their offspring,
                            and neglecting females after they can no longer reproduce are distressingly common practices. Animals suffer in miserable conditions,
                            while unlicensed breeders and those keeping animals without proper care face legal consequences. Seva takes pride in rescuing these animals,
                            providing them a second chance at a better life through rehoming efforts</p>


                    </div>
                </div>
            </div>
        </div>
    )

}

export default animals