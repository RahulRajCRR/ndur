
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen animated-bg flex items-center justify-center">
      <div className="text-center p-12 rounded-xl bg-black/30 border border-white/10">
        <h1 className="text-6xl font-bold mb-4 text-ndur-red">404</h1>
        <p className="text-2xl text-white mb-8">Oops! Page not found</p>
        <Link to="/" className="primary-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
