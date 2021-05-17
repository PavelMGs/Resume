import React, { useRef, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { TAditionalEducaion } from '../../interfaces';
import s from './AdditionalEducationCard.module.scss';

interface IAdditionalEducationCard {
    data: TAditionalEducaion;
}

const AdditionalEducationCard: React.FC<IAdditionalEducationCard> = ({ data }) => {
    const [pdfClosed, _setPdfClosed] = useState(true);

    const pdfClosedRef = useRef(pdfClosed);

    const setPdfClosed = (newData: boolean) => {
        pdfClosedRef.current = newData;
        _setPdfClosed(newData);
    };

    const handlePdf = () => {
        setPdfClosed(!pdfClosedRef.current);
        !pdfClosedRef.current
        ? document.addEventListener('keyup', handleEscape)
        : document.removeEventListener('keyup', handleEscape);
    };

    const handleEscape = (e: KeyboardEvent) => {
        e.key === 'Escape'
        ? handlePdf()
        : null;
    }
    
    return (
        <div className={s.card}>
            <h2> {data.name} </h2>
            <article className={s.description}>
                { data.description }
            </article>
            {/* { data.certificate
                ? <LazyLoad><Document
                    file={data.certificate}
                    className={
                        pdfClosed
                            ? s.pdf_closed
                            : s.pdf_opened
                    }
                >
                    <Page pageNumber={1} />
                </Document>
                <button
                    type="button"
                    onClick={handlePdf}
                    className={
                        pdfClosed
                        ? s.show_button
                        : s.close_button
                    }
                >
                    {
                        pdfClosed
                        ? 'Show certificate'
                        : 'Close certificate'
                    }
                </button>
                </LazyLoad>
                : null
            } */}

            {
                data.notdeployed
                ?   <div className={s.not_deployed}>
                        Project are not deployed
                    </div>
                : <div className={s.projects}>
                    {
                        data.projects?.map(item => (
                            <div className={s.project}>
                                <h3> { item.name } </h3>
                                
                                <span>Repository: <a href={item.repository} target="blank"> { item.repository } </a></span>
                                <span>Deploy: <a href={item.deploy} target="blank"> { item.deploy } </a></span>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default AdditionalEducationCard;
