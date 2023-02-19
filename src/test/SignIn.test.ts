import { it, expect } from "vitest";
import { signInHandler } from "./SignIn";

const existingUser = {
  email: "testezinDoEmail@hotmail.com",
  password: "12345678910",
};

const fakeUser = {
  email: `${Math.random().toString(10)}@hotmail.com`,
  password: "1234567",
};

it("should return 200 if user exist", async () => {
  const response = await signInHandler(existingUser);
  expect(response).toBe(200);
});

it("should return 400 if user don't exist ", async () => {
  const response = await signInHandler(fakeUser);
  expect(response).toBe(400);
});

it("should return 400 if send invalid input", async () => {
  const response = await signInHandler({});
  expect(response).toBe(400);
});
