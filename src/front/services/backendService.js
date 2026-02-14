
export const login = async (user, navigate) =>{


    
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`,{
        method: "POST",
        body: JSON.stringify(user),
        headers:{
         "Content-Type":"application/json"
        }
    })

    if(!response.ok){
        // alert(response.error)
        return jsonify({"error":"no estas registrado registrate"}),404
    }
    const data= await response.json()
    localStorage.setItem("token", data.token)
   
}

export const register = async(user, navigate)=>{


    const response= await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`,{
        method:"POST",
        body: JSON.stringify(user),
        headers:{
         "Content-Type":"application/json"
        }    
    })
    const data = await response.json()
    
    if (!response.ok){
        alert("algo salio mal en el registro")
        return data
    }
    return{ok:true}

     
}