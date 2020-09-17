import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByType } from "../../redux/slice/menuSlice";

function RefineByType(props) {
  const { types } = props;

  const dispatch = useDispatch();

  const { valueIdTitle, valueByType } = useSelector((state) => state.menu);
  const countProducts = useSelector((state) => state.main.countProducts);

  const onChange = (type) => {
    const actionByType = getByType(type);
    dispatch(actionByType);
  };

  return (
    <div className="refine-by-type">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.subs.map((e) => (
              <li key={e.id}>
                <input
                  type="checkbox"
                  id={e.id}
                  checked={valueByType.includes(e.type) ? true : false}
                  onChange={() => onChange(e.type)}
                />
                <label htmlFor={e.id}>
                  {e.type} (
                  {
                    countProducts.filter((product) => product.type === e.type)
                      .length
                  }
                  )
                </label>
              </li>
            ))
          )}
      </ul>
    </div>
  );
}

export default RefineByType;
