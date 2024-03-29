'use client'

import React from "react"; 
import { useEffect } from 'react'
import { motion, useScroll, useSpring, stagger, useAnimate } from "framer-motion";
import { cn } from "./cn";
import { Link } from "react-router-dom";
import './home.css'

import Footer from "../../components/Footer";

const Home = ({
  words,
  className,
  img,
}: {
  words: string;
  className?: string;
  img?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const wordClass = (word === "Templo" || word === "Puebla") ? "w-full text-7xl py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-500 to-violet-600 lg:inline" : "text-black";
          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white ${wordClass} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <section className='flex flex-col justify-center max-w-7xl w-full'>
      
   <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="py-14 px-12 mx-auto max-w-7xl">
  
        <div className="w-full mx-auto md:w-11/12 xl:w-11/12 md:text-center justify-center text-center">
        <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className="block w-full text-7xl py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-300 to-violet-900 lg:inline">
            {renderWords()}
          </div>
      </div>
    </div>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Aquí podrás encontrar más información!
            </p>
            <div  className="mb-4 space-x-0 md:space-x-2 md:mb-8">   
              <motion.a  whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.8, rotate: -10 }} href="#_" className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-purple-700 rounded-2xl sm:w-auto sm:mb-0 ">
                <span className=''/>
                Incríbete
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </motion.a>
                          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-purple-300 rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img className='w-full rounded-b-lg' src={img} />
                </div>
            </div>
        </div>
    </div>

  {/* FEATURES SECTION */}
  <section className="">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="py-10 text-5xl font-bold text-gray-900">Comités y Requisitos</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 px-12 md:px-0 ">
        <Link to={'/tecnologia'}>
            <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500 ">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/workstation.png" alt="workstation"/>
                </span>
                
                <Link to={'/tecnologia'}>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Tecnología</h1>
                </Link>
                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
                
                <Link to={'/tecnologia'}>
                <a  className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
            </div>
            </Link>

            <Link to={'/seguridad'}>
            <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/lock-2.png" alt="lock-2"/>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Protección y Seguridad</h1>

                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            </Link>

            <Link to={'/estacionamiento'}>
            <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/bus.png" alt="bus"/>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Estacionamiento</h1>

                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            </Link>

            <Link to={'/recorridos'}>
            <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/walking.png" alt="walking"/>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Recorridos</h1>

                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            </Link>

            <Link to={'/traduccion'}>
            <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/translate-app.png" alt="translate-app"/>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Traducción</h1>

                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            </Link>

            <Link to={'/facilidades'}>
            <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/wheelchair.png" alt="wheelchair"/>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Facilidades Físicas</h1>

                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            </Link>
        </div>
    </div>
</section>

    <div className="mt-10 space-x-0 md:space-x-2">
      <motion.a  whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.8, rotate: -10 }} href="#_" className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-purple-700 rounded-2xl sm:w-auto sm:mb-0 ">
         Incríbete
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </motion.a>
    </div>
{/* CALENDAR SECTION  */}


<h2 className="pt-28 text-5xl font-bold text-gray-900">Calendario</h2>

<section className="container mx-auto p-6 ">
<div className="container mx-auto p-4 space-y-2 text-left">
<h2 className="text-3xl font-bold pt-10 ">Ultima semana de Marzo:</h2>
</div>
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full ">
        <thead className=''>
          <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
            <th className="px-4 py-3 text-center">Turno</th>
            <th className="px-4 py-3 text-center">Lunes 1</th>
            <th className="px-4 py-3 text-center">Martes 2</th>
            <th className="px-4 py-3 text-center">Miércoles 3</th>
            <th className="px-4 py-3 text-center">Jueves 4</th>
            <th className="px-4 py-3 text-center">Viernes 5</th>
            <th className="px-4 py-3 text-center">Sábado 6</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
               
                <div>
                  <p className="text-xs text-gray-600">08:00 12:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">AMALUCAN</td>
            <td className="px-4 py-3 border text-xs">TEZIUTLÁN / TLAXCALA MEX</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICANMEX</td>
            <td className="px-4 py-3 border text-xs">ARBOLEDAS</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">12:00 16:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">16:00 20:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<section className="container mx-auto p-6 ">
<div className="container mx-auto p-4 space-y-2 text-left">
<h2 className="text-3xl font-bold ">Ultima semana de Marzo:</h2>
</div>
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full ">
        <thead className=''>
        <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
            <th className="px-4 py-3 text-center">Turno</th>
            <th className="px-4 py-3 text-center">Lunes 1</th>
            <th className="px-4 py-3 text-center">Martes 2</th>
            <th className="px-4 py-3 text-center">Miércoles 3</th>
            <th className="px-4 py-3 text-center">Jueves 4</th>
            <th className="px-4 py-3 text-center">Viernes 5</th>
            <th className="px-4 py-3 text-center">Sábado 6</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
               
                <div>
                  <p className="text-xs text-gray-600">08:00 12:00</p>
                </div>
              </div>
            </td>            
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">12:00 16:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">16:00 20:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="container mx-auto p-6 ">
<div className="container mx-auto p-4 space-y-2 text-left">
<h2 className="text-3xl font-bold">Ultima semana de Marzo:</h2>
</div>
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full ">
        <thead className=''>
        <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
            <th className="px-4 py-3 text-center">Turno</th>
            <th className="px-4 py-3 text-center">Lunes 1</th>
            <th className="px-4 py-3 text-center">Martes 2</th>
            <th className="px-4 py-3 text-center">Miércoles 3</th>
            <th className="px-4 py-3 text-center">Jueves 4</th>
            <th className="px-4 py-3 text-center">Viernes 5</th>
            <th className="px-4 py-3 text-center">Sábado 6</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
               
                <div>
                  <p className="text-xs text-gray-600">08:00 12:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">12:00 16:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">16:00 20:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="container mx-auto p-6 ">
<div className="container mx-auto p-4 space-y-2 text-left">
<h2 className="text-3xl font-bold">Ultima semana de Marzo:</h2>
</div>
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full ">
        <thead className=''>
        <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
            <th className="px-4 py-3 text-center">Turno</th>
            <th className="px-4 py-3 text-center">Lunes 1</th>
            <th className="px-4 py-3 text-center">Martes 2</th>
            <th className="px-4 py-3 text-center">Miércoles 3</th>
            <th className="px-4 py-3 text-center">Jueves 4</th>
            <th className="px-4 py-3 text-center">Viernes 5</th>
            <th className="px-4 py-3 text-center">Sábado 6</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
               
                <div>
                  <p className="text-xs text-gray-600">08:00 12:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">12:00 16:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">16:00 20:00</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
            <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<div className="mt-10 space-x-0 md:space-x-2">
      <motion.a  whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.8, rotate: -10 }} href="#_" className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-purple-700 rounded-2xl sm:w-auto sm:mb-0 ">
         Incríbete
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </motion.a>
    </div>

    <Footer />
</section>
  )
}

export default Home