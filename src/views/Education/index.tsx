import React from 'react';

const EducationScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-[1280px]">
        <div className="flex justify-end">
          <h1 className="text-7xl w-full md:w-3/5 text-center md:text-start mb-20 font-extrabold text-transparent stroke-white">
            2015 - 2025
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20 p-5">
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            <h1 className="text-white font-semibold text-4xl">EDUCATION</h1>
            <div className="w-2/3 h-2 bg-primary" />
            <p className="text-gray-300">
              I earned my Bachelor's degree in Big Data & Machine Learning from Duy Tan University,
              where I gained a solid foundation in data analytics and AI. Throughout the 4-year
              program, I was awarded a partial scholarship based on academic performance. My studies
              focused on combining theoretical knowledge with practical projects, especially in
              predictive modeling and machine learning pipelines. This academic journey strengthened
              my problem-solving mindset and prepared me for data-driven, full-stack development.
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <div className="ml-0 md:ml-20 flex flex-col gap-5">
              <div>
                <h2 className="text-white font-semibold">Vinh Xuan High School</h2>
                <p className="text-gray-300">2015-2018</p>
              </div>
              <div>
                <h2 className="text-white font-semibold">Bachelor Degree</h2>
                <p className="text-gray-300">
                  Duy Tan University | Bigdata & Machine Learning | 2024
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">GPA: </span>3.72
                </p>
              </div>
              <div>
                <h2 className="text-white font-semibold">TOEIC 590 (Listening & Reading)</h2>
                <p className="text-gray-300">IIG Vietnam | 07/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationScreen;
