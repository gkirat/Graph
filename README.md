# Blockchain Data Retrieval Comparison

This project demonstrates a comparison between two methods for retrieving data from the Ethereum blockchain. The first method utilizes The Graph, a decentralized protocol for indexing and querying blockchain data. The second method interacts directly with the blockchain using ethers.js. We'll explore how The Graph makes data retrieval more efficient and developer-friendly.

## Table of Contents

- [Prerequisites](#prerequisites)
- [How to setup project](#how-to-setup-project)
- [Code Comparison](#code-comparison)
- [Why The Graph?](#why-the-graph)
- [Benefits of The Graph](#benefits-of-the-graph)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- React
- Ethereum Wallet or Metamask (for the second code)

## How to setup project
Please follow the instructions in the [usingGraph](https://github.com/gkirat/Graph/blob/master/usingGraph/README.md) and [usingNormalBlockchain](https://github.com/gkirat/Graph/blob/master/usingNormalBlockchain/README.md) directories for individual setup steps.

**Tip:** To compare data retrieval speed between the two methods:

1. Start both applications on different ports, e.g., http://localhost:5173/ and http://localhost:5174/.
2. Open the browser console.
3. Click the "Click for info" button in both applications.
4. Observe the time taken. You'll notice that using The Graph fetches more data in less than 3 seconds, while using the normal blockchain method takes nearly 6 seconds for the same data retrieval, showing a significant difference in time efficiency.
5. For larger data, The Graph's efficiency becomes even more apparent
6. You could observe the difference in given images below.

   
- Using NORMAL BLOCKCHAIN method
  
<img width="1438" alt="Screenshot 2023-10-22 at 9 22 52 PM" src="https://github.com/gkirat/Graph/assets/103166972/735e282b-ec36-4453-8c8b-2ffcce94d360">


- Using THE GRAPH method
  
<img width="1434" alt="Screenshot 2023-10-22 at 9 19 10 PM" src="https://github.com/gkirat/Graph/assets/103166972/bac0ae5d-49dd-48cd-a793-4ea07466567f">



- TIP:- I have provided the [Smart Contract](https://github.com/gkirat/Graph/blob/master/graph.sol) code file and the [Contract address](https://github.com/gkirat/Graph/blob/master/contractAddress.txt) anyone could copy and paste on remix.ide and perform write operations on the smart contract and fetch data from both the methods to see the time taken to retrieve data from both the methods and which one is better.

- IMPORTANT NOTE: Please please select environment as Injected web3 and Mumbai test network in Metamask wallet because the smart contract is deployed on Mumbai testnet.
  
like shown in the image

<img width="1440" alt="Screenshot 2023-10-22 at 9 13 54 PM" src="https://github.com/gkirat/Graph/assets/103166972/ebf19345-4e80-4d37-b9fa-4a148aa38cc3">


## Code Comparison

### Method 1: Using The Graph

- File: `App.js` in the `with-graph` directory
- This method utilizes The Graph to retrieve data from the Ethereum blockchain.
- Benefits: 

   - Significantly reduces data retrieval time.
   - Simplifies data querying with GraphQL.
   - Allows for efficient storage and organization of blockchain data.
   
- To test, click the "Click for info" button to retrieve and display data from the blockchain using The Graph.

### Method 2: Using Normal Blockchain Interaction

- File: `App.js` in the `with-normal` directory
- This method interacts directly with the blockchain using ethers.js.
- Cons:

   - Data retrieval may be slow for complex operations.
   - Requires direct interaction with Ethereum using Metamask.
   
- To test, click the "Click to connect" button to connect your Ethereum wallet, and then click "Click for info" to retrieve and display data from the blockchain directly.

## Why The Graph?

The Ethereum blockchain stores vast amounts of data, making it challenging to query and retrieve specific information efficiently. The Graph addresses these challenges by providing a decentralized protocol for indexing and querying blockchain data. It simplifies data retrieval and querying, making it a preferred choice for developers.

## Benefits of The Graph

- **Faster Data Retrieval:** Using The Graph significantly reduces the time required to retrieve data from the Ethereum blockchain, enhancing user experience.

- **GraphQL Querying:** The Graph allows developers to use GraphQL to retrieve specific data, making it easy to search for and organize information.

- **Efficient Data Storage:** The Graph efficiently indexes and stores blockchain data, ensuring it's readily available when needed.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or would like to add more data retrieval methods for comparison, feel free to open an issue or a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
