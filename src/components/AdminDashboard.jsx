import React from "react";
import BookManagement from "./BookManagement";
import AuthorManagement from "./AuthorManagement";
import "../App.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="library-system-container">
        <h2 className="library-heading">Library Management System</h2>
        <div className="management-sections">
          <div className="book-management-section">
            <BookManagement />
          </div>
          <div className="author-management-section">
            <AuthorManagement />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
