import React, { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { additionalEducation } from '../../data/education';
import AdditionalEducationCard from '../AdditionalEducationCard/AdditionalEducationCard';
import s from './AdditionalEducation.module.scss';

const AdditionalEducation = () => {
    return (
        <div className={s.additional_education}>
                {
                    additionalEducation
                    .reverse()
                    .map(item => <AdditionalEducationCard data={item} />)
                }
            </div>
    )
}

export default AdditionalEducation;
