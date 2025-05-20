import './Results.css'

function Results ({data}) {

    let digits = data.endYear.toString().split('').map(Number);

    return (
        <div>
            <p>Mark it in your diary, £{data.earnings.toLocaleString('en')} a {data.period} will earn you a billion by the year:</p>
            
            <div className="years-container">
                {digits.map((digit, index) => (
                    <p className="years" style={{opacity: 0, animationDelay: `${index/2}s`}} key={index}>{digit}</p>
                ))}
            </div>
            
            <p>That's only {data.yearsToGo.toLocaleString('en')} years away!</p>
            <p>Or roughly {data.lifetimes.toLocaleString('en')} lifetimes.</p>
            <p>Long enough to walk to the moon and back {data.moonYears.toLocaleString('en')} times.</p>
            <p>God speed!</p>

        </div>
    )
}

export default Results