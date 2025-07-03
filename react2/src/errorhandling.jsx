import React,{useState,useEffect} from "react";

export default function Appe(){
    return(
        <>
        <ErrorBoundary>
          <Card1></Card1>
         
        </ErrorBoundary>
          <Card2></Card2>  
        </>
       

    )
}
//error handler helps to show wrror in certain part of code and help to avoid affecting other parts
function Card1(){
    throw new Error("error thrown to show error handling");
    return(<div style={{background:"red"}}>hithrere</div>);

}
function Card2(){
    return(<div style={{background:"blue"}}>hloooooooo</div>);
}

// error handling class function component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if (this.state.errorInfo) {
            return (
                <div style={{background:"black",color:"red"}}>
                    <h2>An Error Has Occurred companies usually make error section render black</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}