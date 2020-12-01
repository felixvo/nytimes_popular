import Nav from "../components/nav";
import GetMostViewed from "../lib/most_view";
import { useState } from "react";

export default function IndexPage() {
  const [period, setPeriod] = useState(7);
  const { data, error } = GetMostViewed(period);

  return (
    <div className="bg-gray-800 text-yellow-100  font-serif">
      <Nav />
      <div className="py-20">
        <ul className="mx-auto max-w-2xl text-center">
          {data &&
            data.results.map((article) => (
              <li key={article.id} className="p-10 shadow-sm mb-10">
                <div className="text-2xl text-red-800">{article.section}</div>
                <div className="text-2xl mb-6">{article.byline}</div>
                <a href={article.url} className="text-4xl hover:underline">
                  {article.title}
                </a>
                <div className="text-lg mb-3">{article.abstract}</div>
                <div className="text-xm italic">{article.published_date}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
