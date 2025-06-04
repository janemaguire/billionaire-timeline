import './index.css'

function Results ({data} : {data: any}) {

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
                
                <p>Earning £{data.earnings.toLocaleString('en')} a {data.period} will make you a billionaire by the year {data.endYear}.</p>
                <p>That's only {data.yearsToGo.toLocaleString('en')} years away! Roughly {data.lifetimes.toLocaleString('en')} lifetimes<sup>*</sup>. 
                    Or long enough to walk to the moon and back {data.moonYears.toLocaleString('en')} times<sup>&#10013;</sup>. But don't let that put you off.</p>
                <p>God speed!</p>
                <a href="">Restart</a>
            </div>

            <div className="references">
                            
                <p>* UK men and women, 2021-2023, <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/lifeexpectancies/bulletins/nationallifetablesunitedkingdom/2021to2023additionaldata" target='blank'><cite>NOS</cite></a></p>
                <p><span>&#10013;</span><cite><a href="https://www.skyatnightmagazine.com/space-science/how-long-does-take-get-moon" target="blank"><cite>BBC Sky at Night</cite></a></cite></p>
            
            </div>
        </>
    )
}

export default Results