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

       it("check totalbalance should be in owner account", async function() {
        const ownerbalance = await hardhattoken.showbalance(owner.address);
        const totalSupply = await hardhattoken.totalsupply();
        expect(ownerbalance.toString()).to.equal(totalSupply.toString());
    });
    

    describe("transactions",function(){
         it("should transfer from owner to add1",async function(){
            await hardhattoken.transfer(add1.address,20);
            const add1balance = await hardhattoken.showbalance(add1.address);
            expect(add1balance.toString()).to.equal("20");


            await hardhattoken.connect(add1).transfer(add2.address,5);
            const add2balance = await hardhattoken.showbalance(add2.address);
            expect(add2balance.toString()).to.equal("5");
         })

         it("should fail if sender does not have enough tokens",async function() {
           const initialbalanceowner = await hardhattoken.showbalance(owner.address);
           await expect(hardhattoken.connect(add1).transfer(owner.address,1)).to.be.revertedWith("Not Sufficient token");
           expect (await hardhattoken.showbalance(owner.address)).to.equal(initialbalanceowner);
          
         })
    })
    
     });



});

