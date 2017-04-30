import tweepy
from textblob import TextBlob
consumer_key='a'
consumer_secret='b'

def sen_analysis(query,max_items)
	access_token='c'
	access_token_secret='d'
	rate=0

	auth=tweepy.OAuthHandler(consumer_key,consumer_secret)
	auth.set_access_token(access_token,access_token_secret)

	api=tweepy.API(auth)
	tweepy.cursor
	max_items=1000

	cursor = tweepy.Cursor(api.search, q=query).items(max_items)
	tweets = {}
	for tweet in cursor:
	    analysis=TextBlob(tweet.text)
            rate +=analysis.sentiment
    
return rate