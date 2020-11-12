function fetchTypes() {
  let url = "https://enigmatic-savannah-13455.herokuapp.com/types";

  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export default fetchTypes;
