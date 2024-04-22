import Link from "next/link";

const links = [
  ["Home", "/dashboard"],
  ["Team", "/team"],
  ["Projects", "/projects"],
  ["Reports", "/reports"],
];
export const Header = () => {
  return (
    <nav className="flex h-20 w-full flex-row items-center justify-start bg-primary">
      <span className="h6 justify-center p-4 align-middle text-4xl font-bold italic text-white">
        Scrum Poker
      </span>
      <div className="margin-auto flex flex-row items-center justify-center space-x-4">
        {links.map(([title, url]) => (
          <Link key={title} href={url}>
            <span className="link link-neutral text-white ">{title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
