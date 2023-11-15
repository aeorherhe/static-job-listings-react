import { jobsData } from "../others/getData";
import { filterFunc } from "./filterfunc";

export function filterCategories(payload, state) {
  if (state.selectedFilters.includes(payload)) {
    if (state.selectedFilters.length <= 1) {
      return {
        ...state,
        selectedFilters: [],
        jobs: jobsData,
      };
    }

    return state;
  }

  if (state.selectedFilters.length === 4) return state;

  const jobsUpdate = filterFunc(payload, state);
  return {
    ...state,
    jobs: jobsUpdate,
    selectedFilters: [...state.selectedFilters, payload],
  };

  // return {
  //   ...state,
  //   selectedFilters: [...state.selectedFilters, payload],
  //   jobs:
  //     category === "languages" || category === "tools"
  //       ? state.jobs.filter((job) => job[category].includes(payload))
  //       : state.jobs.filter((job) => job[category] === payload),
  // };
}

//   return {
//     ...state,
//     selectedFilters: state.selectedFilters.filter((item) => item !== payload),
//     jobs:
//       category === "languages" || category === "tools"
//         ? [
//             ...jobsData.filter((job) => {
//               const filter = state.selectedFilters.filter(
//                 (item) => item !== payload
//               );
//               return filter.every((item) => job[category].includes(item));
//             }),
//           ]
//         : [
//             ...jobsData.filter((job) => {
//               const filter = state.selectedFilters.filter(
//                 (item) => item !== payload
//               );
//               return filter.includes(job[category]);
//             }),
//           ],
//   };
