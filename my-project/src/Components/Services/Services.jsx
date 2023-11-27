import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import ServicesCard from './ServicesCard';
import { useEffect, useState } from 'react';

const Services = () => {
    const axiosPublic = useAxiosPublic();
    const { data: services = [] , isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get("/services");
                return res.data;
            } catch (error) {
                console.error("Error fetching services:", error);
                throw error;
            }
        }
    });
    console.log(services);

    if (isLoading) {
        return <p>dsfguijgvuisdif</p>
    }
    return (
       <div>
        <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Bring your Business to the <span className="text-blue-500">next level.</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        Our professional labour and HR experts have over 20 years of experience in helping Bangladeshi businesses administer and manage the very heart of their enterprises – which just happens to be their people.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign Up
            </a>
        </div>
    </div>
</section>
        </div>
        <div>
        <div className='flex justify-center items-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10'>
            {
                services ? (
                    services?.map(service => <ServicesCard key={service._id} service={service} />)
                ) : (
                    <div>Loading...</div>
                )
            }
            </div>
        </div>
        </div>
       </div>
    );
};

export default Services;