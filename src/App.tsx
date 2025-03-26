import './App.css'

function App() {

  function calculateYears(formData) {
    const earnings = formData.get("earnings");
    const period = formData.get("period");
    let salary;

    period === "week" ? salary = earnings * 52 :
    period === "month" ? salary = earnings * 12 : 
    salary = earnings;

    const years = Math.round(1000000000 / salary).toLocaleString('en');
    alert(`'${years} years to go!'`);
  }

  return (
    <>
      <h1>Billionaire timeline</h1>
      <p>How long until you earn a billion?</p>
      <p>Enter your earnings to find out</p>
      <form action={calculateYears}>

        <input type="text" name="earnings" required/>
        
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
