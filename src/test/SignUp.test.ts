import { it, expect } from "vitest";
import { signUpHandler } from "./SignUp";

const validUser = {
  firstName: "validName",
  lastName: "validLastName",
  birthDate: "2004-02-19",
  city: "valiDcity",
  country: "valiDcountry",
  email: `${Math.random()}@hotmail.com`,
  password: "12345678",
  confirmPassword: "12345678",
};

const existingUser = {
  firstName: "validName",
  lastName: "validLastName",
  birthDate: "2004-02-19",
  city: "valiDcity",
  country: "valiDcountry",
  email: `testezinDoEmail@hotmail.com`,
  password: "12345678",
  confirmPassword: "12345678",
};

it("should return 201 if user created sucessfully", async () => {
  const response = await signUpHandler(validUser);
  expect(response).toBe(201);
});

it("should return 400 if user exist", async () => {
  const response = await signUpHandler(existingUser);
  expect(response).toBe(400);
});

it("should return 400 if send invalid input", async () => {
  const response = await signUpHandler({});
  expect(response).toBe(400);
});
