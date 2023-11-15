import { SingleJob } from "./SingleJob";
import { FiltersSection } from "./FiltersSection";

const JobsListings = () => {
  return (
    <section className="all-jobs">
      <FiltersSection />
      <SingleJob />
    </section>
  );
};
export default JobsListings;
