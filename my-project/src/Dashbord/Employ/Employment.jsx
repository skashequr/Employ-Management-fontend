import { useContext, useState } from "react";
import useUser from "../../Components/hooks/useUsers";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Dropdown } from "keep-react";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Employment = () => {
  const [selectedValue, setSelectedValue] = useState("Employee");
  const { user } = useContext(AuthContext);
  const userData = useUser(user?.email);
  const users = userData[0];
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();



 
  const handleSelectChange = (event, _id) => {
    const selectedValue = event.target.value;
  
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Done ..."
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${selectedValue}`,
          text: `Your Now this user is ${selectedValue}`,
          icon: "success"
        });
  
        axiosSecure.patch(`/userUpdateAdmin?value=${selectedValue}&id=${_id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Now this user is ${selectedValue}`,
              showConfirmButton: false,
              timer: 1500,
            });
  
            // Optionally, you might want to refetch data here
            queryClient.invalidateQueries('/yourEndpoint');
          }
        }).catch((error) => {
          console.error('Error updating data:', error);
        });
      }
    });
  };
  

  console.log(selectedValue);
  console.log(users);
  return (
    <section className="container px-4 mx-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />
                <span>Name</span>
              </div>
            </th>

            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <button className="flex items-center gap-x-2">
                <span>Status</span>

                <svg
                  className="h-3"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.1"
                  />
                  <path
                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.1"
                  />
                  <path
                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.3"
                  />
                </svg>
              </button>
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <button className="flex items-center gap-x-2">
                <span>Role</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </button>
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Email address
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Salary
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Promote
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Status
            </th>
            <th scope="col" className="relative py-3.5 px-4">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {users.map((s_users) => (
            <tr key={s_users?._id}>
              <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                  <div className="flex items-center gap-x-2">
                    {s_users?.userimg ? (
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={s_users?.userimg}
                        alt=""
                      />
                    ) : (
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
                        alt=""
                      />
                    )}

                    <div>
                      <h2 className="font-medium text-gray-800 dark:text-white ">
                        {s_users?.fullname}
                      </h2>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        @<span className="lowercase">{s_users?.fullname}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                  <h2 className="text-sm font-normal text-emerald-500">
                    {s_users?.selectedRole}
                  </h2>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {s_users?.designation}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {s_users?.email}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {s_users?.salary}
              </td>
              <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                  <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                  <select
                    value={s_users?.selectedRole}
                    onChange={(event) => handleSelectChange(event , s_users?._id , s_users?.selectedRole)}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                   
                   <option>Employee</option>
                    <option>Fire</option>
                    <option>HR</option>
                    <option>Admin</option>
                  </select>
                  </button>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p>ok</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Employment;
