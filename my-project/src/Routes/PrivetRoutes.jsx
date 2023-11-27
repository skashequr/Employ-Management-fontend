import { Navigate, useLocation } from "react-router";

"use client";
import { Skeleton } from "keep-react";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, lodder } = useContext(AuthContext);
    const location = useLocation();

    if(lodder){
        return (
            <div className="max-w-xl py-5">
              <Skeleton animation={true}>
                <div className="w-11/12">
                  <Skeleton.Line height="h-6" />
                </div>
                <div className="w-9/12">
                  <Skeleton.Line height="h-4" />
                </div>
                <div className="w-10/12">
                  <Skeleton.Line height="h-4" />
                </div>
                <div className="w-7/12">
                  <Skeleton.Line height="h-4" />
                </div>
              </Skeleton>
            </div>
          );
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;