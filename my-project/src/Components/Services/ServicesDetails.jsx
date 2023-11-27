import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Sidebar from "./Sidebar";
import { Link, useParams } from "react-router-dom";

const ServicesDetails = () => {
  const params = useParams();
  const param = params.id;
  console.log(param);
  const axiosPublic = useAxiosPublic();
  const { data: services = [] } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/services-Details?title=${param}`);
      return res.data;
    },
  });
  console.log(services.OurPayrollServicesInclude);
  const {
    title,
    intro,
    PayrollProcessFAQs,
    price,
    WhatWeOffer,
    HowWeHelpYou,
    img1,
    img2,
    OurPayrollServicesInclude,
  } = services || {};
  console.log(PayrollProcessFAQs);
  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="max-w-5xl">
        <div className="flex  max-h-16 overflow-hidden border border-orange-600 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center px-2 py-3">
            <img
              className="object-cover w-10 h-10 rounded-full"
              alt="User avatar"
              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
            />

            <div className="mx-3">
              <p className="text-gray-600 dark:text-gray-200">
                {title}{" "}
                <Link
                  to="/regester"
                  className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"
                >
                  If you not singin pluse regester heare
                </Link>
                .
              </p>
            </div>
          </div>
          
        </div>

        <div>
            <p className="p-8 m-4 text-xl">{intro}</p>
        </div>
        <h1 className="text-4xl font-bold">What We Offer</h1>
        <p className="p-8 m-4 text-xl">{WhatWeOffer}</p>
        <h1 className="text-4xl font-bold">How We Help You</h1>
        <div className="flex h-96">
        <p className="p-8 m-4 text-xl flex-1">{HowWeHelpYou}</p>
        <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/402013877_122110853120099389_1009579175945756443_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgzSUekgYOAZ46E13o2I3_PT0Z6Ansaus9PRnoCexq62OSfl64NFLiXOJl2Atu1VWPElYndJyr5AdLE9MQRH43&_nc_ohc=dLcb3uKOyVgAX8bSj6m&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCJsQ7f8nvjEPqdRQeE3pWEl6p_ZTkvZvi-AgtSbQzO9A&oe=6565EE89" alt="" />
        </div>
        <h1 className="text-4xl font-bold">Our Payroll Services Include</h1>
        </div>
            
      </div>
      
    </div>
  );
};

export default ServicesDetails;
