function fetchTypes() {
  let url = "http://localhost:4000/types";

  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export default fetchTypes;
