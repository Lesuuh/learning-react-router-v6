import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { HelpLayout } from "./layouts/HelpLayout";
import { Faq } from "./pages/help/Faq";
import { Contact } from "./pages/help/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
import {
  CareerDetails,
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import { CareersError } from "./pages/careers/CareersError";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route
          path="careers"
          element={<CareersLayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
