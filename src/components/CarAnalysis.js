import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import checkNaN from '../img/CarAnalysis/nan.PNG';
import checkOtherVar from '../img/CarAnalysis/checkOtherVar.png';
import time from '../img/CarAnalysis/time.png';
import binary from '../img/CarAnalysis/binary.png';
import descriptive1 from '../img/CarAnalysis/descriptive1.png';
import descriptive2 from '../img/CarAnalysis/descriptive2.png';
import descriptive3 from '../img/CarAnalysis/descriptive3.png';
import descriptive4 from '../img/CarAnalysis/descriptive4.png';
import descriptive5 from '../img/CarAnalysis/descriptive5.png';
import descriptive6 from '../img/CarAnalysis/descriptive6.png';
import descriptive7 from '../img/CarAnalysis/descriptive7.png';
import descriptive8 from '../img/CarAnalysis/descriptive8.png';
import descriptive9 from '../img/CarAnalysis/descriptive9.png';
import descriptive10 from '../img/CarAnalysis/descriptive10.png';
import descriptive11 from '../img/CarAnalysis/descriptive11.png';
import descriptive12 from '../img/CarAnalysis/descriptive12.png';
import descriptive13 from '../img/CarAnalysis/descriptive13.png';
import descriptive14 from '../img/CarAnalysis/descriptive14.png';
import descriptive15 from '../img/CarAnalysis/descriptive15.png';
import avatar from '../img/ava3.png';

const useStyles = makeStyles({
  img: {
    height: 300,
  },
});

