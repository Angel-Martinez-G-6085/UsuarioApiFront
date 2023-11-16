export const sendForm = async(url, data) => {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if(response) {
            console.log(response)
        }
    } catch(eroor) {
        console.log(eroor);
    }
}