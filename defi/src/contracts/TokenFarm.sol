pragma solidity ^0.5.0;

import "./FlowToken.sol";
import "./DaiToken.sol";

contract TokenFarm {

    // State Variables
    string public name = "FLOW Token Yield Farm";  //State variable that gets stored on the block chain
    FlowToken public flowToken;
    DaiToken public daiToken;

    constructor(FlowToken _flowToken, DaiToken _daiToken) public {
        flowToken = _flowToken;
        daiToken = _daiToken;
    }

    

}
