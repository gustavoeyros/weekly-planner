export const signInHandler = async (data: {}) => {
  const response = await fetch(`${process.env.VITE_APIBaseURL}/users/sign-in`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const fetchResponse = await response.json();
  return fetchResponse.status;
};
