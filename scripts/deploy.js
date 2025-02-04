


async function main() {
   const [deployer]=await ethers.getSigners();
   const Token=await ethers.getContractFactory("token");
   const token=await Token.deploy();
   await token.waitForDeployment(); 
   console.log("Token address :",token.getAddress());
}


main().then(() => process.exit(0))
.catch((error)=>{
     console.log(error);
     process.exit(1);

})
   
