import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import {Button, Avatar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CodeIcon from '@material-ui/icons/Code';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Project from './Project';
import avatar from '../img/ava3.png';
import contact from '../img/contact.png';

const Home = () => {
  return (
    <div className="flex-col">
      <AppBar className="bg-white text-black shadow-none">
        <div className="h-10 flex ">
          <div className="w-1/3 flex items-center justify-start pl-10">
            <FingerprintIcon />
            <h3>Tran Thai</h3>
          </div>
          <div className="w-2/3 flex items-center justify-end pr-20">
            <IconButton href="#" className="bg-white">
              <Button className=" hover:text-red-600 hover:bg-white">
                Home
              </Button>
            </IconButton>
            <IconButton href="#aboutMe" className="bg-white">
              <Button className=" hover:text-red-600 hover:bg-white">
                About Me
              </Button>
            </IconButton>
            <IconButton href="#myProjects" className="bg-white">
              <Button className=" hover:text-red-600 hover:bg-white">
                Projects
              </Button>
            </IconButton>
            <IconButton href="#contact" className="bg-white">
              <Button className=" hover:text-red-600 hover:bg-white">
                Contact
              </Button>
            </IconButton>
          </div>
        </div>
      </AppBar>

      <div className="h-64 mt-6 flex justify-center items-center">
        <div className="flex-col">
          <h2 className=" text-4xl text-red-800 text-center font-bold">
            Data Analyst and Front-End Developer
          </h2>
          <p className="text-2xl text-gray-600 text-center">
            I might not be the best but I'm always trying my best.
          </p>
        </div>
      </div>

      <div className=" h-48 bg-pink-200 flex justify-center items-center">
        <div className="flex justify-center">
          <Avatar className="h-32 w-32 ml-24" alt="avatar" src={avatar} />
        </div>
        <div className="flex-row items-center">
          <h2 className="pt-3 px-24 text-left text-2xl font-bold ">
            Hi, My name is Tran Thai.
          </h2>
          <p className="mt-6 px-24 text-left">
            I am a driven individual with the ability to adapt to any situation
            and proven potential to grow self and others.
          </p>
          <p className="px-24 text-left">
            My goal is to simply become a better version of myself every day.
          </p>
        </div>
      </div>

      <div id="aboutMe" className="w-screen h-24" />
      <div className="flex mt-6 h-64 ">
        <div className="w-1/2 h-full flex justify-end ">
          <div className="w-5/12 h-full mr-10 border-solid border-4 border-gray-600 rounded-lg">
            <div className="flex-col m-auto">
              <div className="mt-2 flex justify-center">
                <AssessmentIcon className="text-3xl text-red-700" />
              </div>
              <div className="p-2">
                <h5 className="text-center text-2xl text-red-800 font-bold">
                  Data Analyst
                </h5>
                <p className="text-center">
                  I am fascinated by numbers, data, and making them more
                  meaningful in the most appealing way.
                </p>
                <p className="mt-2 text-center font-bold">Analytical tools:</p>
                <p className="text-center">Python, Tableau, MySQL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-start ">
          <div className="w-5/12 h-full ml-10 border-solid border-4 border-gray-600 rounded-lg">
            <div className="flex-col m-auto">
              <div className="mt-2 flex justify-center">
                <CodeIcon className="text-3xl text-red-700" />
              </div>
              <div className="p-2">
                <h5 className="text-center text-2xl text-red-800 font-bold">
                  Front-end Developer
                </h5>
                <p className="text-center">
                  I am a self-taught front-end developer, who love playing with
                  coding and creating beautiful websites.
                </p>
                <p className=" mt-2 text-center font-bold">Languages:</p>
                <p className="text-center">HTML, CSS, JavaScript, React</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myProjects" className="w-screen h-8" />
      <div className="flex-col">
        <h3 className="mt-24 text-center text-3xl font-bold">My Projects</h3>
        <div className="mt-6">
          <Project />
        </div>
      </div>

      <div id="contact" className="mt-32 flex justify-center items-center">
        <div className=" w-full h-24 flex">
          <div className="w-1/6 h-full flex justify-center items-center">
            <img alt="contact" src={contact} className="h-28 w-28" />
          </div>
          <div className="w-5/6 h-full grid grid-cols-4 items-center">
            <div className="flex items-center h-full">
              <LinkedInIcon />
              <a
                className="ml-3"
                href="https://www.linkedin.com/in/trandbthai/"
                target="_blank"
              >
                linkedin.com/in/trandbthai/
              </a>
            </div>
            <div className="flex items-center h-full">
              <GitHubIcon className="ml-6" />
              <a
                className="ml-3"
                href="https://github.com/trandbthai"
                target="_blank"
              >
                github.com/trandbthai
              </a>
            </div>
            <div className="flex items-center h-full">
              <MailIcon className="ml-6" />
              <p className="ml-3">trandbthai@gmail.com</p>
            </div>
            <div className="flex items-center h-full">
              <PhoneIcon className="ml-6" />
              <p className="ml-3">(857) 222 6423</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
