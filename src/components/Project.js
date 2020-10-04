import React from 'react';
import {Grid} from '@material-ui/core';
import ProjectItem from './ProjectItem';
// import logoContentList from './LogoAndContent';
import logoContentList from './3projects';

const Project = () => {
  const getProject = item => {
    return (
      <Grid item>
        <ProjectItem {...item} />
      </Grid>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center h-2/3 ">
        {/* <div className="grid grid-rows-2 grid-cols-3 gap-8"> */}
        <div className="grid grid-rows-1 grid-cols-3 gap-8">
          {logoContentList.map(item => getProject(item))}
        </div>
      </div>
    </>
  );
};

export default Project;
