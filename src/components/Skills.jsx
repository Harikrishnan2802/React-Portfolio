import {
FaReact,
FaNodeJs,
FaJsSquare,
FaGitAlt,
FaGithub,
FaDatabase
} from "react-icons/fa";

import { SiMysql, SiPhp } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

function Skills(){

const techStack = [
{icon:<FaReact/>, name:"React"},
{icon:<FaJsSquare/>, name:"JavaScript"},
{icon:<FaNodeJs/>, name:"Node.js"},
{icon:<SiPhp/>, name:"PHP"},
{icon:<SiMysql/>, name:"MySQL"},
{icon:<FaDatabase/>, name:"PostgreSQL"},
{icon:<FaGitAlt/>, name:"Git"},
{icon:<FaGithub/>, name:"GitHub"},
{icon:<FaChartBar/>, name:"Power BI"},
]

return(

<section className="skills-section" id="skills">

<p className="skills-subtitle">TECH STACK</p>

<h2 className="skills-title">
Tools I <span>Master</span>
</h2>


{/* MOVING TECH STACK */}

<div className="marquee">

<div className="marquee-track">

{techStack.concat(techStack).map((tech,index)=>(

<div className="skill-pill" key={index}>
<span className="skill-icon">{tech.icon}</span>
{tech.name}
</div>

))}

</div>

</div>


{/* SKILL CARDS */}

<div className="skills-cards">

<div className="skill-card">

<div className="skill-icon-big">
<FaReact/>
</div>

<h3>Frontend</h3>

<p>React, JavaScript, HTML, CSS</p>

<div className="progress">
<div className="bar frontend"></div>
</div>

</div>


<div className="skill-card">

<div className="skill-icon-big">
<FaNodeJs/>
</div>

<h3>Backend</h3>

<p>PHP, Node.js, MySQL</p>

<div className="progress">
<div className="bar backend"></div>
</div>

</div>


<div className="skill-card">

<div className="skill-icon-big">
<FaChartBar/>
</div>

<h3>Analytics</h3>

<p>Power BI, Excel, SQL</p>

<div className="progress">
<div className="bar analytics"></div>
</div>

</div>


<div className="skill-card">

<div className="skill-icon-big">
<FaGitAlt/>
</div>

<h3>Tools</h3>

<p>Git, GitHub, VS Code</p>

<div className="progress">
<div className="bar tools"></div>
</div>

</div>

</div>

</section>

)

}

export default Skills