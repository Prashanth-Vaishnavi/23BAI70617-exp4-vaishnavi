export default function Projects(){

  const projects=[
    {title:"Library Management System",desc:"OOP based system for managing books & users"},
    {title:"ML Regression Analyzer",desc:"Implemented regression models & evaluation"},
    {title:"E-commerce Design",desc:"Designed DFD + ER diagrams for system"},
    {title:"Video Rental System",desc:"Java inventory logic application"},
    {title:"Task Dashboard",desc:"React reducer based productivity system"}
  ]

  return(
    <div className="container">
      <h1>My Work</h1>

      {projects.map((p,i)=>(
        <div className="card" key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  )
}