import Component2 from "./ContextComponents/Component2";
import React from "react";
export var ThemeProvider = React.createContext();
var ExamResults = () => {

    return (
        <section>
            <ThemeProvider.Provider value={{ sgpa: "10.00" }}>
                <h1>this is an example of useContext-parent class</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>
    );
}
export default ExamResults;