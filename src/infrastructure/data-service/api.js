const BASE_URL = 'http://localhost:8001'
export const fetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/todos`, {
            method: 'GET',
        })
        if (response.ok) {
            return await response.json()
        } else {
            Promise.reject(null)
        }
    } catch (err) {
        Promise.reject(err)
    }
}