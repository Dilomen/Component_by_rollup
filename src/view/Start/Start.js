import React from "react";
import renderInstruction from "./instruction";
class Start extends React.Component {
    state = {  }
    render() { 
        return <div
        className="instruction"
        dangerouslySetInnerHTML={{ __html: renderInstruction }}
      ></div>
    }
}
 
export default Start;