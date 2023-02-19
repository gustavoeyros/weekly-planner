import fetch from "node-fetch";

export const signUpHandler = async (data: {}) => {
  const response = await fetch(`${process.env.VITE_APIBaseURL}/users/sign-up`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  return response.status;
};
