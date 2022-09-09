export const serverUrl = 'https://yge.wvi.mybluehost.me/test/sanda-server'
// const itmeM = 

export const getItems = async () => {
    try {
        let response = await fetch(`${serverUrl}/account/new/item_chart/d8d7a732-1832-4e25-9a98-e68ddc3f0b26`)

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}