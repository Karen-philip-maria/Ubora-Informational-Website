import React from 'react';
import Image from 'next/image';


const Landingpage = () => {

    return (
        <div id='landingpage' className="flex flex-col justify-between mt-20 " >
            <div className="relative bg-customBlue min-h-screen overflow-hidden lg:px-8 " style={{ fontFamily: ' "Darker Grotesque"' }}>
                <div className="container mx-auto flex flex-col p-6 md:p-10
                 lg:flex-row items-center justify-between space-y-4 mt-6
                 lg:space-y-0 lg:space-x-4 lg:mt-28 nh:mt-4">
                    <div className="w-full lg:w-1/2 text-left lg:text-left">
                        <div className="mb-8 lg:hidden">
                        <Image src="/images/homepage.png"
                        alt="Homepage Image" 
                        width={300} 
                        height={200} />
                        </div>
                        <h1 className="text-[#644877] text-2xl im:text-[23px] nh:text-3xl md:text-4xl lg:text-4xl text-custom-blue font-nunito font-bold leading-snug mb-6">
                          Unlocking practical <br/>knowledge
                        </h1>
                        
                        <p className="text-lg im:text-2xl nh:text-2xl md:text-2xl lg:text-[28px] font-nunito textbg-[#644877] mb-8">
                        At Ubora CBC, we're revolutionizing<br/> education with our cutting-edge tech<br/> platform designed specifically for<br/> Competence Based Curriculum (CBC)</p>
                        <button className="im:text-bold im:px-20 im:py-5 sd:mb-20 italic font-type-bold bg-[#644877] hover:bg-[#503b64] font-semibold text-white py-4 md:py-3 lg:py-[15px] px-8 md:px-8 lg:px-[60px] text-sm md:text-md lg:text-lg rounded-[30px] mb-15 shadow-md ">
                            Signup For Free
                        </button>
                    </div>
                    <div className="w-full nh:w-[520px] md:w-1/2 mt-6 md:mt-8 mb-[-20px] hidden lg:block"> 
                        <Image
                            src="/images/homepage.png"
                            alt="Children Studying"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>

            </div>

            <div className="relative mt-4 bg-white py-10 lg:py-16 z-10" >
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 py-6 lg:py-10 relative mt-[-90px] lg:mt-[-180px]">
                    <div className="w-full lg:w-1/3 text-center nh:mb-[-60px]">
                        <Image
                            src="/images/practicals.jpg"
                            alt="Practicals"
                            width={446}
                            height={250}
                            className="mb-4 nh:mb-[0px] mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]"
                        />
                        <p className=" className= text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] text-customDarkBlue font-semibold" style={{ fontFamily: ' "Darker Grotesque"' }}>
                         Practicals
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center">
                        <Image
                            src="/images/Q & A.jpg"
                            alt="Q & A Post"
                            width={446}
                            height={250}
                            className="mb-4 nh:w-[140px] sd:w-[170px] mx-auto max-w-[50%] md:max-w-[40%] lg:max-w-[70%]" 
                        />
                        <p className=" className= text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] text-customDarkBlue font-semibold" style={{ fontFamily: ' "Darker Grotesque"' }}>
                        Q & A Post
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center">
                    <Image
                            src="/images/assignments.jpg"
                            alt="Assignments"
                            width={236}
                            height={213}
                            className="mb-4 mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]" 
                        />
                        <p className=" className= text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] text-customDarkBlue font-semibold" style={{ fontFamily: ' "Darker Grotesque"' }}>
                        Assignments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;