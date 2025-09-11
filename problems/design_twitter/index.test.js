// twitter.test.js
const Twitter = require("./index"); // adjust if file name differs

describe("Twitter", () => {
  let twitter;

  beforeEach(() => {
    twitter = new Twitter();
  });

  test("should post and retrieve tweets", () => {
    twitter.postTweet(1, 5);
    expect(twitter.getNewsFeed(1)).toEqual([5]);
  });

  test("should return latest 10 tweets", () => {
    for (let i = 1; i <= 15; i++) {
      twitter.postTweet(1, i);
    }
    const feed = twitter.getNewsFeed(1);
    expect(feed.length).toBe(10);
    expect(feed).toEqual([15, 14, 13, 12, 11, 10, 9, 8, 7, 6]);
  });

  test("should follow and see followee tweets", () => {
    twitter.postTweet(1, 101);
    twitter.postTweet(2, 102);
    twitter.follow(1, 2);

    const feed = twitter.getNewsFeed(1);
    expect(feed).toContain(101);
    expect(feed).toContain(102);
  });

  test("should unfollow and not see followee tweets", () => {
    twitter.postTweet(1, 101);
    twitter.postTweet(2, 102);
    twitter.follow(1, 2);

    let feed = twitter.getNewsFeed(1);
    expect(feed).toContain(102);

    twitter.unfollow(1, 2);
    feed = twitter.getNewsFeed(1);
    expect(feed).not.toContain(102);
  });

  test("should handle user with no tweets", () => {
    expect(twitter.getNewsFeed(3)).toEqual([]);
  });
});
