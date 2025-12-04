import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
