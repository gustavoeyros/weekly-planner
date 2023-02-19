export const signUpHandler = async (data: {}) => {
  const response = await fetch("https://latam-challenge-2.deta.dev/api/v1", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  const fetchResponse = await response.json();
  return fetchResponse.status;
};

export const signInHandler = async (data: {}) => {
  const response = await fetch("https://latam-challenge-2.deta.dev/api/v1", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const fetchResponse = await response.json();
  return fetchResponse.status;
};
