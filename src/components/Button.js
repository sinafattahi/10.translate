import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {

    //using consumer [use for multiple context]

    renderSubmit(language) {
        return language === 'english'? 'Submit' : 'Voolreggan';
    }

    render() { 
        
        return <button className="ui button primary">
            <LanguageContext.Consumer>
                { ({language}) => this.renderSubmit(language) }
            </LanguageContext.Consumer>
        </button>;
    }
}

export default Button;