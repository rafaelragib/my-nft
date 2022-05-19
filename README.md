# Smart Contract Deploy, NFT creation and Minting   

## Third Party Vendor Used
* [Alchemy](https://www.alchemy.com/)
* [Pinata](https://www.pinata.cloud/)
* [MetaMask](https://metamask.io/)
## Deploy Smart Contract
To initially run the project some dependency needs to be added. It can be added using
    
    yarn
Before deployment some fake `eth` needed for the smart contract to have a place in the test network. [fauceth](https://fauceth.komputing.org/) can be used to get some test `eth` for the deployment


To compile the solidity file below script needs to be run: 

    npm hardhat compile

To deploy the the smart contract, the below script needs to run using hardhat
    
    npm hardhat --network ropsten run scripts/deploy.js

If it is deployed correctly the the console will give a output like below

    Contract deployed to address: ``ADDRESS OF THE CONTRACT IN THE BLOCKCHAIN``

The contract can be seen in the [Ropsten Scanner](https://ropsten.etherscan.io/)

## Environment File
* ``API_URL`` = This is the URL of the alchemy vendor
* ``PRIVATE_KEY`` = The private key of the ethereum wallet
* ``PUBLIC_KEY`` = The public key of the ethereum wallet  
* ``CONTRACT_ADDRESS`` = The address of the smart contract in the blockchain  

## Mint NFT
For minting `scripts/mint-nft.js` is used. Before minting the metadata JSON file needs to be prepare according to the schema that is being define in the ERC-721. It also needs to be uploaded in the IPFS. The ipfs address needs to be added in the argument of `scripts/mint-nft.js` 
    
    mintNFT("IPFS address of the contract")


The code can be run using 
  
    node scripts/mint-nft.js

If the script has been run without any error then the terminal will show 
    
    The hash of your transaction is: ``TRANSACTION_ID``
    Check Alchemy's Mempool to view the status of your transaction!

Note: To get ``eth`` for the test network we can use [fauceth](https://fauceth.komputing.org/) as proper amount of `eth` will be needed to mint.
