import React from 'react';
import './JobCard.css';

const JobCard = ({ title, location, company, link }) => {
  return (
     <div className="list">
		<a href={link} target="_blank">
			<div className="card">
				<h1>{title}</h1>
				<h2>{company}</h2>
				<h3>{location}</h3>
			</div>
		</a>
	  </div>
  );
};

export default JobCard;