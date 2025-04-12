import React, { useState } from 'react';
import Form from './Form.tsx'
import Results from './Results.tsx'
import './App.css'

function App() {

  const [userData, setUserData] = useState({
    earnings: 0,
    period: 0,
    yearsToGo: 0,
    lifetimes: 0,
    endYear: 0,
    moonYears: 0
  });

  const [showResults, setShowResults] = useState(false);

  function calculateYears(formData) {

    const earnings = formData.get("earnings");
    const period = formData.get("period");
    const salary = period === "week" ? earnings * 52 :
                   period === "month" ? earnings * 12 : 
                   earnings;
    const yearsToGo = Math.round(1000000000 / salary);
    const lifetimes = Math.round(yearsToGo/81);
    const date = new Date;
    const yearNow = date.getFullYear();
    const endYear = Math.round(yearNow + yearsToGo);
    const moonYears = Math.round(yearsToGo / 7.3)

    setUserData((userData) => ({
      earnings: earnings,
      period: period,
      yearsToGo: yearsToGo,
      lifetimes: lifetimes,
      endYear: endYear,
      moonYears: moonYears
    }));

    setShowResults(true);

}

  return (
    <div>
      <h1>Billionaire timeline</h1>

      {showResults ? <Results data={userData} /> : <Form calculate={calculateYears}/>}
      
    </div>
  )
}

export default App
