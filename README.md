# DECOIN - Decentralized Coin Incentivised News.

Our blockchain system and ERC20 tokens are written in Solidity and the transactions are handled in the Metamask wallet. We are using python and flask for the backend. The front end is built using React js and Material UI. 

For automated analysis, we perform named keyword extraction using Spacy, intent analysis using vaderSentiment API, and checking factual claims using google FactCheck API which in turn uses Politifact API. 

We also perform an article trend check by doing a social media analysis using pushshift API and tweepy for searching trending relevant texts on Reddit and Twitter.

## Built With
`docker`
`flask`
`python`
`react`
`solidity`
`sqlite`

## RUN
- run `createdb.py` to initialize local db
- run frontent server using `npm start`
- run backend server using `python app.py`
