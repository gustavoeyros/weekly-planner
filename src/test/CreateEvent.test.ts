import { it, expect } from "vitest";
import { createEvent } from "./CreateEvent";

const validEvent = {
  description: "adsdsadassda",
  dayOfWeek: "sunday",
};
//It is necessary to enter a valid token, as it expires after a while.
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhOWJlODQ1NzcwNmUzYmQzZGY2NGYiLCJpYXQiOjE2NzY5MDc0NjksImV4cCI6MTY3Njk0MzQ2OX0.2k3CE0vzlBmwR82cWoQm1HEkmOCYV01uNF3-XCRyd8Y";

it("should return 201 if event created sucessfully", async () => {
  const response = await createEvent(validEvent, token);
  expect(response).toBe(201);
});

it("should return 401 if user not auth", async () => {
  const response = await createEvent(validEvent, "");
  expect(response).toBe(401);
});
it("should return 400 if user not send valid input", async () => {
  const response = await createEvent({}, token);
  expect(response).toBe(400);
});
