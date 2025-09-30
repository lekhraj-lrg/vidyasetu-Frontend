import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, BookOpen, Users, BarChart } from "lucide-react";

const Loginpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Login Form */}
        <div>
          <div className="text-center mb-6">
            <span className="bg-green-700 text-white text-sm font-bold px-3 py-1 rounded-full">
              Welcome Back
            </span>
            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              Sign in to VidyaSetu
            </h2>
            <p className="text-gray-500 mt-1">
              Access your account to continue your academic journey
            </p>
          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Login to Your Account
            </h3>
            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email Address
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <Lock className="w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Remember me</span>
                </label>
                <button className="text-blue-600 hover:underline">
                  Forgot password?
                </button>
              </div>

              {/* Sign in button */}
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium shadow hover:bg-blue-800 transition">
                Sign In
              </button>
            </form>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                Sign up here
              </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-400">Or continue with</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            {/* Social logins */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="facebook"
                  className="w-5 h-5 mr-2"
                />
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Join Nepal's Largest Academic Community
          </h2>
          <p className="text-gray-500">
            Get access to thousands of study materials and connect with students nationwide.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-medium">Access Premium Content</h4>
                <p className="text-sm text-gray-500">
                  Download exclusive study materials and notes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm">
              <Users className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-medium">Join Community</h4>
                <p className="text-sm text-gray-500">
                  Connect with students across Nepal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm">
              <BarChart className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-medium">Track Progress</h4>
                <p className="text-sm text-gray-500">
                  Monitor your learning journey and achievements
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">10K+</h3>
              <p className="text-sm text-gray-500">Active Students</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600">5K+</h3>
              <p className="text-sm text-gray-500">Study Materials</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-600">25+</h3>
              <p className="text-sm text-gray-500">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
