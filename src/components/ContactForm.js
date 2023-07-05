import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Seva Animal Welfare Charitable Trust</h1>
            <h2>Send a message to us!</h2>
            <form>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Subject"></input>
                <textarea placeholder="Message" rows="4"></textarea>
                <button> Send Message</button>

            </form>
        </div>

    )
        
    }

    export default ContactForm