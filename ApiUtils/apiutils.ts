export async function getToken(apiContext, loginPayload){
        const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
    
        const apiResponse = await apiContext.post(url, {
            data: loginPayload
        })
    
        const jsonResponse = await apiResponse.json()
        const token = await jsonResponse.token
        return token
}


export async function orderProduct(apiContext, token, orderPayload){
    const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"

    const orderResponse = await apiContext.post(orderURL, {
        data: orderPayload,
        headers : {
           "authorization" : token
        }
    })

    const orderResponseJson = await orderResponse.json()

    const orderID = await orderResponseJson.orders[0]
    return orderID
}