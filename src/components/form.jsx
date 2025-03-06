import { useState } from "react"

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [ errors, setErrors ] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.email.trim()) newErrors.email = "Required";
        if (!formData.message.trim()) newErrors.message = "Required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log("Form submitted:", formData);
        }
      };
    return (
        <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit} className="w-[70vw] font-primary pb-20 lg:w-[54vw] lg:pl-30 xl:w-[50vw] xl:pr-11">
                    <div className="mb-6 w-full">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="NAME"
                            className="w-full bg-transparent border-b border-white py-2 outline-none tracking-tighter placeholder-white placeholder:font-extralight"
                        />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="mb-6">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL"
                        className="w-full bg-transparent border-b border-white py-2 outline-none tracking-tighter placeholder:font-extralight placeholder-white"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-6">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="MESSAGE"
                        className="w-full bg-transparent border-b border-white py-2 outline-none tracking-tighter placeholder:font-extralight placeholder-white resize-none"
                        rows="4"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                    type="submit"
                    className="w-full py-1.5 mt-4 border border-[#FF4900] bg-[#FF4900] text-white tracking-wide uppercase transition-transform duration-300 hover:scale-105"
                    >
                    Send
                    </button>
                </form>
            </div>
    )
}

export default Form