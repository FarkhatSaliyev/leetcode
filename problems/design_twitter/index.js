class Twitter {
    constructor() {
        this.tweets = {}
        this.time = 0
        this.follows = {}
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweets[userId]){
            this.tweets[userId] = []
        }

        this.tweets[userId].push([this.time++, tweetId])
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let tweets = []

        //Get my tweets
        if(this.tweets[userId]){
            tweets.push(...this.tweets[userId])
        }

        //Get tweets from followers
        if(this.follows[userId]){
            for(let folowee of this.follows[userId]){
                if(this.tweets[folowee]){
                    tweets.push(...this.tweets[folowee])
                }
            }            
        }

        tweets.sort((a,b)=> b[0]-a[0])
        return tweets.slice(0,10).map(tweet=> tweet[1])
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId !== followeeId){
            if(!this.follows[followerId]){
                this.follows[followerId] = new Set()
            }
            this.follows[followerId].add(followeeId)
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.follows[followerId]){
            this.follows[followerId].delete(followeeId)
        }
    }
}

module.exports = Twitter