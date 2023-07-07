import React from 'react'
import rescue from '../assets/social-work.svg'
import pet from '../assets/animal-footstep.svg'
import adopt from '../assets/adopted-child.svg'
import './Counterstyle.css'
const counter = () => {
    const counters = document.querySelectorAll(".count");
    const speed = 200;

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(+counter.getAttribute("data-target"));
            const count = parseInt(+counter.innerText);
            const increment = Math.trunc(target / speed);
            console.log(increment);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
        };
        updateCount();
    });

    return (
        <div class="container">
            <div class="heading">
                Counting Upto the Limit
            </div>
            <div class="counter-container">
                <div class="counter">
                    <img src={rescue} alt="timer" srcset="" class="icon" />
                    <h3 data-target="15000" class="count">0</h3>
                    <h6>Work Hours</h6>
                </div>
                <div class="counter">
                    <img src={pet} alt="Coffee" srcset="" class="icon" />
                    <h3 data-target="1200" class="count">0</h3>
                    <h6>Cups of Coffee</h6>
                </div>
                <div class="counter">
                    <img src={adopt} alt="night" srcset="" class="icon" />
                    <h3 data-target="500" class="count">0</h3>
                    <h6>Sleepless Nights</h6>
                </div>
            </div>
        </div>
    )
}

export default counter