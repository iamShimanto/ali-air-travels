import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";
import LoadingSpinner from "../utils/LoadingSpinner";

const OverView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${baseUrl()}/overview`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data?.data || null);
      } catch (err) {
        const msg = err?.response?.data?.message || "Failed to load overview";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    fetchOverview();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          {error}
        </div>
      </div>
    );

  const usersTotal = data?.users?.total || 0;
  const packagesTotal = data?.packages?.total || 0;
  const bookingsTotal = data?.bookings?.total || 0;
  const byStatus = data?.bookings?.byStatus || {};
  const recent = data?.bookings?.recent || [];

  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <KpiCard
          title="Total Users"
          value={usersTotal}
          className="from-emerald-500 to-emerald-600"
        />
        <KpiCard
          title="Total Packages"
          value={packagesTotal}
          className="from-indigo-500 to-indigo-600"
        />
        <KpiCard
          title="Total Bookings"
          value={bookingsTotal}
          className="from-amber-500 to-amber-600"
        />
      </div>

      {/* Booking Status Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <h3 className="text-lg font-semibold mb-4">Booking Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatusPill
            label="Pending"
            value={byStatus?.pending || 0}
            color="bg-yellow-100 text-yellow-800 border-yellow-200"
          />
          <StatusPill
            label="Confirmed"
            value={byStatus?.confirmed || 0}
            color="bg-green-100 text-green-800 border-green-200"
          />
          <StatusPill
            label="Cancelled"
            value={byStatus?.cancelled || 0}
            color="bg-red-100 text-red-800 border-red-200"
          />
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Recent Bookings</h3>
          <p className="text-sm text-gray-500">Latest 5 bookings</p>
        </div>
        {/* Mobile (cards) */}
        <div className="sm:hidden p-4 space-y-3">
          {recent.length === 0 && (
            <div className="text-center text-gray-500">No recent bookings</div>
          )}
          {recent.map((b) => (
            <div key={b._id} className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-gray-800">
                    {b.customer_name || "N/A"}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {b.customer_email || ""}
                  </div>
                </div>
                <StatusBadge status={b.status} />
              </div>
              <div className="mt-3 text-sm text-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Phone</span>
                  <span>{b.customer_phone || "N/A"}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-500">Package</span>
                  <span className="text-right ml-3">
                    {b.packageId?.title_en || b.packageId?.title_bn || "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-500">Date</span>
                  <span>
                    {b.createdAt ? new Date(b.createdAt).toLocaleString() : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet (table) */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <Th>Customer</Th>
                <Th>Contact</Th>
                <Th>Package</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recent.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No recent bookings
                  </td>
                </tr>
              )}
              {recent.map((b) => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <Td>
                    <div className="font-medium text-gray-800">
                      {b.customer_name || "N/A"}
                    </div>
                    <div className="text-gray-500">
                      {b.customer_email || ""}
                    </div>
                  </Td>
                  <Td>
                    <span className="text-gray-700">
                      {b.customer_phone || "N/A"}
                    </span>
                  </Td>
                  <Td>
                    <span className="text-gray-700">
                      {b.packageId?.title_en || b.packageId?.title_bn || "N/A"}
                    </span>
                  </Td>
                  <Td>
                    <StatusBadge status={b.status} />
                  </Td>
                  <Td>
                    {b.createdAt ? new Date(b.createdAt).toLocaleString() : ""}
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br ${className}`}
    >
      <div className="p-5 bg-white/70 backdrop-blur">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
      </div>
      <div className="absolute -right-6 -bottom-6 opacity-20">
        <div className="h-24 w-24 rounded-full bg-white" />
      </div>
    </div>
  );
};

const StatusPill = ({ label, value, color }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border p-4 ${color}`}
    >
      <span className="font-medium">{label}</span>
      <span className="text-lg font-semibold">{value}</span>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const map = {
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    confirmed: "bg-green-100 text-green-800 border-green-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
  };
  const cls = map[status] || "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span className={`px-3 py-1 rounded-full text-xs border ${cls}`}>
      {status}
    </span>
  );
};

const Th = ({ children }) => (
  <th className="text-left font-semibold p-3 whitespace-nowrap">{children}</th>
);
const Td = ({ children }) => (
  <td className="p-3 align-top whitespace-nowrap">{children}</td>
);

export default OverView;
