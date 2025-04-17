import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

  

function UserSetupPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    musicType: "",
    frequency: "",
    bio: "",
    profilePic: null
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, profilePic: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/homepage');
    alert("Your profile has been saved! 🎉");
  };

  return (
    <div
      className=" text-white min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900"
    
    >
      <div className="bg-white rounded-lg shadow dark:border    dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm p-6 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Setup Your Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4" style={{
        backgroundImage: `url('/.jpg')` // <- Replace with your image path
      }}>
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            {formData.profilePic ? (
              <img
                src={formData.profilePic}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center mb-2">
                <span className="text-gray-600 text-sm">No Image</span>
              </div>
            )}
            <label className="cursor-pointer text-blue-600 hover:underline text-sm">
              Upload Profile Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-600"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-1 text-white">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-600"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 mb-1 text-white">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-600 "
              min="18"
              max="100"
              required
            />
          </div>

          {/* Music Type */}
          <div>
            <label className="block text-white mb-1">Preferred Music Type</label>
            <select
              name="musicType"
              value={formData.musicType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-600"
              required
            >
              <option className="text-black" value="">Select</option>
              <option className="text-black" value="EDM">EDM</option>
              <option className="text-black" value="Bollywood">Bollywood</option>
              <option className="text-black" value="Techno">Techno</option>
              <option className="text-black" value="HipHop">Hip-Hop</option>
              <option className="text-black" value="Mixed">Mixed</option>
            </select>
          </div>

          {/* Clubbing Frequency */}
          <div>
            <label className="block text-white mb-1">How Often Do You Club?</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-600"
              required
            >
              <option className="text-black" value="">Select</option>
              <option className="text-black" value="Every Weekend">Every Weekend</option>
              <option className="text-black" value="Twice a Month">Twice a Month</option>
              <option className="text-black" value="Occasionally">Occasionally</option>
              <option className="text-black" value="Rarely">Rarely</option>
            </select>
          </div>

          {/* Bio / Special Requests */}
          <div>
            <label className="block text-gray-700 mb-1 text-white">Tell us more about your vibe!</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-600"
              rows="3"
              placeholder="E.g. I prefer rooftop clubs / I love live DJ sets!"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserSetupPage;
