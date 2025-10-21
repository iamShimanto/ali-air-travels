import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import baseUrl from "../baseUrl";
import LoadingSpinner from "../utils/LoadingSpinner";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${baseUrl()}/package/all-package`);
        setPackages(res.data?.data || []);
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to load packages.");
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
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

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">All Packages</h2>
        <p className="text-gray-500">View and edit package details</p>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <Th>Title</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Accommodation</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {packages.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <Td>{pkg.title}</Td>
                <Td>{pkg.type}</Td>
                <Td>{pkg.category}</Td>
                <Td>{pkg.price}</Td>
                <Td>{pkg.accommodation}</Td>
                <Td>
                  <button
                    onClick={() => navigate(`/admin/packages/${pkg.id}`)}
                    className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                  >
                    View / Edit
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-800">{pkg.title}</h3>
            <div className="mt-2 text-gray-600 space-y-1 text-sm">
              <div>
                <strong>Type:</strong> {pkg.type}
              </div>
              <div>
                <strong>Category:</strong> {pkg.category}
              </div>
              <div>
                <strong>Price:</strong> {pkg.price}
              </div>
              <div>
                <strong>Accommodation:</strong> {pkg.accommodation}
              </div>
            </div>
            <button
              onClick={() => navigate(`/admin/packages/${pkg.id}`)}
              className="mt-3 w-full bg-indigo-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-indigo-700"
            >
              View / Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Th = ({ children }) => (
  <th className="text-left font-semibold p-3 whitespace-nowrap">{children}</th>
);
const Td = ({ children }) => (
  <td className="p-3 align-top whitespace-nowrap text-gray-700">{children}</td>
);

export default Packages;
