"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "< 2,000€",
    service: "Design / Dev Consulting",
    message: "",
    consent: false,
  });
  const [localTime, setLocalTime] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Validate that all fields are filled
    const { name, email, budget, service, message } = formData;
    if (!name || !email || !budget || !service || !message) {
      // Set a timeout to delay the error notification
      setTimeout(() => {
        toast.error("Please fill in all fields!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, 500); // 500ms delay
    } else {
      console.log("Form submitted:", formData);
      
      // Set a timeout to delay the success notification
      setTimeout(() => {
        toast.success("Your message has been sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, 500); // 500ms delay
      
      // Optionally, clear the form after submission
      setFormData({
        name: "",
        email: "",
        budget: "< 2,000€",
        service: "Design / Dev Consulting",
        message: "",
        consent: false,
      });
    }
  };

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setLocalTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    updateTime(); // Set initial time
    const timer = setInterval(updateTime, 60000); // Update time every 1 minute

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  return (
    <div id="Contact" className="bg-gray-600 flex flex-col items-start space-y-4 p-8 text-white md:flex-row md:space-y-0 md:space-x-8 md:justify-around">
      <div className="text-white h-2/3 flex flex-col justify-between ">
        <div>
          <h2 className="text-lg text-orange-500 font-semibold">Contact</h2>
          <p className="mt-2 text-3xl font-bold">Want to work with me?</p>
          <p className="mt-2 text-3xl font-bold">I’d love to hear from you!</p>
        </div>
        <p className="mt-4 font-semibold">Local time: {localTime}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg gap-4 grid grid-cols-2 bg-gray-900 p-6 rounded-md text-white shadow-lg"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="outline-none mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="j.doe@company.com"
            className="mt-1 w-full rounded-md border focus:outline-none border-gray-700 bg-gray-800 p-2 text-white focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-400">
            Budget Range in €
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="outline-none mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:border-orange-500 focus:ring-orange-500"
          >
            <option>&lt; 2,000€</option>
            <option>2,000 - 10,000€</option>
            <option>10,000 - 20,000€</option>
            <option>20 - 50,000€</option>
            <option>50,000€ +</option>
          </select>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-400">
            Services
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="outline-none mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:border-orange-500 focus:ring-orange-500"
          >
            <option>Design / Dev Consulting</option>
            <option>Full Project Development</option>
            <option>UI/UX Design</option>
          </select>
        </div>

        <div className="col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hello, can you help me with...?"
            className="outline-none mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-orange-500 py-2 text-center font-semibold text-white hover:bg-orange-600"
        >
          Send
        </button>
      </form>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
}
