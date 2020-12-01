import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function GetMostViewed(period) {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=Vz3KC0COeUrinuX55cuggBltjgI0IILa`;
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    error: error,
  };
}

export default GetMostViewed;
