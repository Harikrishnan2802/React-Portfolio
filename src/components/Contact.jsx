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

<a href="https://www.instagram.com/hari_krishnan98/">
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

<form action="https://formspree.io/f/xqeykjbg" method="POST">

<input 
type="text" 
name="name"
placeholder="Your Name"
required
/>

<input 
type="email" 
name="email"
placeholder="Your Email"
required
/>

<textarea 
name="message"
placeholder="Message"
required
></textarea>

<div className="modal-buttons">

<button type="submit">
Send
</button>

<button 
type="button"
onClick={()=>setOpen(false)}
>
Close
</button>

</div>

</form>

</div>

</div>

)}

</section>

)

}

export default Contact
