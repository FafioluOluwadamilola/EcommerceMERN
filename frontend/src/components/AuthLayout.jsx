const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm">

        <h1 className="text-2xl font-bold text-center mb-2">
          {title}
        </h1>

        <p className="text-gray-500 text-center mb-6">
          {subtitle}
        </p>

        {children}

      </div>

    </div>
  );
};

export default AuthLayout;