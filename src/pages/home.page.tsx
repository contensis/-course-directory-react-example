import React from 'react';
import { Query, Op, Entry  } from "contensis-delivery-api";
import ContensisClient from '../connection';

const Homepage = () => {
    const [courses, setCourses] = React.useState<Entry[]>();
    React.useEffect(() => {
    const doFetchData = async () => {
        try {
            const query = new Query(Op.equalTo("sys.contentTypeId", "course"));
            const entries = await ContensisClient.entries.search(query);
            setCourses(entries?.items ?? []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    doFetchData();    
    }, []);


    return (
        <div>
            <div className='hero'><h1 className='hero-title'>Our courses</h1></div>
            {courses && courses.length >= 1 && ( 
            <ul className='card-list'>
                {courses?.map((course:any, i:number) => {
                    return (
                        <li key={i} className='card-wrapper'>
                            <div className='card-content'>
                                <a className="card-link" href={`/course/${course.sys.id}`}><h2 className='card-title'>{course?.title}</h2></a>
                                <p className='card-text'>{course?.summary}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            )}

        </div>
    )
}

export default Homepage;