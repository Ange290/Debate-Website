import ian from '../assets/ian.jpg';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

export default function ContactUs() {
  const person = {
    name: 'Ian Kyle MUGISHA IGANZE',
    title: 'Co‑Founder & Head of Community',
    img: ian,
  };

  return (
    <section className="flex md:flex-row flex-col justify-start mx-10 px-4 py-12">
    <div className="flex-1 max-w-lg mx-8 bg-white p-6 md:p-8">
      <div className="max-w-sm  bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            {person.name}
          </h3>
          <p className="text-indigo-600 mb-4">{person.title}</p>
          </div>
          </div>
            </div>
          {/* <hr className="border-t-2 border-indigo-100 mb-4" /> */}
          <div className="space-y-2 text-gray-700">
           <FaMapMarkerAlt className="text-black mr-2" /><span>Excella School</span>
             <FaClock className="text-black mr-2" />
        <span>Monday–Saturday, 8 AM–6 PM</span>
             <FaPhoneAlt className="text-black mr-2" />
        <span>+250 78 123 4567</span>
          </div>
          {/* <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Instagram
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              Facebook
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Twitter
            </a> */}
          
      </section>
   
  );
}
