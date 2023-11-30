import { Carousel } from "keep-react";
const TestimonialSection = () => {
  return (
    <section className="bg-white flex justify-center items-center dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <Carousel slideInterval={3000} showControls={false} >
            <img
              src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg"
              alt=""
            />
            <img
              src="https://i.ibb.co/C63DdGq/Untitled.jpg"
              alt=""
              className="w-fit h-fit"
            />
          </Carousel>
          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <Carousel slideInterval={3000} showControls={false}>
              <div>
                <p className="text-5xl font-semibold text-blue-500">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                  Help us improve our productivity
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  “Joining this employment services website was a game-changer for me. The platform's user-friendly interface and personalized job recommendations made the job search process efficient and enjoyable. Within weeks, I landed a job that perfectly matched my skills and career goals. The constant updates and notifications kept me engaged and motivated throughout the journey. I highly recommend this website to anyone seeking a seamless and effective employment experience.”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  Mia Brown
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Marketing Manager at Stech
                </p>
              </div>
              <div>
                <p className="text-5xl font-semibold text-blue-500">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                  Help us improve our productivity
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  “I can't express enough gratitude for the incredible support I received from this employment services website. The tailored job listings and resume-building tools significantly enhanced my job search. The responsive customer service team addressed my queries promptly, creating a stress-free experience. Thanks to this platform, I secured a fantastic job opportunity that aligns perfectly with my aspirations. If you're serious about finding the right job, look no further. This website is a game-changer, providing the resources and guidance needed for a successful career movepernatur a. ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  Mia Sheikh
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                 
                </p>
              </div>
            </Carousel>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
