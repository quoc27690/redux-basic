import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByBrand } from "../../redux/slice/menuSlice";

function RefineByBrand(props) {
  const { types } = props;

  const dispatch = useDispatch();
  const { valueByBrand, valueIdTitle, valueIdType } = useSelector(
    (state) => state.menu
  );
  const countProducts = useSelector((state) => state.main.countProducts);

  const handleCheck = (brand) => {
    const actionByBrand = getByBrand(brand);
    dispatch(actionByBrand);
  };

  return (
    <div className="refine-by-brand">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.subs
              .filter((e) => e.id === valueIdType)
              .map((e) =>
                e.subs.map((e) => (
                  <li key={e.id}>
                    <input
                      type="checkbox"
                      id={e.id}
                      checked={valueByBrand.includes(e.brand) ? true : false}
                      onChange={() => handleCheck(e.brand)}
                    />
                    <label htmlFor={e.id}>
                      {e.brand} (
                      {
                        countProducts.filter(
                          (product) => product.brand === e.brand
                        ).length
                      }
                      )
                    </label>
                  </li>
                ))
              )
          )}
      </ul>
    </div>
  );
}

export default RefineByBrand;
