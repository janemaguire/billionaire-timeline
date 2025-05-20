import './Results.css'

function Results ({data}) {

    let digits = data.yearsToGo.toLocaleString('en').split('');
    console.log('data.earnings', typeof data.earnings);
    console.log('data.yearsToGo', typeof data.yearsToGo)

    return (
        <>
            <div className="results-container">
                
                <div className="years-container">
                    <div className="digits-container">
                    {digits.map((digit, index) => (
                        <p className="years" style={{opacity: 0, animationDelay: `${index/2}s`}} key={index}>{digit}</p>
                    ))}
                    </div>
                    <p className="star-text" style={{opacity: 0, animationDelay: `${digits.length/2}s`}}>years to go!</p>
                </div>
                
                <p>Congratulations! Earning £{data.earnings.toLocaleString('en')} a {data.period} will make you a billionaire by the year {data.endYear}.</p>
                <p>That's only {data.yearsToGo.toLocaleString('en')} years away! Or roughly {data.lifetimes.toLocaleString('en')} lifetimes<sup>*</sup>. 
                    Long enough to walk to the moon and back {data.moonYears.toLocaleString('en')} times<sup>&#10013;</sup>.</p>
                <p>God speed!</p>
            </div>

            <div className="references">
                            
            <p>* UK men and women, 2021-2023, <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/lifeexpectancies/bulletins/nationallifetablesunitedkingdom/2021to2023additionaldata" target='blank'><cite>NOS</cite></a></p>
            <p><span>&#10013;</span><cite><a href="https://www.skyatnightmagazine.com/space-science/how-long-does-take-get-moon" taget="blank"><cite>BBC Sky at Night</cite></a></cite>
            </p>
            </div>
        </>
    )
}

export default Results