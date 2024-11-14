const random = () => {
    const d = new Date()
    return `${d.getFullYear()}.${d.getMonth()}.${d.getDate()}.${d.getHours()}`
}

export const DataService = async () => {
    const response = await fetch(`https://leonardojsuarez.sirv.com/database/db.json?${random()}`)

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json()

    return data
}