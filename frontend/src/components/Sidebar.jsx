import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
    const links = [
        { path: "/dashboard", label: "Dashboard", roles: ["admin", "manager","cashier", "kitchen_staff"] },
        { path: "/users", label: "Users", roles: ["admin", "manager"] },
        { path: "/tables", label: "Tables", roles: ["admin", "manager"] },
        { path: "/customers", label: "Customers", roles: ["admin", "manager","cashier"] },
        { path: "/catagories", label: "Categories", roles: ["admin", "manager"] },
        { path: "/menu-items", label: "Menu Items", roles: ["admin", "manager", "kitchen_staff"] },
        { path: "/orders", label: "Orders", roles: ["admin", "manager", "cashier"] },
        { path: "/kitchen", label: "Kitchen", roles: ["admin", "manager", "kitchen_staff"] },
        { path: "/billing", label: "Billing", roles: ["admin", "manager", "cashier"] },
        { path: "/reports", label: "Reports", roles: ["admin", "manager"] },
    ];

    return (
        <div className="sidebar">
            {
                links.filter(link => link.roles.includes(role)).map(link => (
                    <NavLink key={link.path} to={link.path} className="sidebar-link">
                        {link.label}
                    </NavLink>
                ))
            }
        </div>
    );
}   
export default Sidebar;