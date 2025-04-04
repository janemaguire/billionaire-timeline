function Results ({result}) {

    const lifetimes = Math.round(result/81).toLocaleString('en');
    const date = new Date;
    const yearNow = date.getFullYear();
    const endYear = Math.round(yearNow + result);

    return (
        <div>
            <p>Mark it in your diary, you will have earnt a billion by the year {endYear}!</p>
            <p>That's only {result.toLocaleString('en')} years away!</p>
            <p>Or roughly {lifetimes} lifetimes.</p>
            <p>God speed!</p>
        </div>
    )
}

export default Results