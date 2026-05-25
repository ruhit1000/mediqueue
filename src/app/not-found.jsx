import Link from "next/link";


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-9xl font-bold text-teal-600">404</h1>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">
        Page Not Found
      </h2>
      
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 font-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;