import { expect } from "chai";

// const { ethers } = require("hardhat");
// const{ethers}=require("ethers");


describe("token contract",function(){
    let token;
    let hardhattoken;
    let owner;
    let add1;
    let add2;
    let addrs;

    beforeEach(async function() {
      [owner,add1,add2,...addrs]=await ethers.getSigners();
       token=await ethers.getContractFactory("token");
       hardhattoken=await token.deploy();
      
    });


     describe("deplloy",function(){
       it("check for owner",async function(){
           expect(await hardhattoken.owner()).to.equal(owner.address);
       })
     })



})

