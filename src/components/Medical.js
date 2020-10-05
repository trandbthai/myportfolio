import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../img/ava3.png';

const Medical = () => {
  return (
    <div className="h-screen">
      <div className="ml-3">
        <IconButton>
          <HomeIcon
            onClick={() => {
              window.open(`/`);
            }}
          />
        </IconButton>
      </div>
      <div className="h-full mx-6 flex-row justify-center items-center">
        <div className="px-24">
          <div className=" text-center uppercase font-bold text-2xl text-teal-800 rounded-lg ">
            Medical billing charged by health insurance company prediction
          </div>
        </div>
        <div className="mt-4 h-full flex justify-center items-center ">
          <div className="w-1/2 ml-12 h-full flex-row justify-center items-center ">
            <div className="flex items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
                href="https://www.linkedin.com/in/trandbthai/"
              >
                <Avatar
                  classes={{
                    root: 'h-16 w-16 ml-6 border-2 hover:border-teal-500',
                  }}
                  alt="avatar"
                  src={avatar}
                />
              </a>
              <div className="ml-3 flex-row justify-center items-center">
                <p className="text-xs">by Tran Thai</p>
                <p className="text-xs">2019</p>
              </div>
            </div>
            <div className="ml-6 pt-8 px-6">
              <iframe
                width="400"
                height="315"
                src="https://www.youtube.com/embed/gy1s1k09byc"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="px-6 pt-6 text-xs">
              <p className="text-justify">
                You can find my Jupyter notebook for the data analysis{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                  href="https://github.com/trandbthai/medical-billing/blob/master/medical-billing.ipynb"
                >
                  here
                </a>
                <span> and the dataset </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                  href="https://www.kaggle.com/mirichoi0218/insurance"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="w-2/3 h-full">
            <div className="w-5/6 flex-row ml-12">
              <div className="mt-3 p-4 rounded-lg bg-orange-200">
                <p className="text-justify">
                  Healthcare cost in the United States is one of the major
                  concerns that American is facing. Because of this expensive
                  medical expense, health insurance has become an essential
                  investment in modern life and depends on each insurance
                  provider, patients could have to pay their medical billing
                  charges.
                </p>
              </div>
              <div className="my-6"></div>
              <div className=" p-4 rounded-lg bg-red-200">
                <p className="text-justify">
                  However, patients usually do not know how much that they will
                  be charged until receiving the bills from insurance company.
                  This will make difficult for them to complete the bills. As a
                  result, predicting whether a patient will be received a high
                  charge medical billing by health insurance company is a
                  neccesary action.
                </p>
              </div>
              <div className="my-6"></div>
              <div className="p-4 rounded-lg bg-blue-200">
                <p className=" text-justify">
                  Python is used to complete the whole project. There are four
                  main parts in this project: Data Cleaning, Feature
                  Engineering, Building Train/Validation/Test samples, and Model
                  Selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
