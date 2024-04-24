'use client'

const ServicesForm = () => {
    return (
        <form className="services_form bg-black w-[500px] flex flex-col gap-5">
            <div>
                <label htmlFor="heading">Heading</label>
                <input type="text" placeholder="heading" name="heading" />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <input type="text" placeholder="content" name="content" />
            </div>
            <div>
                <label htmlFor="heading2">Heading 2</label>
                <textarea type="text" placeholder="2nd Heading" name="heading2" />
            </div>
            <div>
                <label htmlFor="heading2">Name</label>
                <input type="text" placeholder="2nd Heading" name="heading2" />
            </div>
            <div>
                <label htmlFor="heading2">Name</label>
                <input type="text" placeholder="2nd Heading" name="heading2" />
            </div>
            <div>
                <label htmlFor="heading2">Featured Image</label>
                <input type="file" placeholder="2nd Heading" name="Featured Image" />
            </div>
        </form>
    );
}

export default ServicesForm;