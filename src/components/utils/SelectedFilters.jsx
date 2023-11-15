import { IoClose } from "react-icons/io5";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../../services/GlobalContext";

export function SelectedFilters() {
  const {
    state: { selectedFilters },
    dispatch,
    FILTERS,
  } = useGlobalContext();

  return (
    <>
      <div className="filters">
        {selectedFilters.length === 0 && (
          <p className="select-filter">Select any filter</p>
        )}
        {selectedFilters.map((item) => {
          return (
            <div
              className="title"
              key={nanoid()}
              onClick={() => {
                dispatch({ type: FILTERS.CLEAR, payload: item });
              }}
            >
              {<p>{item}</p>}
              <button type="button" className="clear-btn">
                <IoClose className="close" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
