import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import baseUrl from "../baseUrl";
import LoadingSpinner from "../utils/LoadingSpinner";

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await axios.get(`${baseUrl()}/package/package/${id}`);
        setPkg(res.data?.data);
        setFormData(res.data?.data);
      } catch {
        alert("Failed to load package details");
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");
      await axios.put(`${baseUrl()}/package/package/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Package updated successfully!");
      navigate("/packages");
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to update package");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Edit Package</h2>
        <button
          onClick={() => navigate("/packages")}
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          ← Back to Packages
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
          <Input
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <Input
            label="Title (English)"
            name="title_en"
            value={formData.title_en}
            onChange={handleChange}
          />
          <Input
            label="Title (Bangla)"
            name="title_bn"
            value={formData.title_bn}
            onChange={handleChange}
          />
          <Input
            label="Price (English)"
            name="price_en"
            value={formData.price_en}
            onChange={handleChange}
          />
          <Input
            label="Price (Bangla)"
            name="price_bn"
            value={formData.price_bn}
            onChange={handleChange}
          />
          <Input
            label="Duration (English)"
            name="duration_en"
            value={formData.duration_en}
            onChange={handleChange}
          />
          <Input
            label="Duration (Bangla)"
            name="duration_bn"
            value={formData.duration_bn}
            onChange={handleChange}
          />
          <TextArea
            label="Accommodation (English)"
            name="accommodation_en"
            value={formData.accommodation_en}
            onChange={handleChange}
          />
          <TextArea
            label="Accommodation (Bangla)"
            name="accommodation_bn"
            value={formData.accommodation_bn}
            onChange={handleChange}
          />
          <TextArea
            label="Meal (English)"
            name="meal_en"
            value={formData.meal_en}
            onChange={handleChange}
          />
          <TextArea
            label="Meal (Bangla)"
            name="meal_bn"
            value={formData.meal_bn}
            onChange={handleChange}
          />
          <TextArea
            label="Transport (English)"
            name="transport_en"
            value={formData.transport_en}
            onChange={handleChange}
          />
          <TextArea
            label="Transport (Bangla)"
            name="transport_bn"
            value={formData.transport_bn}
            onChange={handleChange}
          />
          <TextArea
            label="Makkah Accommodation (English)"
            name="makkah_accommodation_en"
            value={formData.makkah_accommodation_en}
            onChange={handleChange}
          />
          <TextArea
            label="Makkah Accommodation (Bangla)"
            name="makkah_accommodation_bn"
            value={formData.makkah_accommodation_bn}
            onChange={handleChange}
          />
          <TextArea
            label="Madinah Accommodation (English)"
            name="madinah_accommodation_en"
            value={formData.madinah_accommodation_en}
            onChange={handleChange}
          />
          <TextArea
            label="Madinah Accommodation (Bangla)"
            name="madinah_accommodation_bn"
            value={formData.madinah_accommodation_bn}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            disabled={saving}
            onClick={handleSave}
            className={`px-6 py-2 rounded-lg text-white ${
              saving ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value || ""}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
  </div>
);

const TextArea = ({ label, name, value, onChange }) => (
  <div className="sm:col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      name={name}
      value={value || ""}
      onChange={onChange}
      rows="3"
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    ></textarea>
  </div>
);

export default EditPackage;
