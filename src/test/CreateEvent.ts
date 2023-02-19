import fetch from "node-fetch";

export const createEvent = async (data: {}, token: string | undefined) => {
  const response = await fetch(`${process.env.VITE_APIBaseURL}/events`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.status;
};
