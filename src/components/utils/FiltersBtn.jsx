import { useGlobalContext } from "../../services/GlobalContext";
import { FILTERS } from "../../services/actions/reducer";

/* eslint-disable react/prop-types */
const FiltersBtn = ({ filter }) => {
  const { dispatch } = useGlobalContext();
  return (
    <button
      className={filterStyle(filter)}
      onClick={() =>
        dispatch({ type: FILTERS.SELECT_FILTERS, payload: filter })
      }
    >
      {filter}
    </button>
  );
};
export default FiltersBtn;

const filterStyle = (filter) => {
  if (filter === "featured") {
    return "btn featured";
  }
  if (filter === "new") {
    return "btn new";
  }
  return "btn";
};
