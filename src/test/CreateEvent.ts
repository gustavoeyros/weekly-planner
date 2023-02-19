export const createEvent = async (data: {}, token: string) => {
  const response = await fetch(`${process.env.VITE_APIBaseURL}/events`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });
  const fetchResponse = await response.json();
  return fetchResponse.status;
};
