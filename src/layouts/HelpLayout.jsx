import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="w-full">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
        nam.
      </p>

      <nav className="flex space-x-9 py-10">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Our Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
