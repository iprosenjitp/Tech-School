import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-open pt-32">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-32 h-full bg-base-200 text-base-content md:w-60">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to="/dashboard/manage-users">All Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/create-course">Create Course</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-courses">All Courses</NavLink>
                        </li>

                    </ul>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;