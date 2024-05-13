import React from 'react';
import { useLocation } from 'react-router-dom';
import ContensisClient from '../connection';
import { Entry } from 'contensis-delivery-api';

const Course = () => {
    const location = useLocation();
    
    const [course, setCourse] = React.useState<Entry>()
    React.useEffect(() => {
        const doFetchCourse = async () => {
            const parts = location.pathname?.split('/');
            const entryId = parts[2]?.toString();
            if (entryId) {
                try {
                    const entry = await ContensisClient.entries.get({ id: entryId });
                    setCourse(entry);
                } catch (error) {
                    console.error("Error fetching course:", error);
                }
            }
        };

        doFetchCourse();
    }, [location])

    if (!course) return null;
    return (
        <div>
            <div className='hero'><h1 className='hero-title'>{course?.title}</h1></div>
            <div className='wrapper'>
                <ul className="key-requirements">
                    <li>
                        UCAS Code
                        <span className='key-requirements-bold'>{course?.ucasCode}</span>
                    </li>
                    <li>
                        Entry requirements
                        <span className='key-requirements-bold'>{course?.entryRequirements} <span className='key-requirements-normal'>UCAS points</span></span>
                    </li>
                    <li>
                        UK fee
                        <span className='key-requirements-bold'>{course?.ukFee}</span>
                    </li>
                    <li>
                        Location
                        <span className='key-requirements-bold'>{course?.location}</span>
                    </li>
                    <li>
                        Start date
                        <span className='key-requirements-bold'>{course?.startDate}</span>
                    </li>
                </ul>
                <p className='summary'>{course?.summary}</p>
                <div className="content" dangerouslySetInnerHTML={{ __html: course?.content }} />
                <a className='link-button' href='/'>Apply via UCAS</a>
            </div>
        </div>
    )
}

export default Course;