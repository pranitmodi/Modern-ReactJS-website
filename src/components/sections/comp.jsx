import "./section.css"

const comp = () => {

    const date = new Date();

    const months = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"]
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return (
        <div className="comp">
            <div className="upper-txt">
                <p>{months[month-1]} {day}, {year}</p>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
            </div>
            <h5 className="lower-txt">Read Full Article</h5>
        </div>
    )
}

export default comp