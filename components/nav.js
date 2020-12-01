import Link from "next/link";

const links = [
  { href: "https://github.com/felixvo/nytimes_popular", label: "GitHub" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="no-underline dark:text-blue-300 mr-6">
              Most viewed 7 days
            </a>
          </Link>
          <Link href="/search" className="mr-6">
            <a className="no-underline dark:text-blue-300">Search Articles</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
