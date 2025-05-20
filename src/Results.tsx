import './Results.css'

function Results ({data}) {

    let digits = data.yearsToGo.toLocaleString('en').split('');

    return (
        <div className="results-container">
            <p>Mark it in your diary, £{data.earnings.toLocaleString('en')} a {data.period} will earn you a billion by the year {data.endYear}.</p>
            
            <div className="years-container">
                {/* <p className="star-text">Only</p> */}
                <div className="digits-container">
                {digits.map((digit, index) => (
                    <p className="years" style={{opacity: 0, animationDelay: `${index/2}s`}} key={index}>{digit}</p>
                ))}
                </div>
                <p className="star-text" style={{opacity: 0, animationDelay: `${digits.length/2}s`}}>years to go!</p>
            </div>
            
            
            <p>That's only {data.yearsToGo.toLocaleString('en')} years away!</p>
            <p>Or roughly {data.lifetimes.toLocaleString('en')} lifetimes.</p>
            <p>Long enough to walk to the moon and back {data.moonYears.toLocaleString('en')} times.</p>
            <p>God speed!</p>

        </div>
    )
}

export default Results