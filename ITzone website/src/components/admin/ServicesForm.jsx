'use client'
import { useState, useRef } from "react";
import InputForm from "./InputForm"; 
// import ImageKit from "imagekit";
// import slugify from 'slugify';
import axios from "axios";


// const imageKit = new ImageKit({
//   publicKey: process.env.publicKey,
//   privateKey: process.env.privateKey,
//   urlEndpoint: process.env.urlEndPoint,
// });

const ServicesForm = () => {

  const [imagestoshow, setImagestoshow] = useState([]);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    heading: "",
    content: "",
    img: {}, // Assuming you'll handle image upload logic elsewhere
    heading2: "",
    accordions: [], // Array to store accordion data
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target; // Destructure for clarity
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file or text input
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(formData);
    // return;

    if (formData.heading == "" || formData.content == "" || formData.heading2 == '' || formData.accordions == []) {

      if(formData.heading == ""){ alert("Heading is not here"); return;}
      alert("Some Data Fields are Empty. Fill All of them...");
      return;
    }   
    const heading = formData.heading,
    content = formData.content,
    heading2 = formData.heading2,
    accordian = formData.accordions;

    axios.post('/api/services', {heading, content, heading2, accordian })
      .then((result) => {console.log(result)})
      .catch((error) => {
        console.error("Form submission error:", error);
        // Handle submission errors (e.g., display error message)
      });
  };

  const ImagePickedHandler = async (e) => {
    const files = e.target.files;
    if (files.length > 20 || imagestoshow.length >= 20) {
      alert('Maximum 20 images are allowed')

      return;
    }

    try {
      const promises = [];

      // Loop through the selected files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Check if the size of the current image exceeds the limit (4MB)
        if (file.size > 6 * 1024 * 1024) {
          alert('Image size should not exceed 6MB.')
          continue;
        }

        // Read the selected image and convert it to a Data URL
        const reader = new FileReader();
        // console.log(reader)

        const promise = new Promise((resolve) => {
          reader.onload = (e) => {
            setImagestoshow((prevSelectedImages) => [
              ...prevSelectedImages,
              { url: e.target.result, filename: file.name },
            ]);
            resolve();
          };
        });

        reader.readAsDataURL(file);
        promises.push(promise);
      }

      await Promise.all(promises); // Wait for all file reading operations to complete

      console.log(promises);
    } catch (error) {
      // Handle any potential errors
      console.error("Error reading images:", error);

    } finally {
      // setLoading(false); // Set the loading state to false after all images are processed
      // console.log("Images are uploaded");
    }

    // Clear the file input after image selection
    fileInputRef.current.value = null;
  };

  return (
    <form className="services_form w-full flex flex-col gap-5 text-white">
      <div className="flex">
        {/* First section - Heading, Content, Featured Image, Heading2 */}
        <div className="flex flex-col">
          <div>
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              placeholder="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              placeholder="content"
              rows={3}
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="heading2">Featured Image</label>
            {/* Assuming you'll handle image upload logic elsewhere */}
            <input type="file" name="img" onChange={()=>{handleChange;ImagePickedHandler; }} />
          </div>

          <div>
            <label htmlFor="heading2">Heading2</label>
            <input
              type="text"
              placeholder="heading2"
              name="heading2"
              value={formData.heading2}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Dynamic Input Fields (Assuming InputForm handles them) */}
        <div className=" flex-col items-start">
          <InputForm formData={formData} setFormData={setFormData} />
        </div>
      </div>

      <button
        type="submit"
        onClick={submitHandler}
        className="bg-amber-500 rounded-xl px-4 py-2"
        name="submit"
      >
        Upload
      </button>
    </form>
  );
};

export default ServicesForm;
