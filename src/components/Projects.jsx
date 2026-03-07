import { SiPhp, SiMysql, SiJavascript } from "react-icons/si"
import { FaCode } from "react-icons/fa"

import { 
FaChartBar,
FaGithub,
FaExternalLinkAlt
} from "react-icons/fa"
const projects = [

{
title:"Online Examination System",
desc:"Secure exam platform with login authentication, question management, and automated scoring.",
tech:["PHP","MySQL"],
icon:"💻",
live:"#",
code:"https://github.com/Harikrishnan2802/Online-examination-system"
},

{
title:"HealWise",
desc:"Health management web app with BMI tracking, first aid guidance, and emergency contacts.",
tech:["PHP","MySQL"],
icon:"🏥",
live:"#",
code:"#"
},

{
title:"Accident Report Dashboard",
desc:"Interactive PowerBI dashboard analyzing accident statistics across vehicle categories.",
tech:["PowerBI"],
icon:"📊",
live:"#",
code:"https://github.com/Harikrishnan2802/accident-dashboard-powerbi"
},

{
title:"Healthcare Dashboard",
desc:"Interactive PowerBI Dashboard to track the InPaitent and OutPaitent Details.",
tech:["PowerBI"],
icon:"👩🏻‍⚕️",
live:"#",
code:"https://github.com/Harikrishnan2802/PowerBI-HealthcareDashboard"
},

{
title:"Dynamic College Website",
desc:"Database driven college portal with course, department and faculty management.",
tech:["HTML","CSS","JS","Python"],
icon:"🌐",
live:"#",
code:"#"
},

{
title:"Portfolio",
desc:"A Personal Portfolio",
tech:["React","CSS"],
icon:"💼",
live:"#",
code:"#"
}


]

function Projects(){

return(

<section className="projects-section" id="projects">

<h2 className="projects-title">Featured Projects</h2>

<div className="projects-grid">

{projects.map((p,i)=>(

<div className="project-card" key={i}>

<div className="project-icon">
{p.icon}
</div>


<div className="tech-badges">

{p.tech.map((t,index)=>(
<span key={index}>{t}</span>
))}

</div>


<h3>{p.title}</h3>

<p>{p.desc}</p>


<div className="project-buttons">

<a href={p.live} className="btn-live">
<FaExternalLinkAlt/> Live
</a>

<a href={p.code} className="btn-code">
<FaGithub/> Code
</a>

</div>

</div>

))}

</div>

</section>

)

}

export default Projects