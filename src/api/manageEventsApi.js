export const manageEventsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/events?creator_email=${email}`,{
    headers: {
      authorization : `Bearer ${accessToken}`
    }
  })
    .then(res => res.json());
};

