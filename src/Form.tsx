import './Form.css'

function Form({calculate}) {

    return(
        <div className="form-container">
          <p>How long does it take to earn a billion?</p>
          <p>Enter your earnings to find out:</p>
          <form action={calculate}>

            <div className="earnings-container">
              <input type="number" name="earnings" required/>
            </div>

            <div className="period-container">
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

            <button className="submit-button" type="submit">Submit</button>

          </form>

      </div>
    )
}

export default Form