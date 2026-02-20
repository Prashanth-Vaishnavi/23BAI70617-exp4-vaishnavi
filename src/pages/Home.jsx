export default function Home(){
  return(
    <div className="container">

      <div className="card">
        <h1>Vaishnavi</h1>
        <p><b>Frontend Developer • Data Analyst • Problem Solver</b></p>
        <p>
          Passionate developer focused on building interactive,
          scalable, and modern web applications with clean UI and
          optimized performance.
        </p>
      </div>

      <div className="card">
        <h2>Career Objective</h2>
        <p>
          To become a skilled software engineer who develops impactful
          digital products that solve real-world problems and improve user experience.
        </p>
      </div>

      <div className="card">
        <h2>Technical Skills</h2>

        <p>React</p>
        <progress value="85" max="100"></progress>

        <p>Java</p>
        <progress value="80" max="100"></progress>

        <p>Python</p>
        <progress value="75" max="100"></progress>

        <p>Data Analysis</p>
        <progress value="82" max="100"></progress>
      </div>

      <div className="card">
        <h2>Strengths</h2>
        <ul>
          <li>Quick learner</li>
          <li>Creative problem solving</li>
          <li>Strong logical thinking</li>
          <li>Team collaboration</li>
        </ul>
      </div>

    </div>
  )
}