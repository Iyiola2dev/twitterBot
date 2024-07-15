import { TwitterApi} from "twitter-api-v2";

const client = new TwitterApi({
    appKey: process.env.apiKey,
    appSecret: process.env.apiKeySecret,
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessTokenSecret
})

const rwClient = client.readWrite

export default rwClient
