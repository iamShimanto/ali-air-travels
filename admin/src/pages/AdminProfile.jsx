import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";

const AdminProfile = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${baseUrl()}/auth/change-password`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(res.data.message || "Password changed successfully");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to change password. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Admin Profile
      </h2>
      <form onSubmit={handleChangePassword} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Old Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm New Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {message && <div className="text-green-600 text-sm">{message}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          disabled={loading}
        >
          {loading ? "Changing..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default AdminProfile;
