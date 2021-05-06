import React from 'react';
import { TProject } from '../../interfaces';
import s from './Project.module.scss';

interface IProject {
    data: TProject,
}

const Project: React.FC<IProject> = ({ data }) => {
    return (
        <div className={s.root}>
            <h2 className={s.project_name}>{data.name}</h2>
            <article className={s.description} dangerouslySetInnerHTML={{ __html: data.description}} />
            <div className={s.link_block}>
                Git: <a href={data.git}>{ data.git }</a>
            </div>
            <div className={s.link_block}>
                Deploy: <a href={data.deploy}>{ data.deploy }</a>
            </div>
            <div className={s.done}>
                {data.done.getFullYear()}
                {data.done.getMonth()}
                {data.done.getDay()}
            </div>
        </div>
    )
}

export default Project;
