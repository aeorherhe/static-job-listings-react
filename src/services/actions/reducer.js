import { clearFilters } from "./clearFilters";
import { filterCategories } from "./filterCategories";
import { jobsData } from "../others/getData";
// import { reduceFunc } from "./filterfunc";
// import { filterTitle, reduceFunc } from "./filterfunc";

// console.log(jobsData[0]);

// const entries = Object.entries(jobsData[0]);

export const FILTERS = {
  SHOW_FILTERS: "SHOW_FILTERS",
  SHOW_CATEGORIES: "SHOW_CATEGORIES",
  BY_ROLE: "FILTER_BY_ROLE",
  BY_LEVEL: "FILTER_BY_LEVEL",
  BY_LANGUAGES: "FILTER_BY_LANGUAGES",
  BY_TOOLS: "FILTER_BY_TOOLS",
  CLEAR: "CLEAR_FILTERS",
  SELECT_FILTERS: "SELECT_FILTERS",
};

export const initialState = {
  selectedFilters: [],
  jobs: jobsData,
  showAllFilters: false,
  selected: false,
  showCategories: false,
  // filters: [...filterTitle, "all"],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    // show all filters
    case FILTERS.SHOW_FILTERS:
      return {
        ...state,
        showAllFilters: !state.showAllFilters,
      };

    // show categories
    case FILTERS.SHOW_CATEGORIES:
      if (payload === "roles") {
        return {
          ...state,
          showCategories: !state.showCategories,
        };
      }
      return {
        ...state,
        showCategories: !state.showCategories,
      };

    // // select filters
    case FILTERS.SELECT_FILTERS: {
      return filterCategories(payload, state);
      // const jobsUpdate = reduceFunc(payload, state);
      // return {
      //   ...state,
      //   jobs: jobsUpdate,
      //   selectedFilters: [...state.selectedFilters, payload],
      // };
    }

    // filter by role
    // case FILTERS.BY_ROLE:

    // // filter by level
    // case FILTERS.BY_LEVEL:
    //   return filterCategories(state, payload, "level");

    // // filter by languages
    // case FILTERS.BY_LANGUAGES:
    //   return filterCategories(state, payload, "languages");

    // // filter by tools
    // case FILTERS.BY_TOOLS:
    //   return filterCategories(state, payload, "tools");

    // // clear filters
    case FILTERS.CLEAR:
      return clearFilters(state, payload);
  }

  throw new Error(`No Matching "${type}" - action type`);
};
