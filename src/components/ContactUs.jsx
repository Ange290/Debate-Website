import ian from '../assets/ian.jpg';
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

export default function ContactUs() {
  const person = {
    name: 'Ian Kyle MUGISHA IGANZE',
    title: 'Head of Community',
    img: ian
  };

  return (
    <section className=" bg-black" id='contact'>
      <div className='flex flex-col md:flex-row justify-start mx-6 px-4 py-12 w-full sm:gap-5 gap-10'>
      <div className="flex-1 md:max-w-sm mx-10 bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <img
          src={person.img}
          alt={person.name}
          className=" w-40 md:w-60 h-32 md:h-52 object-cover rounded-md mb-6"
        />
        <div className="text-left mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{person.name}</h3>
          <p className="text-indigo-600">{person.title}</p>
        </div>
</div>
       
        <div className="flex md:flex-col flex-col justify-start text-sm p-14 gap-6 text-white">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="h-4 w-4 text-white" />
            <p>Excella School</p>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="h-4 w-4 text-white" />
            <p> Working Hours: Mon–Fri: 08:00–17:00</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="h-4 w-4 text-white" />
            <p>0782‑220‑995</p>
          </div>
        </div>
      


      <div className=" flex md:flex-row flex-col justify-start text-sm  pl-14 pt-96 pr-16 gap-6 ">
        <a href="#home" target="_blank" rel="noopener noreferrer" className='text-white font-bold'>HOME</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="h-6 w-6 text-blue-600 hover:scale-110 transition-transform" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 text-pink-500 hover:scale-110 transition-transform" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-6 w-6 text-blue-400 hover:scale-110 transition-transform" />
        </a>
      </div>
      </div>
       <hr className="border-white w-full md:w-full mb-6" />
      <p className="text-center text-sm text-white pb-3">Copyright © 2025 Debate to Educate</p>
    </section>
  );
}
