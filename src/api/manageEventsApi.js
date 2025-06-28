export const manageEventsPromise = (email) => {
  return fetch(`http://localhost:3000/events?creator_email=${email}`)
    .then(res => res.json());
};