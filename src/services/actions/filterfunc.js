// import { jobsData } from "../others/getData";

export const filterFunc = (filter, state) => {
  return state.jobs.reduce((acc, curr) => {
    for (const key in curr) {
      if (key === filter) {
        if (curr[key] === true) {
          return [...acc, curr];
        }
      }

      // Other filters
      if (key === "new" || key === "featured" || key === "id") continue;
      if (curr[key].includes(filter)) {
        return [...acc, curr];
      }
    }

    return acc;
  }, []);
};

export const clearFiltersFunc = (jobs, state, payload) => {
  return jobs.reduce((acc, curr) => {
    const filter = state.filter((item) => item !== payload);
    for (const key in curr) {
      if (key === "new" || key === "featured" || key === "id") continue;

      // Other filters
      const x = filter.map((item) => {
        if (curr[key].includes(item)) return curr;
        return null;
      });

      if (x.includes(curr)) {
        return [...acc, curr];
      }
    }
    return acc;
  }, []);
};
