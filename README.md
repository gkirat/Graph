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
-Please follow the links to [usingGraph](https://github.com/gkirat/Graph/blob/master/usingGraph/README.md) and [usingNormalBlockchain](https://github.com/gkirat/Graph/blob/master/usingNormalBlockchain/README.md) folders in there you'll find individual instructions.

-HOW I WOULD SUGGEST TO RUN AND CHECK WHICH DATA RETIREIVAL PROCESS IS FASTER (follow the below instructions)
-Once you have started both the open them side by side like on port http://localhost:5173/ and on http://localhost:5174/ 
-Then open the console in inspect element then retrieve data from blockchain will show time in milliseconds and you'll see that using graph it will fetch the whole data from the blockchain that was ever emmited in relatively less by using normal blockchain method which only retrieves the state variable.

TIP:- I have provided the [Smart Contract](https://github.com/gkirat/Graph/blob/master/graph.sol) and the [Contract address](0x0AF89A43A3777a36bb7f0ACe04d30Eb35D6aE9b6) anyone could copy and paste on remix.ide and perform write operations on the smart contract and fetch data from both the methods to see the time taken to retrieve data from both the methods and which one is better.

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
