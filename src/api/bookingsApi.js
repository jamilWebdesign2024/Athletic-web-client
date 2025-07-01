export const myApplicationsPromise = (email, accessToken)=>{
    return fetch(`https://athletic-club-server.vercel.app/bookings?email=${email}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}
