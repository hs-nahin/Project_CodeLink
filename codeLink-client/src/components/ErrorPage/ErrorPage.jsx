import "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-emerald-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-emerald-500">Oops!</h1>
        <h2 className="mt-4 text-4xl font-semibold text-emerald-700">
          404 - Page Not Found
        </h2>
        <p className="mt-2 text-emerald-600">
          The page you’re looking for doesn’t exist or has been removed.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
