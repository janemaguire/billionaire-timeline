import './App.css'

function App() {

  function calculateYears(formData) {
    const salary = formData.get("salary");
    const years = Math.round(1000000000 / salary).toLocaleString('en');
    alert(`'${years} years to go!'`);
  }

  return (
    <>
      <h1>Billionaire timeline</h1>
      <p>How long until you earn a billion?</p>
      <p>Enter your salary to find out</p>
      <form action={calculateYears}>
        <input name="salary" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
