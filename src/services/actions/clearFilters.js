import { jobsData } from "../others/getData";
import { clearFiltersFunc } from "./filterfunc";

export function clearFilters(state, payload) {
  if (state.selectedFilters.length <= 1) {
    return {
      ...state,
      selectedFilters: [],
      jobs: jobsData,
    };
  }

  return {
    ...state,
    selectedFilters: state.selectedFilters.filter((item) => item !== payload),
    jobs: clearFiltersFunc(jobsData, state.selectedFilters, payload),
  };
}
