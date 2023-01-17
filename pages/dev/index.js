import React from "react";
import { generateCSV } from './generateCSV';

function index() {
const csvHeader = [
 { label: "ID", key: "id" },
 { label: "Developer", key: "devName" },
 { label: "Age", key: "age" },
 { label: "Country", key: "country" }
];
const data = [
 {id: 1, devName: 'Vismeya', age: 23, country: 'India'},
 {id: 2, devName: 'Vinith', age: 24, country: 'India'},
 {id: 3, devName: 'Yoganandham', age: 23, country: 'India'},
 {id: 4, devName: 'Vivek', age: 24, country: 'India'},
 {id: 5, devName: 'Tharun', age: 24, country: 'Canada'},
 {id: 6, devName: 'Revanth', age: 21, country: 'India'},
 {id: 7, devName: 'Sabarish', age: 25, country: 'India'},
 {id: 8, devName: 'Rahul', age: 20, country: 'India'},
 {id: 9, devName: 'Siva', age: 24, country: 'United States'},
 {id: 10, devName: 'Naveen', age: 20, country: 'India'},
];
    return (
        <div>
            <button onClick={() => generateCSV(csvHeader,data, "jick")}>GenerateCSV</button>
        </div>
    );
}

export default index;