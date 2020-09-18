function fetchProducts({
  valueTitle,
  valueType,
  valueByType,
  valueByBrand,
  valueByRatings,
  valueByPricesStart,
  valueByPricesEnd,
  sort,
  valueSearch,
}) {
  let url = `http://localhost:4000/products?`;

  if (valueTitle) {
    url += `&title=${valueTitle}`;
  }

  if (valueType) {
    url += `&type=${valueType}`;
  }

  if (valueByType.length > 0) {
    for (let i = 0; i < valueByType.length; i++) {
      url += `&byType=${valueByType[i]}`;
    }
  }

  if (valueByBrand.length > 0) {
    for (let i = 0; i < valueByBrand.length; i++) {
      url += `&brand=${valueByBrand[i]}`;
    }
  }

  if (valueByRatings) {
    if (valueByRatings !== 4) {
      for (let i = valueByRatings; i <= 4; i++) {
        url += `&ratings=${i}`;
      }
    }
    url += `&ratings=${valueByRatings}`;
  }

  if (valueByPricesStart) {
    url += `&price_gte=${valueByPricesStart}`;
  }

  if (valueByPricesEnd) {
    url += `&price_lte=${valueByPricesEnd}`;
  }

  if (sort) {
    url += `&_sort=price&_order=${sort}`;
  }

  if (valueSearch) {
    url += `&q=${valueSearch}`;
  }

  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export default fetchProducts;
