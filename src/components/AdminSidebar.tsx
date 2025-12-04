import { NavLink } from "react-router-dom";
import LogoImg from "../assets/svg/logo.svg";

// Icons
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function AdminSidebar() {
  // Faol link uchun base va active klasslari
  const navLinkBaseClasses =
    "mb-2 flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200";
  const navLinkActiveClasses = "bg-primary-600 text-white shadow-md";
  const navLinkInactiveClasses =
    "text-gray-600 hover:bg-primary-50 hover:text-primary-700";

  return (
    <aside className="h-screen w-[25%] min-w-[250px] border-r border-gray-200 bg-white">
      <div className="p-6">
        <img className="mb-1" src={LogoImg} alt="Logo" />
        <p className="text-text-secondary text-sm">Admin Panel</p>
      </div>

      <nav className="space-y-1 p-4">
        {/* Dashboard */}
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${navLinkBaseClasses} ${
              isActive ? navLinkActiveClasses : navLinkInactiveClasses
            }`
          }
        >
          <MdOutlineDashboard className="text-lg" />
          <span className="font-medium">Dashboard</span>
        </NavLink>

        {/* Posts */}
        <NavLink
          to="/admin/create-post"
          className={({ isActive }) =>
            `${navLinkBaseClasses} ${
              isActive ? navLinkActiveClasses : navLinkInactiveClasses
            }`
          }
        >
          <MdOutlinePostAdd className="text-lg" />
          <span className="font-medium">Posts</span>
        </NavLink>

        {/* Create Post */}
        <NavLink
          to="/admin/edit-post/:id"
          className={({ isActive }) =>
            `${navLinkBaseClasses} ${
              isActive ? navLinkActiveClasses : navLinkInactiveClasses
            }`
          }
        >
          <FaPlus className="text-lg" />
          <span className="font-medium">Create Post</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
