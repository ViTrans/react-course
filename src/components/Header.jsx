import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
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
      <button
        onClick={() => setUser(null)}
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        logout
      </button>
    </div>
  );
};

export default Header;
