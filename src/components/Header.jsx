import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { NavLink } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/homePage",
    title: "Home",
  },
  {
    id: 2,
    to: "/Blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/About",
    title: "About",
  },
  {
    id: 4,
    to: "/Contact",
    title: "Contact",
  },
];

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md gap-x-5">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">
            Wellcome back ! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span>Wellcome back !</span>
      )}
      <div className="flex items-center justify-center gap-x-5">
        {ListLink.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
