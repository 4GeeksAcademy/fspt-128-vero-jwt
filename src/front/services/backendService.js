
export const login = async (user) =>{
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`,{
        method: "POST",
        body: JSON.stringify(user),
        headers:{
         "content type":"application/json"
        }
    })
    const data= await response.json()
    if(!response.ok){
        alert(data.error)
        return
    }
    localStorage.setItem("token", data.token)
}

