import { it, expect } from "vitest";
import { createEvent } from "./CreateEvent";

const validEvent = {
  description: "Description",
  dayOfWeek: "monday",
};

const token = process.env.VITE_ValidToken;

it("should return 200 if event created sucessfully", async () => {
  const response = await createEvent(validEvent, token);
  expect(response).toBe(200);
});

it("should return 401 if user not auth", async () => {
  const response = await createEvent(validEvent, "");
  expect(response).toBe(401);
});
it("should return 400 if user not send valid input", async () => {
  const response = await createEvent({}, token);
  expect(response).toBe(400);
});
