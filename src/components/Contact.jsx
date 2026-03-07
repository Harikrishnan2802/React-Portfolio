import { useState } from "react"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Contact() {

const [open,setOpen] = useState(false)

return (

<section className="contact-section" id="contact">

<h2 className="contact-title">Get In Touch</h2>

<p className="contact-sub">
Have a project idea, collaboration, or opportunity?
Feel free to reach out.
</p>


<div className="contact-grid">

{/* EMAIL CARD */}

<div className="contact-card" onClick={()=>setOpen(true)}>

<div className="contact-icon">
<FaEnvelope/>
</div>

<h3>Email</h3>

<p className="contact-hint">Click to start a conversation</p>

</div>


<div className="contact-card">

<div className="contact-icon">
<FaPhoneAlt/>
</div>

<h3>Phone</h3>

<a href="tel:9894209369">
+91 9894209369
</a>

</div>


<div className="contact-card">

<div className="contact-icon">
<FaMapMarkerAlt/>
</div>

<h3>Location</h3>

<p>Puducherry, India</p>

</div>

</div>


{/* SOCIAL */}

<div className="contact-social">

<a href="https://instagram/hari_krishnan98/.com">
<FaInstagram/>
</a>

<a href="https://linkedin.com/in/hari-krishnan-928618309">
<FaLinkedin/>
</a>

</div>


{/* EMAIL POPUP MODAL */}

{open && (

<div className="contact-modal">

<div className="modal-box">

<h3>Send Email</h3>

<input type="text" placeholder="Your Name"/>

<input type="email" placeholder="Your Email"/>

<textarea placeholder="Message"></textarea>

<div className="modal-buttons">

<button
onClick={()=>window.location.href=
"mailto:nharikrishnan13@gmail.com?subject=Portfolio Contact"
}
>
Send
</button>

<button onClick={()=>setOpen(false)}>
Close
</button>

</div>

</div>

</div>

)}

</section>

)

}

export default Contact
