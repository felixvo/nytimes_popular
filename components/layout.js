import Nav from "./nav";
export default function Layout({ children }) {
  return (
    <div className="bg-gray-800 text-yellow-100  font-serif">
      <Nav />
      <div className="py-20">{children}</div>
    </div>
  );
}
