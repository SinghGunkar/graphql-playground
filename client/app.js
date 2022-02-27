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
    const { data } = await response.json()
    return data
}

fetchMessage().then(({ message }) => {
    document.querySelector("h1").textContent = message
})
