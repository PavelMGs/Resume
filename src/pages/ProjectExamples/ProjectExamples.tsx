import React from 'react';
import Project from '../../Components/Project/Project';
import { projects } from '../../data/projects';
import s from './ProjectExamples.module.scss';


const ProjectExamples = () => {
    return (
        <div className={s.root}>
            {
                projects.map((item) => <Project data={item}/>)
            }
        </div>
    )
}

export default ProjectExamples;
