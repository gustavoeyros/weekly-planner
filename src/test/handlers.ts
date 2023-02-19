export const signUpHandler = async (data: {}) => {
  try {
    const response = await fetch(
      "https://latam-challenge-2.deta.dev/api/v1/users/sign-up",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );

    const fetchResponse = await response.json();
    return fetchResponse.status;
  } catch (e) {
    return null;
  }
};
