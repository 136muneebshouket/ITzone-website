import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-[100vh] ">
            <Sidebar />
            <>
                {children}
            </>
        </div>
    );
}

export default AdminLayout;