
import PropTypes from 'prop-types';
import { useState } from 'react';
import {FaMapMarker} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

    if (!showFullDescription) {
        description = job.description.substring(0, 90) + '...';
    }



  return (
    <>
        <div key={job.id} className="bg-white rounded-xl shadow-md relative">
                    <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{job.type}</div>
                        <h3 className="text-xl font-bold">{job.title}</h3>


                        {job.is_featured ? 
                            <span className="inline-flex mt-6 items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Featured</span> : null
                    }

                    </div>
        
                    <div className="mb-5">
                        {description}
                    </div>

                    <button className='text-indigo-500 mb-5 hover:text-indigo-600 text-justify' onClick={() => setShowFullDescription((prevState) => !prevState)}>
                        {showFullDescription ? 'Less' : 'More'}
                    </button>

                    <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
        
                    <div className="border border-gray-100 mb-5"></div>
        
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline-block text-lg mr-2" />
                            {job.location}
                        </div>
                        <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                        Read More
                        </Link>
                    </div>
                    </div>
                </div>
    </>
  )
}

JobListing.propTypes = {
    job:PropTypes.object,
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
};

export default JobListing