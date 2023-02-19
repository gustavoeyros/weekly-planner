import { signUpHandler } from "./handlers";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 201 }),
  })
) as jest.Mock;

const validUser = {
  firstName: "Gustavo",
  lastName: "Eyros",
  birthDate: "2004-08-19",
  city: "CityX",
  country: "CountrY",
  email: "validEmail@hotmail.com",
  password: "validPassword",
  confirmPassword: "validPassword",
};

beforeEach(() => {
  jest.fn().mockClear();
});

it("should return 201 if user is created", async () => {
  const result = await signUpHandler(validUser);
  expect(result).toEqual(201);
  expect(fetch).toHaveBeenCalledWith(
    "https://latam-challenge-2.deta.dev/api/v1",
    {
      method: "POST",
      body: JSON.stringify(validUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
});

it("should return bad request if not valid user", async () => {
  const errorMockedFn = jest
    .fn()
    .mockImplementationOnce(() => Promise.reject("400"));

  try {
    const result = await signUpHandler({});
    expect(result).not.toBeDefined();
  } catch (err) {
    expect(errorMockedFn()).rejects.toEqual("400");
  }
});
