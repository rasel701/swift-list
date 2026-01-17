import LoginPage from "@/components/LoginPage";
import React, { Suspense } from "react";

const LoginSkeleton = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-[400px] h-[500px] bg-gray-100 rounded-3xl animate-pulse" />
  </div>
);

const Login = () => {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginPage />
    </Suspense>
  );
};

export default Login;
