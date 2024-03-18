import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers w-full max-w-[1000px] mx-auto px-5 flex gap-5 py-10 flex-col ">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <div className="w-[100%] h-auto py-3 bg-gray-900 px-5 flex flex-col">
            <p className="hover:text-red-500">{career.title}</p>
            <p className="text-sm text-gray-400">Based in {career.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if(!res.ok){
    throw Error("Could not Fetch the Careers")
  }

  return res.json();
};
