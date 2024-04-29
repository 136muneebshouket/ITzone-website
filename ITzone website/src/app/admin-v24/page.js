import ServicesForm from "@/components/admin/ServicesForm";

const Page = () => {
    return (
        <div className='main_admin_page relative p-12 pt-4 bg-black w-full'>
            <h1 className="pb-10">Admin Portal</h1>
            <ServicesForm />
        </div>
    )
}

export default Page;
