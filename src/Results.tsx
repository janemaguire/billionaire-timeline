function Results ({result}) {

    const lifetimes = Math.round(result/81).toLocaleString('en');
    const date = new Date;
    const yearNow = date.getFullYear();
    const endYear = Math.round(yearNow + result);
    const moonYears = Math.round(result / 7.3).toLocaleString('en')

    return (
        <div>
            <p>Mark it in your diary, £{data.earnings.toLocaleString('en')} a {data.period} will earn you a billion by the year {data.endYear}!</p>
            <p>That's only {data.yearsToGo.toLocaleString('en')} years away!</p>
            <p>Or roughly {data.lifetimes.toLocaleString('en')} lifetimes.</p>
            <p>Long enough to walk to the moon and back {data.moonYears.toLocaleString('en')} times.</p>
            <p>God speed!</p>
        </div>
    )
}

export default Results