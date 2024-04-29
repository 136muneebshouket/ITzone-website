import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-min-[100vh] ">
            <Sidebar />
            <>
                {children}
            </>
        </div>
    );
}

export default AdminLayout;