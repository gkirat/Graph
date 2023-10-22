// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract graph{
    event list(uint numValue,address whoChanged);

    uint public num;
    address public guest;
    uint public id=1 ;


    function changeVal(uint x)public {
        num = x;
        guest = msg.sender;
        emit list(x,msg.sender);
    }
}