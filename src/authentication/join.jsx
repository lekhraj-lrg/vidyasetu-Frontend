import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, MapPin, GraduationCap, CheckCircle } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <button className="bg-green-700 text-white text-sm font-bold px-3 py-1 rounded-full">
            Join VidyaSetu
          </button>
          <h2 className="text-3xl font-bold text-gray-800">
            Start Your Academic Journey Today
          </h2>
          <p className="text-gray-500">
            Join thousands of students across Nepal sharing knowledge and resources.
          </p>

          {/* Features */}
          <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-3">
            <h3 className="font-semibold text-gray-700 mb-2">What you'll get:</h3>
            {[
              "Access to 5000+ study materials",
              "Join academic community discussions",
              "Buy and sell textbooks marketplace",
              "Get personalized recommendations",
              "Track your learning progress",
              "Connect with seniors and mentors",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">10K+</h3>
              <p className="text-sm text-gray-500">Students</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600">5K+</h3>
              <p className="text-sm text-gray-500">Materials</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-600">95%</h3>
              <p className="text-sm text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div>
          <div className="bg-white border rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h2>
            <p className="text-gray-500 mb-6">
              Join VidyaSetu and start learning
            </p>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                <div className="flex items-center border rounded-lg px-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                <div className="flex items-center border rounded-lg px-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Grade + City */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Current Grade</label>
                  <div className="flex items-center border rounded-lg px-3">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <select className="w-full px-2 py-2 outline-none">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">City</label>
                  <div className="flex items-center border rounded-lg px-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <select className="w-full px-2 py-2 outline-none">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Password</label>
                <div className="flex items-center border rounded-lg px-3">
                  <Lock className="w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
                <div className="flex items-center border rounded-lg px-3">
                  <Lock className="w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1 rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  Subscribe to our newsletter for updates and tips
                </span>
              </div>

              {/* Submit */}
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium shadow hover:bg-blue-800 transition">
                Create Account
              </button>
            </form>

            {/* Already account */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-medium hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
