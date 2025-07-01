export const manageEventsPromise = (email, accessToken) => {
  return fetch(`https://athletic-club-server.vercel.app/events?creator_email=${email}`,{
    headers: {
      authorization : `Bearer ${accessToken}`
    }
  })
    .then(res => res.json());
};

