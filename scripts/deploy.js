

async function main() {
   const [deployer]=await ethers.getSigners();
   console.log("🚀 Deploying Contract from:", deployer.address);

   // Check Sepolia ETH balance before deployment
   const balance = await ethers.provider.getBalance(deployer.address);
   console.log("💰 Sepolia Balance:", ethers.formatEther(balance), "ETH");

   // Deploy the contract
   const Token = await ethers.getContractFactory("token"); // Replace with your contract name
   const token = await Token.deploy();

   await token.waitForDeployment();
   
   console.log("✅ Contract deployed at:", await token.getAddress());

   // Check remaining balance after deployment
   const newBalance = await ethers.provider.getBalance(deployer.address);
   console.log("💰 Remaining Sepolia ETH:", ethers.formatEther(newBalance), "ETH");
}


main().then(() => process.exit(0))
.catch((error)=>{
     console.log(error);
     process.exit(1);

})
   
