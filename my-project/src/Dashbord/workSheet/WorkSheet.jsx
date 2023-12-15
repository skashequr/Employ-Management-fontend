
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { DatePicker } from "keep-react";
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import { Pagination } from "keep-react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowsDownUp,
  Crown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";
import { Badge, Button, Popover, Table } from "keep-react";

const Employ = () => {
  const {user} = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState('Sales');
  const [workData , setWorkData] = useState({});
  console.log(user?.email);
    const [pamentDetails , setPamentsDetails] = useState([]);
    useEffect(() => {
        fetch(`https://backend-seven-ruddy.vercel.app/payment/?slug=${user?.email}`)
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

      
      const itemsPerpage = 5;
      const [count, setCount] = useState(0);
      const [currentPage, setCurrentPage] = useState(1);
      useEffect(() => {
        fetch(`https://backend-seven-ruddy.vercel.app/workSheetCount?page=${currentPage}&size=${itemsPerpage}&email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setCount(data.count));
      }, [currentPage , user?.email]);
      console.log(count);
      const [x,setx] = useState(false);
      
      const numberOfPages = Math.ceil(count / itemsPerpage);
      const { refetch: workSheedRefetch, data: WorkSheedDataUser = [] } = useQuery({
        queryKey: ['WorkSheedDataUser', 'user-email' , x , user?.email],
        queryFn: async () => {
          try {
            const res = await axiosSecure.get(`/workSheetPagination?email=${user?.email}`);
            return res.data;
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
          }
        }
      });
      // page=${currentPage}&size=${itemsPerpage}&
      console.log(WorkSheedDataUser);
      useEffect(() => {
        fetch(`https://backend-seven-ruddy.vercel.app/workSheetPagination?page=${currentPage}&size=${itemsPerpage}&email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, [currentPage , user?.email]);
      
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
            axiosSecure.post('/workSheet', workData)
            .then(()=>{setx(!x)})

          });
          workSheedRefetch();
          
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

         <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
               Your Work History
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
              </Button>
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">ID</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Date
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[160px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Status
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            work Time
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Email
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        {WorkSheedDataUser?.map((work) => (
          <Table.Body key={work?._id} className="divide-y divide-gray-25">
            <Table.Row className="bg-white">
              
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {work?._id}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                {work?.date}
                </p>
              </Table.Cell>
              <Table.Cell>
                <div className="inline-block">
                  <Badge
                    colorType="light"
                    color="success"
                    icon={<Crown size={18} weight="light" />}
                    iconPosition="left"
                  >
                    {work?.selectedValue}
                  </Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="inline-block">
                  <Badge
                    colorType="light"
                    color="success"
                    icon={<Crown size={18} weight="light" />}
                    iconPosition="left"
                  >
                    {work?.workTime}
                  </Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {work?.email}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  
                </p>
              </Table.Cell>
              <Table.Cell>
                <Popover
                  showDismissIcon={false}
                  showArrow={false}
                  className="w-48 p-2 border border-metal-100"
                  additionalContent={
                    <ul className="flex flex-col gap-1">
                      <li className="hover:bg-metal-100 py-1 px-2 rounded">
                        <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Delete</span>
                          <span>
                            <Trash />
                          </span>
                        </button>
                      </li>
                      <li className="hover:bg-metal-100 py-1 px-2 rounded">
                        <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Edit</span>
                          <span>
                            <Pencil />
                          </span>
                        </button>
                      </li>
                    </ul>
                  }
                >
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
        
      </Table>
      <div className="flex justify-center items-center mb-16 mt-6">
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={numberOfPages}
          iconWithOutText={true}
          prevNextShape="none"
          showGoToPaginate={true}
        />
      </div>
        </>
    );
};

export default Employ;