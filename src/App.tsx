import React, { useState } from 'react';
import Results from './Results.tsx'
import './App.css'

function App() {

  const [yearsToGo, setYearsToGo] = useState(0);

  function calculateYears(formData) {
    const earnings = formData.get("earnings");
    const period = formData.get("period");
    let salary;

    period === "week" ? salary = earnings * 52 :
    period === "month" ? salary = earnings * 12 : 
    salary = earnings;

    const years = Math.round(1000000000 / salary);

    setYearsToGo(years);
  }

  return (
    <div>
      <h1>Billionaire timeline</h1>
      <p>How long does it take to earn a billion?</p>
      <p>Enter your earnings to find out:</p>
      <div className = "form-container">
        <form action={calculateYears}>

          <div className = "earnings-container">
            <input type="text" name="earnings" required/>
          </div>

          <div className = "period-container">
            <label>
              <input type="radio" name="period" value="year" required/>
              Yearly
            </label>
            <label>
              <input type="radio" name="period" value="month" />
              Monthly
            </label>
            <label>
              <input type="radio" name="period" value="week" />
              Weekly
            </label>
          </div>

          <button type="submit">Submit</button>

        </form>
      </div>
   
      {yearsToGo > 0 && <Results result={yearsToGo}/>}
      
    </div>
  )
}

export default App