const CarAnalysis = () => {
  const classes = useStyles();
  return (
    <>
      <div className="h-24 flex bg-red-800 ">
        <div className="ml-3">
          <IconButton>
            <HomeIcon
              onClick={() => {
                window.open(`http://localhost:5000`, '_blank');
              }}
            />
          </IconButton>
        </div>
        <div className="w-full flex justify-center items-center ">
          <h1 className="text-center text-white uppercase text-3xl ">
            Factors lead to car crash in the New York state
          </h1>
        </div>
      </div>

      <div className="mt-6 flex items-center">
        <a className="text-xs" href="http://localhost:5000">
          <Avatar
            classes={{
              root: 'h-16 w-16 ml-24 border-2 hover:border-red-300',
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

      <div className="mt-6 ml-16 mr-16">
        <p className="ml-6 mr-6 text-justify text-sm">
          This is my capstone project for my course "" at the Northeastern
          university. In this course, I learnt alot from my professor and also
          other team members: ... who I have a chance working together for this
          project. You can find my Jupyter notebook for the data analysis here
          and the dataset here.
        </p>
      </div>

      {/* OVERVIEW */}

      <div className="mt-6 ml-16 mr-16">
        <div className="ml-6 mr-6 ">
          <h2 className="uppercase font-bold text-xl text-red-800 ">
            Overview
          </h2>
          <p className="mt-3 text-justify text-sm">
            The purpose of our anlysis is to better understand the factors that
            lead to a car crash.
          </p>
          <p className="mt-3 text-justify text-sm">
            The data set collected from data.gov is published by the State of
            New York for car crashes in New York 2014 - 2016. This publicly
            available data set gives "Attributes about each crash case which may
            consist of a single or multiple reports occurring during the year"
            (State of New York, 2018). The data set was first published by the
            state of New York on January 11, 2018 and last updated on June 10,
            2019 (State of New York, 2018).
          </p>
          <p className="mt-3 text-justify text-sm">
            There are three main points that we want to explore:
          </p>
          <ul className="list-disc ml-12">
            <li className="mt-3 text-sm">
              What is the profile of New York county's in relation to car
              crashes? Specifically, is there a difference among counties in
              relation to the number of vehicle crashes, the number of
              fatalities, and the numver of crashes where a police report is not
              filled out.
            </li>
            <li className="mt-2 text-sm">
              How do time attributes such as time of day or day of week factor
              into the number of car crashes?
            </li>
            <li className="mt-2 text-sm">
              What external conditions lead to a car crash and do different
              types of external conditions (such as weather and road design)
              lead to different types of car crashes?
            </li>
          </ul>
          <p className="mt-3 text-justify text-sm">
            As we will find in our anlysis, there is an interesting distribution
            of factors related to whether or not a police report is fille out.
            Our final step will be to build a predictive model that explains
            when a police report is filled out for a car crash.
          </p>
          <h6 className="mt-3 text-justify text-xs tracking-tight text-xs">
            ***State of New York. (2018). Motor Vehicle Crashes - Case
            Information: Three Year Window [Data set].
            https://catalog.data.gov/dataset/motor-vehicle-crashes-case-information-beginning-2009
          </h6>
        </div>

        {/* DATA CLEANING */}

        <div className="ml-6 mr-6 mt-6 ">
          <h2 className="uppercase font-bold text-xl text-red-800 ">
            Data Cleaning
          </h2>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mt-3 font-bold">Check Duplicates</p>
              <p className="mt-3 text-justify text-sm">
                First we transform the column names to replace a space with "_"
                for ease in calling column names.
              </p>
              <p className="mt-3 text-justify text-sm">
                In order to identify duplicate records, we make the assumption
                that when records share the same values of the following fields,
                a duplicate has occured and thus only the first record should
                remain:
              </p>
              <ul className="list-disc ml-12">
                <li className="text-sm">Year</li>
                <li className="text-sm">Time</li>
                <li className="text-sm">Date</li>
                <li className="text-sm">Day of Week</li>
                <li className="text-sm">Municipality</li>
                <li className="text-sm">County Name</li>
                <li className="text-sm">Dot Reference Marker Location</li>
              </ul>
              <p className="mt-3 text-justify text-sm">
                We assume this because it is too coincidental for these values
                to be the same and to be considered 2 seperate events.
              </p>
              <p className="mt-3 text-justify text-sm">
                In this case, we use the duplicated() function in the numpy
                library (python) to find the number of duplications and the
                drop_duplicates() function to remove all duplicated records. The
                result shows that there are 24,864 duplicated values in this
                dataset. After deduping, the number of records are reduced from
                895,916 to 871,052.
              </p>
            </div>
            <div>
              <p className="mt-3 font-bold">Check the NaN</p>
              <p className="mt-3 text-justify text-sm">
                Next we check the NaN value in the dataset.
              </p>
              <div className="mt-1 flex justify-center">
                <img className={classes.img} src={checkNaN} />
              </div>
              <p className="mt-1 text-justify text-sm">
                We can see in the table above that 64.99% data in the
                DOT_Reference_Marker_Location is NaN and 1.33% data in the
                Municipality column is NaN value. In this case, we will
                removethe DOT_Reference_Marker_Location column because there are
                to many missing values to be trusted.
              </p>
            </div>
          </div>

          <div>
            <p className="mt-12 font-bold text-sm">
              Check Other Non-Specific Variables
            </p>
            <p className="mt-3 text-justify text-sm">
              From a quick overlook of the data set it was also found that many
              columns contained other non-specific variables such as the word
              "Unknown", "Other", and "Non Applicable".
            </p>
            <div className="mt-1 flex justify-center">
              <img className={classes.img} src={checkOtherVar} />
            </div>
            <p className="mt-3 text-justify text-sm">
              To explore this we first apply a function to standardized the data
              set, lower casing all columns that are of pandas dataype "object"
              or "category". Next we noticed sometimes "other" is followd by a
              "*", so we transform this into a single variable "other". Then we
              can explore where these non-specific variables are occuring by
              count of records found as seen in the table below. However, we
              will not remove these records but will be aware of them as we
              explore the dataset.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="mt-3 font-bold text-sm">
                Transform/Create Time Variables
              </p>
              <p className="mt-3 text-justify text-sm">
                We transform and create time variables. This will include
                setting 'Date' to a DateTime, creating an "Hour" and "Month"
                variable, and transformign the Day of the Week variable to
                category with proper order.
              </p>
            </div>
            <div className="mt-1 flex justify-center">
              <img className="h-48" src={time} />
            </div>
          </div>
          <div>
            <p className="mt-6 font-bold text-sm">Create Binary Variables</p>
            <p className="mt-3 text-justify text-sm">
              The last step for data cleansing will be to build the following
              binary variables from which can be used for proportion analysis:
            </p>
            <div className="mt-3 flex justify-center">
              <img className="h-24" src={binary} />
            </div>
            <ul className="list-disc ml-12 mt-3 text-justify">
              <li className="text-sm">
                Fatality: Whether or not the crash lead to a fatality. Where
                column 'Crash_Descriptor' is one of the following the crash will
                be considered fatal: 'fatal accident'.
              </li>
              <li className="text-sm">
                Injury: Whether or not the crash lead to an injury (includes
                fatality). Where column 'Crash_Descriptor' is one of the
                following the crash will be considered an injury: 'injury
                accident', 'property damage & injury accident', 'fatal
                accident'.
              </li>
              <li className="text-sm">
                Pedestrian_Biker: Whether or not the crash involved a pedestrian
                and/or biker. Where column 'Pedestrian_Bicyclist_Action' is
                'unknown' or 'not applicable' it will be consider that the crash
                did nto involve a pedestrian and/or biker.
              </li>
            </ul>
          </div>
        </div>

        {/* DESCRIPTIVE ANALYSIS */}

        <div className="ml-6 mr-6 mt-6">
          <h2 className="uppercase font-bold text-xl text-red-800 ">
            Descriptive Analysis
          </h2>
          {/*3.1*/}
          <div className="text-sm">
            <p className="mt-3 font-bold">
              County Profile by Car Crash Attributes
            </p>
            <p className="mt-3 text-justify">
              To begin our exploration of the data set, we first calculate the
              top 10 New York Counties by the number of car crashes. We will use
              our bar_number function which returns a bar plot of the top X of a
              variable by record count.
            </p>
            <div className="mt-3 flex justify-center">
              <img className="h-56" src={descriptive1} />
            </div>
            <p className="mt-6 text-justify">
              Next we condsider the top 10 Counties by Percentage of Crashes
              Without a Police Report. Do this we use our cross_tab function
              which takes a dataframe, the names of 2 columns to be cross
              tabulated, and an indicator to define whether to return counts
              (0), percentages by column (1), or percentages by row (2). When
              selecting 1 or 2 it is the same as observed probability
              distribution.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="mt-1 flex justify-center">
                <img className="h-64" src={descriptive2} />
              </div>
              <div className="mt-1 flex justify-center">
                <img className="h-64" src={descriptive3} />
              </div>
            </div>
            <p className="mt-3 text-justify">
              As can be seen by the graphs above, Queens, New York, Kings, and
              Bronx are all Counties with a high count of car crashes and a high
              percentage of car crashes with no police report, and also have a
              higher numbr of Injury Accidents.
            </p>
            <p className="mt-3 text-justify">
              To examine counties more wholistically, in the we compare the
              relationship of number of crashes per county to the following
              percentage variables:
            </p>
            <ul className="mt-3 list-decimal ml-12 ">
              <li>Percent of Crashes Without a Police Report.</li>
              <li>Percent of Crashes With Fatalities.</li>
              <li>Percent of Crashes With Fatalities and/or Injuries.</li>
              <li>Percent of Crashes Involving a Biker or Pedestrian.</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gid-rows-2 gap-6">
              <div className="mt-1 flex justify-center">
                <img className={classes.img} src={descriptive4} />
              </div>
              <div className="mt-1 flex justify-center">
                <img className={classes.img} src={descriptive5} />
              </div>
              <div className="mt-1 flex justify-center">
                <img className={classes.img} src={descriptive6} />
              </div>
              <div className="mt-1 flex justify-center">
                <img className={classes.img} src={descriptive7} />
              </div>
            </div>
            <p className="mt-6 text-justify">
              The first graph shows that there are county outliers with a high
              rate of no police report and low number of crashes, as well as
              county outliers with low rate of no police report and high number
              of crashes. The relationship between number of crashes and
              fatlities is very flat. However when adding injury types to the
              percentage, as seen in the bottom left graph, the relationship
              appears to be much stronger.
            </p>
            <p className="mt-2 text-justify">
              The bottom right graph also indicates that the relationship
              appears farily flat between % of crashes involving a pedestrian or
              biker except for a few outliers with an above average number of
              crashes. Finally, it is very interesting to note the 2 outliers by
              number crashes above 90K - Nassua and Suffolk County. These 2
              counties though high in number of crashes are not effected by
              these percentage statistics.
            </p>
          </div>

          {/*3.2*/}
          <div className="text-sm">
            <p className="mt-3 font-bold">
              Car Crash Time Variables In Relationship to Crash Type
            </p>
            <p className="mt-3 text-justify">
              The following crash types are observed in the data by count and
              percentage as seen below.
            </p>
            <div className="mt-1 flex justify-center">
              <img className="h-32" src={descriptive8} />
            </div>
            <p className="mt-6 text-justify">
              In phase 2 of our anaylysis, we examine car crashes in
              relationship to time variables and crash types. The below left
              graph shows the frequency of car crashes over the day of the week.
              Similarly, the below right graph shows the observed probability
              distribution over the days of the week for each crash type.
              Notice, unlike the other types of crashes, the frequency of fatal
              crashes rises on the weekend.
            </p>
            <div className="mt-3 flex justify-center">
              <img className="h-64" src={descriptive9} />
            </div>
            <p className="mt-6 text-justify">
              Further, we examine car crashes in relationship to hour of the
              day. The below left graph shows the frequency of car crashes over
              the hour of the day. Similarly, the below right graph shows the
              observed probability distribution over the hour of the day by each
              car crash. Unlike the other types of crashes, the probability
              distribution for fatal car crashes is less influenced by the time
              of day.
            </p>
            <div className="mt-3 flex justify-center">
              <img className="h-64" src={descriptive10} />
            </div>
            <p className="mt-6 text-justify">
              Finally, we examine car crashes in relationship to month of the
              year. The below left graph shows the frequency of car crashes over
              month. Similarly, the below right graph shows the observed
              probability distribution over month for each crash type.
              Interestingly the property damage accidents (that do not involve
              injury) occur more often in the holidays (October to December).
            </p>
            <div className="mt-3 flex justify-center">
              <img className="h-64" src={descriptive11} />
            </div>
          </div>

          {/*3.3*/}
          <div className="text-sm">
            <p className="mt-3 font-bold">
              Analysis on External Condition Variables of Car Crashes
            </p>
            <p className="mt-3 text-justify">
              Our last element of exploratory analysis is to examine the factors
              of external conditions on car crashes. The tables show the count
              of crashes by these variables.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="mt-1 flex-rows text-center">
                <p>Lighting Condition</p>
                <div className="mt-3 flex justify-center">
                  <img className="h-20" src={descriptive12} />
                </div>
              </div>
              <div className="mt-1 flex-rows text-center">
                <p>Weather Condition</p>
                <div className="mt-3 flex justify-center">
                  <img className="h-28" src={descriptive13} />
                </div>
              </div>
              <div className="mt-1 flex-rows text-center">
                <p>Road Descriptor</p>
                <div className="mt-3 flex justify-center">
                  <img className="h-24" src={descriptive14} />
                </div>
              </div>
            </div>
            <p className="mt-3 text-justify">
              Unexpectandly, the element in each category that would seem the
              safest (day light, clear weather, and straight/level road) have a
              high number of crashes.
            </p>
          </div>
        </div>

        {/*PREDICTION MODEL*/}
        <div className="ml-6 mr-6 mt-6">
          <h2 className="uppercase font-bold text-xl text-red-800 ">
            Prediction Model
          </h2>
          <div className="mt-3 text-sm">
            <p className="text-justify">
              For our predictive model, we will build a random forest model to
              predict whether or not a police report would be filled out for a
              given crash based on the following features:
            </p>
            <div className="mt-3 grid grid-cols-4">
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>Crash_Descriptor</li>
                  <li>Lighting_Conditions</li>
                  <li>Collision_Type_Descriptor</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>County_Name</li>
                  <li>Road_Descriptor</li>
                  <li>Weather_Conditions</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>Traffic_Control_Device</li>
                  <li>Event_Descriptor</li>
                  <li>Day_of_Week</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>Number_of_Vehicles_Involved</li>
                  <li>Hour</li>
                  <li>Month</li>
                  <li>Pedestrian_Biker</li>
                </ul>
              </div>
            </div>
            <p className="mt-1 text-justify">
              The purpose of our model is to build a model that fits the data
              well and the use a feature importance function to best understand
              what features contribute to whether or not a police report is
              filled out a crash.
            </p>
            <p className="mt-3 text-justify">
              We choose the Random Forest model to fit the data. With Random
              Forest model, we can know the importance of each attribute.
            </p>
            <div className="mt-3 flex justify-center">
              <img className="h-64" src={descriptive15} />
            </div>
            <p className="mt-3 text-justify flex justify-center">
              After running the test, we collect the accuracy of the model is
              0.939 and the F1 score of the model is 0.8582.
            </p>
          </div>
        </div>

        {/*CONCLUSION*/}
        <div className="ml-6 mr-6 mt-6">
          <h2 className="uppercase font-bold text-xl text-red-800 ">
            Conclusion
          </h2>
          <p className="mt-3 text-justify text-sm">
            Our final conclusion is that we were able to build a model with high
            accuracy and show the factors that most matter in predicting whether
            or not a police report was created for a crash. This information
            would be beneficial to both police departments for operation metrics
            as well as for insurance companies who might want to know the
            factors that cause there to no be a police report for a car crash
            when a claim is filed.
          </p>
          <ul className="ml-3 mt-1 list-disc text-sm text-justify">
            <li>
              The most imporant factor, road_descriptor, is suprising as it
              would not be expected that the way the road is designed would have
              predictive powere for predicting when a police report is not
              filled out.
            </li>
            <li>
              Lighting conditions may be contributed to the time of day as Hour
              is also a highly important feature. It may be that at certain
              times of day, persons found in an accident, are less bothered to
              call for police when an accident occurs.
            </li>
            <li>
              Finally, it is also interesting the Traffic_Control_Device is an
              important feature. Given that there are some variables such as
              "unknown" in this feature, this analysis would recommend for
              research to understand how traffic control factors into whether or
              not a police report is created at a crash.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarAnalysis;
