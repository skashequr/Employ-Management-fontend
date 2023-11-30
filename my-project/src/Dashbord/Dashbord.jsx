"use client";
import { Sidebar } from "keep-react";
import {
  ChartBar,
  LockKey,
  TreeStructure,
  Users,
} from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import useLoginUser from "../Components/hooks/useLoginUser";
import { Carousel } from "keep-react";
const Dashbord = () => {

  // const {user} = useContext(AuthContext);
 
  // console.log(user?.email);
  

  const loginUser = useLoginUser();
const userLogin = loginUser[0];
const userRole = userLogin[0]?.selectedRole;
  console.log(userRole);  
  
  return (
    <div className="flex">
      <div>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <Link to="/">
      <div className="flex flex-col justify-center items-center">
          <div >
          <img src="https://i.ibb.co/nQ5wcXF/226-2261312-employee-clipart-employee-icon-employee-management-system-logo-removebg-preview.png"
          alt="keep"
          className="h-16 w-auto"
           />
          </div>
           <div>
           <p>𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭</p>
           </div>
          </div>
      </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex-1 -mx-3 space-y-3">
            {/* ... other navigation items */}
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={<Users size={24} />}>
                  Dashboard
                </Sidebar.Item>
                {
                  userRole === "Admin" ? 
                  <Sidebar.Collapse
                  icon={<Users size={24} />}
                  label="Employee"
                >
                  <Link to='/dashbord/employee-list'><Sidebar.Item icon={<Users size={24} />}>
                  Employee List
                  </Sidebar.Item></Link>
                </Sidebar.Collapse> : " "
                }
                
                {
                  userRole === "HR" ? 
                  <Sidebar.Collapse
                  icon={<Users size={24} />}
                  label="Employee"
                >
                  <Link to='/dashbord/employee-list-hr'><Sidebar.Item icon={<Users size={24} />}>
                  Employee List
                  </Sidebar.Item></Link>
                </Sidebar.Collapse> : " "
                }
                {
                  userRole === "Employee" ? 
                  
                  <Link to='/dashbord/payment-history'><Sidebar.Item icon={<Users size={24} />}>
                  Salary History
                  </Sidebar.Item></Link>
                : " "
                }
                 {
                  userRole === "Employee" ? 
                  
                  <Link to='/dashbord/work-sheet'>
                    <Sidebar.Item icon={<TreeStructure size={24} />}>     
                    Work Sheet            
                  </Sidebar.Item></Link>
                : " "
                }
                 {
                  userRole === "HR" ? 
                  
                  <Link to='/dashbord/work-sheet-hr'>
                    <Sidebar.Item icon={<TreeStructure size={24} />}>     
                    Work Sheet Data          
                  </Sidebar.Item></Link>
                : " "
                }
                <Sidebar.Item href="#" icon={<Users size={24} />}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={<Users size={24} />}>
                  Products
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
                  Project Plan
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
                  Our Progress
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={<LockKey size={24} />}>
                  Security
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar>
            
          </nav>

          <div className="mt-6">
            <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
              <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                New feature availabel!
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                harum officia eligendi velit.
              </p>
              <img
                className="object-cover w-full h-32 mt-2 rounded-lg"
                src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80"
                alt=""
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              {/* ... other user-related items */}
              
            </div>
          </div>
          
        </div>
        
      </aside>
      </div>
      {/* dashbord for all  */}
     
      
      <div>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
