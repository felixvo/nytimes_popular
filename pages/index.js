import Layout from "../components/layout";

export default function IndexPage({ data }) {
  return (
    <Layout>
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
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=Vz3KC0COeUrinuX55cuggBltjgI0IILa`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
}
