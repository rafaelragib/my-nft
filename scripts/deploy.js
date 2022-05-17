const { Signer } = require("@ethersproject/abstract-signer");

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  const signer = MyNFT.signer;

  const balance = await signer.getBalance(blockTag = "latest");
  const gasPrice = await signer.getGasPrice();


  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })