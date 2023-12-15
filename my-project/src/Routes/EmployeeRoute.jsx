import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Components/hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Skeleton } from "keep-react";
const EmployeeRoutes = ({ children }) => {
    const { user, lodder } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (lodder || isAdminLoading) {
        return (
            <div className="max-w-lg py-5 flex justify-center items-center">
              <Skeleton className="max-w-lg py-5 flex justify-center items-center">
                <Skeleton.Line height="h-5" />
                <div className="grid grid-cols-4 items-center justify-center">
                  <div className="col-span-1 flex  justify-center ">
                    <Skeleton.Avatar />
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <Skeleton.Line height="h-[60px]" />
                  </div>
                </div>
              </Skeleton>
            </div>
          )
    }

    const selectedRole = isAdmin[0]?.selectedRole || null; // Handle potential undefined value

    console.log(selectedRole);

    if (user && selectedRole === "Employee") {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default EmployeeRoutes;
