export const DataService = async () => {
    // return json ?? []
    const response = await fetch('https://leonardojsuarez.sirv.com/database/db.json')

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json()

    return data
}