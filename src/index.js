import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Peep } from './Peep';

function App() {
    let exampleDate = new Date();

    const [peeps, setPeeps] = useState([{words:"Here is an example peep!", date: exampleDate}]);

    const addPeep = (peep) => {setPeeps(
        (peeps) => [peep,...peeps]
    )}

    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let peepDate = new Date();
        let newPeep = {
            words: text, 
            date: peepDate
        };
        newPeep.words !== "" && addPeep(newPeep);
        setText("");
    }

    
        return (
            <div className = "App">
                <h1 className = "welcomeHeading">Welcome to Chitter! </h1>
                <h2 className = "subheading">Start peeping... </h2>
                <br/>
                <form className = "newPeepForm" onSubmit = {handleSubmit}>
                    <input 
                    value = {text} 
                    type = "text" 
                    onChange = {handleTextChange}
                    placeholder = "Enter peep here!"/>
                    <input value = "submit peep!" type = "submit" />
                </form>
                
                <ul className = "allPeeps">
                    {peeps.map((peep) => <Peep words = {peep.words} date = {peep.date} />)}
                </ul>            
            </div>
        )



}


ReactDOM.render(<App />, document.getElementById("root"))
