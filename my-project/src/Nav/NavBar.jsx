"use client";
import { Navbar } from "keep-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
export const NavbarComponent = () => {
  const { user , logOut } = useContext(AuthContext);
  const handleLogOut= () =>{
      logOut()
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex my-6 items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-2 rounded-xl"
                : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dfsyrtfgvsd"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-2 rounded-xl"
                : ""
            }
          >
            Contact us
          </NavLink>
          <NavLink
            to="/dfsgtyvsd"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-2 rounded-xl"
                : ""
            }
          >
            Gallery
          </NavLink>
        </Navbar.Container>
        <Navbar.Brand>
          {/* <Image
            src="data:image/jpeg;base64,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"
            
          /> */}
          <div className="flex justify-center items-center">
            <div>
              <img
                src="https://i.ibb.co/nQ5wcXF/226-2261312-employee-clipart-employee-icon-employee-management-system-logo-removebg-preview.png"
                alt="keep"
                className="h-16 w-auto"
              />
            </div>
            <div>
              <p>𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭</p>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <NavLink
              to="/dashbord"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-blue-500 py-6 rounded-xl"
                  : ""
              }
            >
              Dashbord
            </NavLink>

            <NavLink
              to="/regester"
              className={({ isActive, isPending }) =>
                isPending
                  ? "py-6"
                  : isActive
                  ? "bg-blue-500 py-2 px-3 text-white rounded-xl"
                  : ""
              }
            >
              Regester
            </NavLink>
            {user?.email ? (
              <button className="py-2 px-3 text-black rounded-xl" onClick={handleLogOut}>LogOut</button>    
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "py-2"
                    : isActive
                    ? "bg-blue-500 py-2 px-3 text-white rounded-xl"
                    : ""
                }
              >
                Login
              </NavLink>
            )}
          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
