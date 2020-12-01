import SearchArticle from "../lib/search";
import { useState } from "react";
import Layout from "../components/layout";
export default function SearchPage() {
  const [q, setQ] = useState("");
  const [currentQ, setCurrentQ] = useState("");
  const { data, error } = SearchArticle(q);
  return (
    <Layout>
      <div className="mx-auto max-w-2xl text-lg">
        <div className="mb-10">
          <input
            className="w-3/4 text-black"
            onChange={(e) => {
              setCurrentQ(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setQ(currentQ);
              }
            }}
            type="text"
          />
          <button
            className="ml-3 text-lg"
            onClick={() => {
              setQ(currentQ);
            }}
          >
            Search
          </button>
        </div>
        <ul className="list-decimal">
          {data &&
            data.response.docs.map((row) => {
              return (
                <li className="mb-3">
                  <a
                    href={row.web_url}
                    target="_blank"
                    className="hover:underline"
                  >
                    {row.headline.main} <br></br>
                    <span className="text-xs italic">{row.source}</span>
                    <span className="text-xs italic">
                      {" "}
                      - {row.byline.original}
                    </span>
                  </a>
                  <div className="text-sm">{row.abstract}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </Layout>
  );
}
