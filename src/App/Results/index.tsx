import './index.css'

function Results ({data}) {

    let digits = data.yearsToGo.toLocaleString('en').split('');
 
    let digitsFontSize = digits.length < 8 ? '3rem' : 
                         digits.length < 10 ? '2rem' :
                         '1.5rem';

    return (
        <>
            <div className="results-container">
                
                <div className="years-container">
                    <div className="digits-container">
                    {digits.map((digit: string, index: number) => (
                        <p className="digits" style={{opacity: 0, animationDelay: `${index/2}s`, fontSize: digitsFontSize}} key={index}>{digit}</p>
                    ))}
                    </div>
                    <p className="star-text" style={{opacity: 0, animationDelay: `${digits.length/2}s`}}>years to go!</p>
                </div>
                
                <p>Earning £{data.earnings.toLocaleString('en')} a {data.period} will make you a billionaire by the year {data.endYear}. Only {data.yearsToGo.toLocaleString('en')} years away!</p>
                <p>That's roughly {data.lifetimes.toLocaleString('en')} lifetimes<span>&#185;</span>. 
                    Or long enough to walk to the moon and back {data.moonYears.toLocaleString('en')} times<span>&#178;</span>. Let the countdown commence!</p>
                <a href="">Restart</a>
            </div>

            <div className="references">
                            
                <p>1. UK men and women, 2021-2023, <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/lifeexpectancies/bulletins/nationallifetablesunitedkingdom/2021to2023additionaldata" target='blank'><cite>NOS</cite></a></p>
                <p>2. <cite><a href="https://www.skyatnightmagazine.com/space-science/how-long-does-take-get-moon" target="blank"><cite>BBC Sky at Night</cite></a></cite></p>
            
            </div>
        </>
    )
}

export default Results