
"use client";
import { BarChart } from "keep-react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import { useQuery } from "@tanstack/react-query";

const BarCharts = () => {
  const axiosSecure = useAxiosSecure();
  const { slug } = useParams();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?slug=${slug}`);
      return res.data;
    },
  });
  console.log(payments);
  // console.log(slug);
    return (
        <center className="mx-auto lg:mx-72 lg:mt-24 sm:m-0 sm:p-0 md:mx-0 md:m-0">
            <div className="flex justify-center max-w-7xl mx-auto items-center">
             <BarChart 
      height={400}
      width={700}
      barSize={90}
      barRadius={[4, 4, 0, 0]}
      dataKey="amount"
      
      chartData={payments}
      showBg={true}
      showLegend={true}
      showTooltip={true}
      showXaxis={true}
      showGridLine={true}
      showYaxis="month"
      
    />
        </div>
        </center>
    );
};

export default BarCharts;