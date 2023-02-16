'use client'

import Link from 'next/link';

import Image from 'next/image'

const Navbar = () => {

  return (
    <>
      <div className="fixed mt-12 ">
        <div>
          {/* <img
            className="mx-auto w-32 rounded-full border-2 border-blue-300"
            src={`/assets/images/circle.png`}
            alt=""
            srcSet="" */}
          {/* /> */}
          <Image
          className='mx-auto w-32 rounded-full border-2 border-blue-300'
            src={`/assets/images/circle.png`}
            alt="Landscape picture"
            width={800}
            height={500}
          />
          <div className="my-8">
            <h1 className="text-3xl font-bold">Collns Gyamera</h1>
          </div>
        </div>
        <div className="">
          <div className="mx-36 mt-12 grid grid-cols-1 gap-y-5">
            <Link
              className=" transition-all ease-in-out hover:text-blue-500"
              href="#home"
              scroll={false}
            >
              Home
            </Link>

            <Link
              href="#about"
              className=" transition-all ease-in-out hover:text-blue-500"
              scroll={false}

            >
              About
            </Link>
            <Link
              href="#services"
              className=" transition-all ease-in-out hover:text-blue-500"
            >
              Services
            </Link>
            <Link
              href="#education"
              className=" transition-all ease-in-out hover:text-blue-500"
            >
              Education
            </Link>
            <Link
              href="#work"
              className="transition-all ease-in-out hover:text-blue-500"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="transition-all ease-in-out hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
          <div className="pt-24">
            <p>Copyright &#64;2023 Collins Gyamera</p>
            <p>All rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
