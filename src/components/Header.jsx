import { NavLink, Outlet } from "react-router-dom";
import { BreadCrumbs } from "./BreadCrumbs";

export const Header = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mx-auto shadow-sm border-b h-[60px] w-full max-w-[1000px]">
        <div className="font-semibold text-xl">React-Router</div>
        <div>
          <ul className="flex items-center space-x-5">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/careers">
              <li>Careers</li>
            </NavLink>
            <NavLink to="/help">
              <li>Help</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <BreadCrumbs/>
      <main className="max-w-[1000px] mx-auto py-10">
        <Outlet />
      </main>
    </div>
  );
};
