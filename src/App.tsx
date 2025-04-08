import React, { useState } from 'react';
import Form from './Form.tsx'
import Results from './Results.tsx'
import './App.css'

function App() {

  const [userData, setUserData] = useState({});
  const [showResults, setShowResults] = useState(false);

  function calculateYears(formData) {
    const earnings = formData.get("earnings");
    const period = formData.get("period");
    let salary;

    period === "week" ? salary = earnings * 52 :
    period === "month" ? salary = earnings * 12 : 
    salary = earnings;

    const years = Math.round(1000000000 / salary);

    setUserData({
            earnings: earnings,
            period: period,
            years: years
    });

    setShowResults(true);

    console.log('years to go ' + years);
}

  return (
    <div>
      <h1>Billionaire timeline</h1>
      <p>How long does it take to earn a billion?</p>
      <p>Enter your earnings to find out:</p>

      <Form calculate={calculateYears}/>
      {showResults && <Results />}
      
    </div>
  )
}

export default App
