import React from "react";

// default import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./cart/components/Cart";

export class App extends React.Component{
    
    contactUs(){
        // TODO: this in context
        alert ('parent');
    }

    contactUsWithParams(city){
        // TODO: this in context
        alert (city);
    }
    
    //react keyword
    // return a virtual dom
    render (){
        return (
           <div>
               <Header title="React Training"/>

                <div>
                    {this.props.children}
                </div>    
                {/* <Cart/>

               { <Home/> }
               <About />
                */}
               <Footer 
               year={2017} 
               company="Sapient Corporation" 
               address={{city: 'Gurugram'}} 
               contactFunc = {this.contactUs}
               contactParamFunc = {this.contactUsWithParams}
               >
                    <p> Contact Time </p>
                    <p> 8 to 5 </p>
               </Footer>
            </div>
        )
    }
}