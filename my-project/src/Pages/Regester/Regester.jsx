import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FileUploader } from "react-drag-drop-files";
import useAxiosPublic from "../../Components/hooks/useAxiosPublic";
import axios from "axios";
const fileTypes = ["JPG", "PNG", "GIF"];
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const Regester = () => {
  const [userimg , setUserimg] = useState('')
  console.log(userimg);
  const [selectedRole, setSelectedRole] = useState("Employee");
  console.log(selectedRole);
  const axiosPublic = useAxiosPublic();
  const notify = () => toast("Sucessfully regester");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createAccountEmailPassword } = useContext(AuthContext);

  // console.log(createAccountEmailPassword);
  const handleRegester = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const bank_account_no = e.target.bank_account_no.value;
    const salary = e.target.salary.value;
    const designation = e.target.designation.value;
    const fullname = e.target.fullname.value;
    console.log(
      email,
      password,
      bank_account_no,
      salary,
      designation,
      fullname,
      userimg,
    );
    const userInformation = {
      email,
      password,
      bank_account_no,
      salary,
      designation,
      fullname,
      selectedRole,
      userimg,
      veryfi:false
    };
    createAccountEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        notify();
        setError("");
        axiosPublic.post("/userInfo" , userInformation)
        .then(response => {
          console.log('Server response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");

          // Heare Update the user
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const [file, setFile] = useState(null);
  const handleChange = async (file) => {
    try {
      setFile(file);

      // Create a FormData object to send the file as a multipart/form-data
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData);
      const res = await axios.post(img_hosting_api, formData, {
       
      });

      console.log(res.data);
      setUserimg(res.data.data.display_url)
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  const handleRoleChange = (event) => {
    console.log("Selected Value:", event.target.value);
    setSelectedRole(event.target.value);
  };

  // console.log(file);
  return (
    <div className=" mb-10">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegester}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="flex gap-3">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Bank Account Number
                    </label>
                    <input
                      type="number"
                      name="bank_account_no"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" 0910XXXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Salary
                    </label>
                    <input
                      type="number"
                      name="salary"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      placeholder="designation"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                </div>

                <div className="flex m-6 gap-4 justify-center items-center">
                  <select
                    className="text-white p-3 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    value={selectedRole}
                    onChange={handleRoleChange}
                  >
                    <option value="Employee">Employee</option>
                    <option value="HR">HR</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regester;
