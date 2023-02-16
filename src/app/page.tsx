/* eslint-disable import/no-extraneous-dependencies */
'use client'

import useDownloader from 'react-use-downloader';

import Navbar from './Navbar';
import Image from 'next/image'


const Index = () => {
  const { download } = useDownloader();

  const fileUrl = `/assets/resume/resume.pdf`;
  const filename = 'resume.pdf';
  return (
    <>
      <div className="flex flex-row">
        <div className="mx-auto basis-1/4 border-r border-gray-200 text-center">
          <Navbar />
        </div>
        <div className=" basis-3/4 ">
          {/* HOme */}
          <section
            id="home"
            className="container h-screen bg-[#effbf9] transition-all delay-200 ease-in-out"
          >
            <div className="flex flex-row pt-32">
              <div className="mx-20 basis-1/2">
                <h2 className="">
                  Hi I&apos;m <span>Collins!</span>{' '}
                </h2>
                <h1 className="">Software Engineer</h1>
                <h1 className="">Based in Ghana</h1>
                <p>
                  I&apos;m a Ghanaian based software engineer with
                  <span> 2 years </span>
                  of experience!
                </p>
                <div className="flex gap-x-12 pt-4">
                  <button className="rounded-[4px] bg-[#131049] py-3 px-8 text-white ">
                    Got a Project?
                  </button>
                  <button className="rounded-[4px] border border-[#131049] bg-white py-3 px-6 text-[#131049] transition-all duration-300 hover:bg-[#131049] hover:text-white">
                    Let&apos;s talk
                  </button>
                </div>
                <div className="mt-32 flex flex-col gap-y-2 border-l-4 border-[#fb9e3f] pl-3">
                  <p>+233 57 941 8353</p>
                  <p>gyamcoll123@gmail.com</p>
                  <p>Accra, Ghana</p>
                </div>
              </div>
              <div className="basis-1/2">
                <Image
                  className=" max-w-sm rounded-lg blur-sm transition-all duration-300 hover:blur-none"
                  src={`/assets/images/result.png`}
                  alt=""
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </section>
          {/* About section */}
          <section id="about" className="container h-screen bg-white px-32">
            <div className=" flex flex-row pt-40">
              <div className="basis-1/2">
                <p className="text-slate-300">-NICE TO MEET YOU!</p>
                <h2 className="">COLLINS GYAMERA</h2>
                <p className="text-xl font-semibold">
                  Software Engineer & Web Developer
                </p>
                <button
                  onClick={() => download(fileUrl, filename)}
                  className="mt-12 rounded-[4px] bg-[#131049] py-3 px-8 text-white "
                >
                  Download CV
                </button>
              </div>
              <div className="basis-1/2 pt-8">
                <p className="pb-5 text-lg">
                  I am a well-qualified Full-stack Developer familiar with a
                  wide range of programming utilities and languages.
                </p>
                <p className=" text-lg">
                  I am a collaborative team player with excellent technical
                  abilities offering 2 years of related experience
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center justify-center gap-x-8 pt-12 ">
              <div className=" h-52 bg-[#d3f4ed] py-20 text-center">
                <p className="text-2xl font-bold">2+</p>
                <p className="">years of experience</p>
              </div>
              <div className=" h-52 bg-[#fde8d5] py-20 text-center">
                <p className="text-2xl font-bold">10+</p>
                <p className="">Completed Projects</p>
              </div>
              <div className=" h-52 bg-[#e3fae0] py-20 text-center">
                <p className="text-2xl font-bold">10+</p>
                <p className="">Happy Clients</p>
              </div>
            </div>
          </section>
          {/* Service Ssection */}
          <section id="services" className="container h-screen bg-white px-8">
            <div className="pt-20">
              <p className="text-slate-300">-Services</p>
              <div className="flex justify-between">
                <h2 className="text-4xl font-bold">My Services</h2>
                <p className="pt-5 align-text-bottom underline underline-offset-4">
                  gyamcoll123@gmail.com
                </p>
              </div>
              <div className="grid grid-cols-7 gap-x-3 pt-12">
                <div className="col-span-2 grid h-60 grid-cols-1 gap-x-0 border border-slate-300 p-4">
                  <p>01</p>
                  <h3 className="text-xl font-semibold">Front-end</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold">Learn More -&gt;</p>
                </div>
                <div className="col-span-2 grid h-60 grid-cols-1 gap-x-0 border border-slate-300 p-4">
                  <p>02</p>
                  <h3 className="text-xl font-semibold">Back-end</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold">Learn More -&gt;</p>
                </div>
                <div className="col-span-3 grid h-60 grid-cols-1 gap-x-0 border border-slate-300 p-4">
                  <p>03</p>
                  <h3 className="text-xl font-semibold">Front-end</h3>
                  <p>
                    Lorem ipsum dolor sit amet
                    <br />
                    consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold">Learn More -&gt;</p>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-x-3 pt-6">
                <div className="col-span-3 grid h-60 grid-cols-1 gap-x-0 border border-slate-300 p-4">
                  <p>04</p>
                  <h3 className="text-xl font-semibold">UI/UX Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold">Learn More -&gt;</p>
                </div>
                <div className="col-span-2 grid h-60 grid-cols-1 gap-x-0 border border-slate-300 p-4">
                  <p>05</p>
                  <h3 className="text-xl font-semibold">Front-end</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold">Learn More -&gt;</p>
                </div>
                <div className="col-span-2 grid h-60 grid-cols-1 gap-x-0 border border-slate-300 p-4">
                  <p>06</p>
                  <h3 className="text-xl font-semibold">Front-end</h3>
                  <p>
                    Lorem ipsum dolor sit amet
                    <br />
                    consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold">Learn More -&gt;</p>
                </div>
              </div>
            </div>
          </section>
          {/* Education */}
          <section id="education" className="container h-screen bg-white px-8">
            <div className="pt-10">
              <p className="text-slate-300">-EDUCATION</p>
              <div className="grid grid-cols-2 gap-x-12 pt-12">
                <div className="grid h-60 grid-cols-1 gap-y-4 border border-slate-50 pl-6 hover:shadow-xl">
                  <p className="pt-6 text-lg font-semibold">
                    Achimota Senior Secondary School
                  </p>
                  <h2 className="text-2xl font-bold">General Science</h2>
                  <p>Completion: 2014 - 2017</p>
                </div>
                <div className="grid h-60 grid-cols-1 gap-y-4 border border-slate-50 pl-6 hover:shadow-xl">
                  <p className="pt-6 text-lg font-semibold">
                    University of Ghana
                  </p>
                  <h2 className="text-2xl font-bold">
                    Bachelor&apos;s in Computer Engineering
                  </h2>
                  <p>Completion: 2017 - 2021</p>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <p className="text-slate-300">-CERTIFICATES</p>
              <div className="grid grid-cols-2 gap-x-12 pt-12">
                <div className="grid h-60 grid-cols-1 gap-y-4 border border-slate-50 pl-6 hover:shadow-xl">
                  <p className="pt-6 text-lg font-semibold">
                    University of Ghana
                  </p>
                  <h2 className="text-2xl font-bold">
                    Introduction to Cyber-Security and Ethical Hacking
                  </h2>
                  <p>Completion: 01/2020 - 04/2020</p>
                </div>
                <div className="grid h-60 grid-cols-1 gap-y-4 border border-slate-50 pl-6 hover:shadow-xl">
                  <p className="pt-6 text-lg font-semibold">Turntabl Limited</p>
                  <h2 className="text-2xl font-bold">
                    Software Engineering Course
                  </h2>
                  <p>Completion: 09/2022 - 12/2022</p>
                </div>
              </div>
            </div>
          </section>
          {/* Work */}
          <section id="work" className="container h-screen bg-white px-8">
            <div className="pt-10">
              <p className="text-slate-300">-PROJECTS</p>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Recent Completed Works</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-20">
                <div className=" ">
                  <Image
                    className="h-72 w-full"
                    src={`/assets/images/welcome1.png`}
                    alt=""
                    width={800}
                    height={500}
                  />
                  <h4 className="pt-6 text-lg font-semibold">UI DESIGN</h4>
                  <h3 className="text-2xl font-bold capitalize">
                    makola trading system
                  </h3>
                </div>
                <div className=" ">
                  <Image
                    className="h-72 w-full"
                    src={`/assets/images/welcome2.png`}
                    alt=""
                    width={800}
                    height={500}
                  />
                  <h4 className="pt-6 text-lg font-semibold">UI DESIGN</h4>
                  <h3 className="text-2xl font-bold capitalize">
                    groital company ltd.
                  </h3>
                </div>
                <div className=" ">
                  <Image
                    className="h-72 w-full"
                    src={`/assets/images/welcome3.png`}
                    alt=""
                    width={800}
                    height={500}
                  />
                  <h4 className="pt-6 text-lg font-semibold">UI DESIGN</h4>
                  <h3 className="text-2xl font-bold capitalize">
                    egyom system
                  </h3>
                </div>
              </div>
              <div className="pt-12 text-center">
                <button className="rounded-[4px] bg-blue-900 py-5 px-10 text-white">
                  View All Projects
                </button>
              </div>
            </div>
          </section>
          {/* Contact Us */}
          <section id="contact" className="container h-screen bg-[#eaf9ff]">
            <div className="mx-20 flex flex-row py-32">
              <div className="grid basis-1/2 grid-cols-1 gap-y-4">
                <p className="font-semibold uppercase text-[#56607a]">
                  -Let&apos;s connect
                </p>
                <h2 className="text-4xl font-bold">Get in touch</h2>
                <p className="text-lg">
                  I&apos;m currently available to take on new projects, so
                  <br /> feel free to send me a message about anything that
                  <br /> you want to run past me.
                </p>
                <div className="grid grid-cols-1 gap-y-2 pt-12">
                  <div className="font-bold underline">+233 57 941 8353</div>
                  <div className="font-bold underline">gyamcoll123@gmail</div>
                  <div className="font-bold underline">Accra, Ghana</div>
                </div>
              </div>
              <div className="basis-1/2">
                <form className="grid grid-cols-1 gap-y-6">
                  <input
                    className="block w-full rounded-md  p-4  focus:border-blue-500 focus:ring-blue-500 dark:border-blue-600 dark:bg-blue-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    type="text"
                    placeholder="Enter your name"
                    name=""
                    id=""
                  />
                  <input
                    className="block w-full rounded-md  p-4  focus:border-blue-500 focus:ring-blue-500 dark:border-blue-600 dark:bg-blue-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    type="email"
                    placeholder="Your email"
                    name=""
                    id=""
                  />

                  <textarea
                    id="message"
                    rows={5}
                    className="block w-full rounded-md  p-4  focus:border-blue-500 focus:ring-blue-500 dark:border-blue-600 dark:bg-blue-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  <div>
                    <button
                      type="submit"
                      className="rounded-[4px] bg-[#131049] py-3 px-8 text-white "
                    >
                      Send email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
