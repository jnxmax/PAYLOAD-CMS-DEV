
const url = "https://json-data-handler.vercel.app/api/track?id=1"

export const getPosts = () => {
    const data = fetch(url, {
        method: "GET",
        
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((error) => {
        console.error("Error fetching tracking data:", error)
    })
    return data
}