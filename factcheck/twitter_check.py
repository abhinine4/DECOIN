# import tweepy
# from tweepy import OAuth1UserHandler, API
# from keyword_ex import extract

# class Tweet:
#     def __init__(self,keys):
#         cons_key = keys["cons"]
#         cons_secret = keys["cons_secret"]
#         access_key = keys["acc"]
#         access_secret = keys["acc_secret"]
#         auth = tweepy.OAuthHandler(cons_key, cons_secret)
#         auth.set_access_token(access_key, access_secret)
#         self.api = tweepy.API(auth)
    
#     def fetch_tweets(self, text):
#         keywords = extract(text)
#         new = []
#         if len(keywords)>2:
#             search = " OR ".join(keywords)
#         else:
#             search = "twitter" 
#         tweets = tweepy.Cursor(self.api.search_tweets, q=search, tweet_mode='extended', lang="en")
#         twt = []
#         for tweet in tweets.items():
#             twt.append(tweet.full_text)
#         return len(twt)


# if __name__ == '__main__':
#     text = "Apple is going to buy U.K startup"
#     keys = {"cons": "",
#             "cons_secret": "",
#             "acc": "",
#             "acc_secret": ""}

#     twt_obj = Tweet(keys)
#     twt = twt_obj.fetch_tweets(text)
#     print(twt)
    
