import React from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import AdditionalEducation from '../../Components/AdditionalEducation/AdditionalEducation'
import s from './Education..module.scss';

const Education = () => {

    return (
        <div className={s.root}>
            <AdditionalEducation />
        </div>
    )
}

export default Education;
