
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { DatePicker } from "keep-react";
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import WorkTable from "./WorkTable";
import Swal from "sweetalert2";



const Employ = () => {
  const {user} = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState('Sales');
  const [workData , setWorkData] = useState({});
  console.log(user?.email);
    const [pamentDetails , setPamentsDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/payment/?slug=${user?.email}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setPamentsDetails(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [user?.email]);

      console.log(pamentDetails);
      const handleSelectChange = (event) => {
        // Update the state with the selected value
        setSelectedValue(event.target.value);
        
      
      };
      const axiosSecure = useAxiosSecure();
      const handleSubmit = e =>{
        e.preventDefault();
        const workTime = e.target.time.value;
        console.log(workTime , selectedValue , date , user?.email);
        const workData = {
            workTime ,selectedValue , date , email:user.email
        }
        setWorkData(workData);
        


          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Work Add Sucessfull",
                text: "Your work has been added.",
                icon: "success"
              });
            }
            axiosSecure.post('/workSheet', workData);

          });
      }
  
      
    return (
        <>
         <h1 className="text-4xl font-semibold text-center">Work Sheet</h1>
         <form onSubmit={handleSubmit}>
         <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Hours Worked
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" name="time" placeholder="Work time"/>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Tasks 
      </label>
      <div className="relative">
        <select onChange={handleSelectChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Sales</option>
          <option>Support</option>
          <option>Content</option>
          <option>Pay Per Work</option>
          <option>Pay Per Week</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
       Date
      </label>
      <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Submit 
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="submit" placeholder="90210"/>
    </div>
    </div>
         </form>

          <WorkTable></WorkTable>
        </>
    );
};

export default Employ;