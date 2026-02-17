import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    const username = localStorage.getItem("username") || "User";

    alert(`${username} logged out successfully ✅`);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");

    navigate("/login");
  };

  /* FETCH PROFILE */
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
      return;
    }

    api
      .get("/profile")
      .then((res) => {
        const data = res.data;
        setUser(data);

        setName(data.name || "");
        setEmail(data.email || "");
        setMobile(data.mobile || "");
        setDob(data.dob || "");
        setAddress(data.address || "");
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      });
  }, [navigate]);

  /* UPDATE PROFILE */
  const handleSaveProfile = async () => {
    try {
      const res = await api.put("/profile/update", {
        name,
        mobile,
        dob,
        address,
      });

      const updatedUser = res.data.user;

      setUser(updatedUser);
      setName(updatedUser.name || "");
      setMobile(updatedUser.mobile || "");
      setDob(updatedUser.dob || "");
      setAddress(updatedUser.address || "");

      alert("Profile updated successfully ✅");
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("accessToken");
        navigate("/login");
        return;
      }

      alert(error.response?.data?.message || "Update failed ❌");
    }
  };

  /* CHANGE PASSWORD */
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.put("/profile/change-password", {
        currentPassword,
        newPassword,
      });

      alert("Password updated successfully 🔐");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("accessToken");
        navigate("/login");
        return;
      }

      alert(error.response?.data?.message || "Password update failed ❌");
    }
  };

  return (
    <div className="container my-5 profile-animate">
      <div className="row g-4">
        {/* LEFT CARD – PROFILE */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4">
            <div className="d-flex align-items-center mb-4">
              <img
                src="/public/Images/s.jpg"
                alt="avatar"
                className="profile-avatar"
              />
              <div className="ms-3">
                <h5 className="mb-0">{name || "User"}</h5>
                <small className="text-muted">
                  {email || "user@email.com"}
                </small>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label>Full name</label>
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Mobile</label>
                <input
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Email</label>
                <input className="form-control" value={email} disabled />
              </div>

              <div className="col-md-6">
                <label>Date of birth</label>
                <input
                  type="date"
                  className="form-control"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label>Address</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="col-12 d-flex justify-content-end gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>

                <button className="btn btn-success" onClick={handleSaveProfile}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD – PASSWORD */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">Change Password</h5>

            <label>Current password</label>
            <div className="input-group mb-3">
              <input
                type={showCurrent ? "text" : "password"}
                className="form-control"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <label>New password</label>
            <div className="input-group mb-3">
              <input
                type={showNew ? "text" : "password"}
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <label>Confirm new password</label>
            <div className="input-group mb-4">
              <input
                type={showConfirm ? "text" : "password"}
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              className="btn btn-primary w-100"
              onClick={handleChangePassword}
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
