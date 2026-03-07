function AcademicTimeline() {

const education = [
{
year:"2026",
title:"MCA (Master of Computer Applications)",
college:"Sri Manakula Vinayagar Engineering College",
grade:"CGPA: 9.3"
},

{
year:"2024",
title:"BCA (Bachelor of Computer Applications)",
college:"Perunthalaivar Kamarajar Arts College",
grade:"CGPA: 7.23"
},

{
year:"2021",
title:"Higher Secondary Certificate",
college:"V.O.C Higher Secondary School",
grade:"79%"
},

{
year:"2019",
title:"SSLC",
college:"Sekkizhar Government High School",
grade:"73%"
}

]

return(

<section className="timeline-section" id="academicTimeline">

<h2 className="timeline-title">Academic Journey</h2>

<div className="timeline">

{education.map((item,index)=>(
<div className="timeline-item" key={index}>

<div className="timeline-dot"></div>

<div className="timeline-content">

<h3>{item.year}</h3>
<h4>{item.title}</h4>
<p>{item.college}</p>
<span>{item.grade}</span>

</div>

</div>
))}

</div>

</section>

)
}

export default AcademicTimeline