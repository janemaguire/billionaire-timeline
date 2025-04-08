function Form({calculate}) {

    return(
        <div className = "form-container">
        <form action={calculate}>

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
    )
}

export default Form