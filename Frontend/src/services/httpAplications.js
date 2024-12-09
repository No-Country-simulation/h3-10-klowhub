let token
if (typeof window !== 'undefined'){
    token = window.localStorage.getItem('TOKEN_KEY')
    console.log(token)    
}

export async function ServiceApps(search){
console.log(search)
    try {
        const res = await fetch(`https://knowhub-api-production.up.railway.app/applications/search?query=${search}`,{
            method: 'GET',
            headers: {
                "Authorization": "Bearer "+token || '' ,
                "Content-Type": "application/json",
            }
        })

        if(!res.ok){
            console.error("Error en la petición", res.status)
        }

        const data = await res.json()
        return data;
    }
    catch(e){
        console.error('error ', e)
    }
}