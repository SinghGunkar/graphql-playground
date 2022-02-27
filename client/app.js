const GRAPHQL_URL = "http://localhost:9000/"

async function fetchMessage() {
    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: ` 
                query { 
                    message 
                }
            `
        })
    })
    const responseBody = await response.json()
    console.log(responseBody)
}

fetchMessage()
