import React,{useState} from "react";

export default function ShowMonth() {
    {
        let[month,setMonth] = useState("Not Selected")
        let[day, setDay] = useState("Not Selected")
        function handler1(event){
            let selectedMonth = parseInt(event.target.value)
            switch(selectedMonth){
                case 1:
                    setMonth("January");break;  

                case 2:
                    setMonth("February");break;

                case 3:
                    setMonth("March");break;

                case 4:
                    setMonth("April");break;

                case 5:
                    setMonth("May");break;

                case 6:
                    setMonth("June");break;

                case 7:
                    setMonth("July");break;

                case 8:
                    setMonth("August");break;

                case 9:
                    setMonth("September");break;

                case 10:
                    setMonth("October");break;

                case 11:
                    setMonth("November");break;

                case 12:
                    setMonth("December");break;
            }
        }

        
        function handler2(event){
            let selectedDate = parseInt(event.target.value)
            switch(selectedDate){
                case 1:
                    setDay("Monday");break;

                case 2:
                    setDay("Tuesday");break;

                case 3:
                    setDay("Wednesday");break;

                case 4:
                    setDay("Thursday");break;

                case 5:
                    setDay("Friday");break;

                case 6:
                    setDay("Saturday");break;

                case 7:
                    setDay("Sunday");break;
            }

        }
        return(
            <div>
            <select onChange={handler1}>
                <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>

            <p>The Month Name is : {month}</p>

            <select onChange={handler2}>
                <option>Select a Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
            </select>
            <p>The Day is :{day}</p>

            </div>
        )
    }
}