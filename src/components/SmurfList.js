/**
 * Tom Bielawski
 * Lambda School WEB 45
 * 3.2.5 Advanced State Management Sprint Challenge 
 * 8/13/2021
 */

//Imports
import React from 'react';
import Smurf from './Smurf';
import {connect} from "react-redux";


//Smurflist function takes prpps
 const SmurfList = (props)=> 
 {
    
    //Destructure props
    const {smurfs, isLoading} = props;


    //To call the isLoading message
    if (isLoading)  { return <h1>Loading SMURFS...</h1>; }

    //To call errors
    if (props.error) { return <h1>ERROR, SMURF! </h1>;  }

    //REturn
    return(<div className="listContainer">
        
        {/* Map over smurfs */}
        { smurfs.map(smurf => (<Smurf key={smurf.id} smurf={smurf}/>))}
         
       
    </div>);
}

//Map state
const mapStateToProps = (state) => 
{
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

//Connect and export
export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.