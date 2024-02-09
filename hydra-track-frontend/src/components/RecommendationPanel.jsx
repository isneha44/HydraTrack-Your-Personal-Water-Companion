import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecommendationPanel = ({ recommendations }) => {
    
const handleModel = ()=>{
    axios.get("http://localhost:8000/model").then((res)=>{
        alert(res)
        alert("come")
    }).catch((err)=>{
        alert("Error")
    })
}
    useEffect(()=>{
        handleModel();
    },[])
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationPanel;
