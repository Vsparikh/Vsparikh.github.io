import react from "react";

function WorkEntry({ job }) {
  const tech = job.tech.map((t) => {
    return <li className="tech-entry">{t}</li>;
  });

  const jobDis = job.discription.map((d) => {
    return <li className="job-discription-entry">{d}</li>;
  });
  return (
    <div className="work-entry">
      <div className="work-logo">
        <a href={job.companyLink} className="work-link">
          <img src={job.logo} alt="company logo" className="work-img" />
        </a>
      </div>
      <div className="work-content">
        <h3 className="job-title">{job.title}</h3>
        <div className="job-info">
          <p className="job-date">
            {job.startDate.toLocaleString("default", { month: "long" })}{" "}
            {job.startDate.getFullYear()}
            {" - "}
            {job.endDate.toLocaleString("default", { month: "long" })}{" "}
            {job.endDate.getFullYear()}
          </p>
          <ul class="tech-used">{tech}</ul>
        </div>
        <ul class="job-discription">{jobDis}</ul>
      </div>
    </div>
  );
}

function WorkExp(props) {
  const jobs = props.jobs.map((job) => {
    return <WorkEntry job={job} />;
  });

  return (
    <section className="experience-content" id="Work-experience">
      <h1>Experience</h1>
      {jobs}
    </section>
  );
}

export default WorkExp;
