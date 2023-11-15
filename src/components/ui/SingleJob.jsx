import { nanoid } from "nanoid";
import { useGlobalContext } from "../../services/GlobalContext";
import FiltersBtn from "../utils/FiltersBtn";

export function SingleJob() {
  const {
    state: { jobs },
  } = useGlobalContext();

  return (
    <section className="job-wrapper">
      {jobs.map((job) => {
        return <Job key={nanoid()} {...job} />;
      })}
    </section>
  );
}

const Job = (job) => {
  // prettier-ignore
  const { company, logo, featured, position, role, level,
    postedAt, contract, location, languages, tools } = job;

  return (
    <article className="single-job">
      <div className="job">
        <div className="logo">
          <img src={logo} alt={company} />
        </div>
        <div className="features">
          <div className="updates">
            <FiltersBtn filter={company} />
            {featured && <FiltersBtn filter="featured" />}
            {job.new && <FiltersBtn filter="new" />}
          </div>
          <div className="title">
            <h4>{position}</h4>
          </div>
          <div className="info">
            <FiltersBtn filter={postedAt} />
            <FiltersBtn filter={contract} />
            <FiltersBtn filter={location} />
          </div>
        </div>
      </div>
      <div className="job-filter">
        <FiltersBtn filter={role} />
        <FiltersBtn filter={level} />
        {languages.map((language) => {
          return <FiltersBtn key={nanoid()} filter={language} />;
        })}
        {tools.map((tool) => {
          return <FiltersBtn key={nanoid()} filter={tool} />;
        })}
      </div>
    </article>
  );
};
