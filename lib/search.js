import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SearchArticle(q) {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}&api-key=Vz3KC0COeUrinuX55cuggBltjgI0IILa`;

  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    error: error,
  };
}
export default SearchArticle;
