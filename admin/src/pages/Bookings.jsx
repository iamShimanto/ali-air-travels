import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";
import LoadingSpinner from "../utils/LoadingSpinner";
import { toast } from "react-toastify";

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

const Th = ({ children, className = "" }) => (
  <th className={`text-left font-semibold p-3 whitespace-nowrap ${className}`}>
    {children}
  </th>
);
const Td = ({ children }) => (
  <td className="p-3 align-top whitespace-nowrap">{children}</td>
);

const Bookings = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState([]);

  const [status, setStatus] = useState("");
  const [query, setQuery] = useState({ phone: "", email: "" });

  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  const fetchList = async (params = {}) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${baseUrl()}/booking/get-booking`, {
        params,
      });
      setBookings(res.data?.data || []);
    } catch (err) {
      const msg = err?.response?.data?.message || "Failed to fetch bookings";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = {};
    if (status) params.status = status;
    fetchList(params);
  }, [status]);

  const searchByContact = useCallback(async () => {
    try {
      setLoading(true);
      const params = {};
      if (query.phone) params.phone = query.phone;
      if (query.email) params.email = query.email;
      if (!params.phone && !params.email)
        return fetchList(status ? { status } : {});
      const res = await axios.get(
        `${baseUrl()}/booking/get-booking-by-contact`,
        { params }
      );
      setBookings(res.data?.data || []);
    } catch (e) {
      const msg = e?.response?.data?.message || "Search failed";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, [status, query.phone, query.email]);

  const openDetails = async (id) => {
    setSelectedId(id);
    setSelected(null);
    setDetailLoading(true);
    try {
      const res = await axios.get(`${baseUrl()}/booking/booking/${id}`);
      setSelected(res.data?.data || null);
    } catch {
      toast.error("Failed to load booking");
    } finally {
      setDetailLoading(false);
    }
  };

  const closeDetails = () => {
    setSelectedId(null);
    setSelected(null);
  };

  const updateStatus = async (id, newStatus) => {
    try {
      setUpdating(true);
      const token = localStorage.getItem("token");
      await axios.patch(
        `${baseUrl()}/booking/bookings/${id}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Status updated");
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
      );
      if (selected && selected._id === id)
        setSelected({ ...selected, status: newStatus });
    } catch {
      toast.error("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  const header = useMemo(
    () => (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-xl font-semibold">Bookings</h2>
        <div className="flex items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-2 py-2 rounded-md border border-gray-300 bg-white text-sm"
          >
            <option value="">All</option>
            <option value="pending">pending</option>
            <option value="confirmed">confirmed</option>
            <option value="cancelled">cancelled</option>
          </select>
          <input
            placeholder="Phone"
            value={query.phone}
            onChange={(e) => setQuery((p) => ({ ...p, phone: e.target.value }))}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm"
          />
          <input
            placeholder="Email"
            value={query.email}
            onChange={(e) => setQuery((p) => ({ ...p, email: e.target.value }))}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm"
          />
          <button
            onClick={searchByContact}
            className="px-3 py-2 rounded-md text-sm font-medium border bg-gray-900 text-white border-gray-900"
          >
            Search
          </button>
        </div>
      </div>
    ),
    [status, query.phone, query.email, searchByContact]
  );

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="p-6">
        {header}
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mt-4">
          {error}
        </div>
      </div>
    );

  return (
    <div className="p-6 space-y-4">
      {header}

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3 mt-2">
        {bookings.length === 0 && (
          <div className="text-center text-gray-500">No bookings found</div>
        )}
        {bookings.map((b) => (
          <div key={b._id} className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-800">
                  {b.customer_name}
                </div>
                <div className="text-gray-500 text-sm">{b.customer_email}</div>
              </div>
              <StatusBadge status={b.status} />
            </div>
            <div className="mt-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Phone</span>
                <span>{b.customer_phone}</span>
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
            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                onClick={() => openDetails(b._id)}
                className="px-3 py-2 rounded-md text-sm border border-gray-300 hover:bg-gray-100"
              >
                Details
              </button>
              <select
                disabled={updating}
                value={b.status}
                onChange={(e) => updateStatus(b._id, e.target.value)}
                className="px-2 py-2 rounded-md border border-gray-300 bg-white text-sm"
              >
                <option value="pending">pending</option>
                <option value="confirmed">confirmed</option>
                <option value="cancelled">cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <Th>Customer</Th>
              <Th>Contact</Th>
              <Th>Package</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th className="text-right">Actions</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No bookings found
                </td>
              </tr>
            )}
            {bookings.map((b) => (
              <tr key={b._id} className="hover:bg-gray-50">
                <Td>
                  <div className="font-medium text-gray-800">
                    {b.customer_name}
                  </div>
                  <div className="text-gray-500">{b.customer_email}</div>
                </Td>
                <Td>{b.customer_phone}</Td>
                <Td>
                  {b.packageId?.title_en || b.packageId?.title_bn || "N/A"}
                </Td>
                <Td>
                  <StatusBadge status={b.status} />
                </Td>
                <Td>
                  {b.createdAt ? new Date(b.createdAt).toLocaleString() : ""}
                </Td>
                <Td>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => openDetails(b._id)}
                      className="px-3 py-2 rounded-md text-sm border border-gray-300 hover:bg-gray-100"
                    >
                      Details
                    </button>
                    <select
                      disabled={updating}
                      value={b.status}
                      onChange={(e) => updateStatus(b._id, e.target.value)}
                      className="px-2 py-2 rounded-md border border-gray-300 bg-white text-sm"
                    >
                      <option value="pending">pending</option>
                      <option value="confirmed">confirmed</option>
                      <option value="cancelled">cancelled</option>
                    </select>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {selectedId && (
        <Modal onClose={closeDetails} title="Booking Details">
          {detailLoading ? (
            <LoadingSpinner />
          ) : selected ? (
            <div className="space-y-2 text-sm">
              <Row label="Customer" value={selected.customer_name} />
              <Row label="Email" value={selected.customer_email} />
              <Row label="Phone" value={selected.customer_phone} />
              <Row
                label="Status"
                value={<StatusBadge status={selected.status} />}
              />
              <Row
                label="Package"
                value={
                  selected.packageId?.title_en ||
                  selected.packageId?.title_bn ||
                  "N/A"
                }
              />
              {selected.notes && <Row label="Notes" value={selected.notes} />}
              <Row
                label="Created"
                value={
                  selected.createdAt
                    ? new Date(selected.createdAt).toLocaleString()
                    : ""
                }
              />
              <div className="pt-3">
                <label className="text-xs text-gray-500">Update status</label>
                <div className="mt-1">
                  <select
                    disabled={updating}
                    value={selected.status}
                    onChange={(e) => updateStatus(selected._id, e.target.value)}
                    className="px-2 py-2 rounded-md border border-gray-300 bg-white text-sm"
                  >
                    <option value="pending">pending</option>
                    <option value="confirmed">confirmed</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-500">No details</div>
          )}
        </Modal>
      )}
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex items-center justify-between gap-3">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-800 text-right ml-3">{value}</span>
  </div>
);

const Modal = ({ children, onClose, title }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-base font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="p-4 max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
