
// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0;
import "hardhat/console.sol";
contract token {
  string public name="hardhat token";
  string public symbol="HHT";
  uint public totalsupply=1000;

  address public owner;

  mapping (address => uint) balances;

  constructor() {
     balances[msg.sender]=totalsupply;
     owner=msg.sender;
  }
  
  function transfer(address to,uint amount)  external {
     console.log("***Sender balance from ");
     require(balances[msg.sender]>=amount,"Not Sufficient token");
     balances[msg.sender]-=amount;
     balances[to]+=amount;
  }

  function showbalance(address user) external view returns (uint) {
      return balances[user];
  }

}



