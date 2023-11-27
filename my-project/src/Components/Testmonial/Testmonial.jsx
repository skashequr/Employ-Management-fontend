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
              src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg"
              alt=""
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
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
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
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  Mia Brown
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Marketing Manager at Stech
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
