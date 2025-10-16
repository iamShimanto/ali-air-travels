import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";
import LoadingSpinner from "../utils/LoadingSpinner";
import { toast } from "react-toastify";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("user");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${baseUrl()}/auth/all-users`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { role: roleFilter },
        });
        setUsers(res.data?.data?.users || []);
      } catch (err) {
        const msg = err?.response?.data?.message || "Failed to fetch users";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [roleFilter]);

  const openDetails = async (userId) => {
    setSelectedUserId(userId);
    setDetail(null);
    setDetailLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl()}/auth/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDetail(res.data?.data || null);
    } catch (err) {
      const msg = err?.response?.data?.message || "Failed to fetch details";
      toast.error(msg);
    } finally {
      setDetailLoading(false);
    }
  };

  const closeDetails = () => {
    setSelectedUserId(null);
    setDetail(null);
  };

  const handleRoleUpdate = async (userId, newRole) => {
    try {
      setUpdating(true);
      const token = localStorage.getItem("token");
      await axios.put(
        `${baseUrl()}/auth/user/${userId}`,
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("User role updated");
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? { ...u, role: newRole } : u))
      );

      if (detail && detail._id === userId) {
        setDetail({ ...detail, role: newRole });
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Failed to update role";
      toast.error(msg);
    } finally {
      setUpdating(false);
    }
  };

  const header = useMemo(
    () => (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-xl font-semibold">Users</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRoleFilter("user")}
            className={`px-3 py-2 rounded-md text-sm font-medium border ${
              roleFilter === "user"
                ? "bg-gray-900 text-white border-gray-900"
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setRoleFilter("admin")}
            className={`px-3 py-2 rounded-md text-sm font-medium border ${
              roleFilter === "admin"
                ? "bg-gray-900 text-white border-gray-900"
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
          >
            Admins
          </button>
        </div>
      </div>
    ),
    [roleFilter]
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
        {users.length === 0 && (
          <div className="text-center text-gray-500">No users found</div>
        )}
        {users.map((u) => (
          <div key={u._id} className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-800">{u.fullName}</div>
                <div className="text-gray-500 text-sm">{u.email}</div>
              </div>
              <span className="px-2 py-1 text-xs rounded-full border bg-gray-100 text-gray-700 border-gray-200">
                {u.role}
              </span>
            </div>
            <div className="mt-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Phone</span>
                <span>{u.phone}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-500">Verified</span>
                <span>{u.isVerified ? "Yes" : "No"}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                onClick={() => openDetails(u._id)}
                className="px-3 py-2 rounded-md text-sm border border-gray-300 hover:bg-gray-100"
              >
                Details
              </button>
              <RoleSelect
                value={u.role}
                disabled={updating}
                onChange={(r) => handleRoleUpdate(u._id, r)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Role</Th>
              <Th>Verified</Th>
              <Th className="text-right">Actions</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-gray-50">
                <Td>{u.fullName}</Td>
                <Td>{u.email}</Td>
                <Td>{u.phone}</Td>
                <Td>
                  <span className="px-2 py-1 text-xs rounded-full border bg-gray-100 text-gray-700 border-gray-200">
                    {u.role}
                  </span>
                </Td>
                <Td>{u.isVerified ? "Yes" : "No"}</Td>
                <Td>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => openDetails(u._id)}
                      className="px-3 py-2 rounded-md text-sm border border-gray-300 hover:bg-gray-100"
                    >
                      Details
                    </button>
                    <RoleSelect
                      value={u.role}
                      disabled={updating}
                      onChange={(r) => handleRoleUpdate(u._id, r)}
                    />
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {selectedUserId && (
        <Modal onClose={closeDetails} title="User Details">
          {detailLoading ? (
            <LoadingSpinner />
          ) : detail ? (
            <div className="space-y-2 text-sm">
              <Row label="Name" value={detail.fullName} />
              <Row label="Email" value={detail.email} />
              <Row label="Phone" value={detail.phone} />
              <Row label="Role" value={detail.role} />
              <Row label="Verified" value={detail.isVerified ? "Yes" : "No"} />
              <Row
                label="Created"
                value={
                  detail.createdAt
                    ? new Date(detail.createdAt).toLocaleString()
                    : ""
                }
              />
              <Row
                label="Updated"
                value={
                  detail.updatedAt
                    ? new Date(detail.updatedAt).toLocaleString()
                    : ""
                }
              />
              <div className="pt-3">
                <label className="text-xs text-gray-500">Update role</label>
                <div className="mt-1">
                  <RoleSelect
                    value={detail.role}
                    disabled={updating}
                    onChange={(r) => handleRoleUpdate(detail._id, r)}
                  />
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

const Th = ({ children, className = "" }) => (
  <th className={`text-left font-semibold p-3 whitespace-nowrap ${className}`}>
    {children}
  </th>
);
const Td = ({ children }) => (
  <td className="p-3 align-top whitespace-nowrap">{children}</td>
);

const Row = ({ label, value }) => (
  <div className="flex items-center justify-between gap-3">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

const RoleSelect = ({ value, onChange, disabled }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    disabled={disabled}
    className="px-2 py-2 rounded-md border border-gray-300 bg-white text-sm"
  >
    <option value="user">user</option>
    <option value="admin">admin</option>
  </select>
);

const Modal = ({ children, onClose, title }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-base font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="p-4 max-h-[75vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Users;
