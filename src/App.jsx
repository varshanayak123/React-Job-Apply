import React from 'react'
import { Bookmark } from 'lucide-react'
import './index.css'
import Card from './assets/Component/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "/Images/Spotify.png",
    company: "Spotify",
    posted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "/Images/Google.png",
    company: "Google",
    posted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "/Images/Microsoft.png",
    company: "Microsoft",
    posted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/Images/Meta.png",
    company: "Meta",
    posted: "5 days ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "/Images/Apple.png",
    company: "Apple",
    posted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "/Images/Amazon.png",
    company: "Amazon",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "/Images/NVIDIA.png",
    company: "NVIDIA",
    posted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "/Images/OpenAI.png",
    company: "OpenAI",
    posted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "/Images/Adobe.png",
    company: "Adobe",
    posted: "1 day ago",
    post: "Visual Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "/Images/Tesla.png",
    company: "Tesla",
    posted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Austin, USA"
  }
];
  return (

 <div className="Parent">
      {jobs.map(function(elem){
       return <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} posted={elem.posted} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} />
      })}
    </div>
  );
};

export default App;