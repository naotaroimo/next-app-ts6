module.exports = {
    env: {
        MY_ENV: process.env.MY_ENV,
        GREETING: process.env.GREETING
    },
    serverRuntimeConfig: {
        //サーバサイド側でのみ利用可能
        MY_SECRET: process.env.MY_SECRET
    },
    publicRuntimeConfig: {
        //クライアント、サーバサイド側両方で利用可能
        MY_MESSAGE: "welcome!"
    }
}