import React, { useEffect, useState } from 'react';
import { TProject } from '../../interfaces';
import s from './Project.module.scss';

interface IProject {
    data: TProject,
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Project: React.FC<IProject> = ({ data }) => {
    const [currentPhoto, _setCurrentPhoto] = useState(0);

    const setCurrentPhoto = (action: string) => {
        switch (action) {
            case "minus": {
                currentPhoto > 0
                    ? _setCurrentPhoto(currentPhoto - 1)
                    : null;
                break;
            }
            case "plus": {
                currentPhoto < data.images?.length - 1
                    ? _setCurrentPhoto(currentPhoto + 1)
                    : null;
                break;
            }
        }
    };

    useEffect(() => {
        console.log('asda');
    }, [currentPhoto])
    return (
        <div className={s.root}>
            <div className={s.content}>
                <h2 className={s.project_name}>{data.name}</h2>
                <article className={s.description} dangerouslySetInnerHTML={{ __html: data.description }} />
                <div className={s.block}>
                    Git: <a href={data.git}>{data.git}</a>
                </div>
                <div className={s.block}>
                    Deploy: <a href={data.deploy}>{data.deploy}</a>
                </div>
                <div className={s.block}>
                    Done: {data.done.getDate()} {months[data.done.getMonth()]}, {data.done.getFullYear()}
                </div>
                <div className={s.gallery}>
                    <div></div>
                    {data.images ? (<div>{data.images.map((item, index) => {
                        return <img src={item} className={index === currentPhoto
                            ? s.current
                            : index === currentPhoto - 1
                                ? s.previous
                                : index === currentPhoto + 1
                                    ? s.next
                                    : s.another
                        } />
                    })}
                        {
                            currentPhoto > 0
                                ? (
                                    <div
                                        className={s.to_prew}
                                        onClick={() => setCurrentPhoto('minus')}
                                    />)
                                : null
                        }
                        {
                            currentPhoto < data.images.length - 1
                                ? (
                                    <div
                                        className={s.to_next}
                                        onClick={() => setCurrentPhoto('plus')}
                                    />
                                )
                                : null
                        }
                    </div>
                    ) : null}

                </div>

            </div>
        </div>
    )
}

export default Project;
