import React from "react";
// import Card from "./components/Card";
// import Data from './data.json'


const users = [
    {
        fullName: "Ariful islam",
        age: 32,
        phones: [{home: "93894893894"}, {office: "939489849"},]
    },
    {
        fullName: "rakibbul islam",
        age: 42,
        phones: [{home: "93894893894"}, {office: "939489849"},]
    }
]


function App(){

    
        return <div>
            <h1>Nested lists</h1>
            {
                users.map((user, index) => 
                <article key={index}>
                    <h3>fullName :{user.fullName}</h3>
                    <p>age:{user.age}</p>
                    {
                        user.phones.map((phone, index) => <div>
                            <p> {phone.home}</p>
                            <p> {phone.office}</p>
                        </div>)
                    }
                </article>)
            }
            
        </div>;
}
export default App;