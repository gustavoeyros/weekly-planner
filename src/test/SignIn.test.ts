import { signInHandler } from "./handlers";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 200 }),
  })
) as jest.Mock;

const validUser = {
  email: "validEmail@hotmail.com",
  password: "validPassword",
};

beforeEach(() => {
  jest.fn().mockClear();
});

it("should return 200 if user exist", async () => {
  const result = await signInHandler(validUser);
  expect(result).toEqual(200);
  expect(fetch).toHaveBeenCalledWith(
    "https://latam-challenge-2.deta.dev/api/v1",
    {
      method: "POST",
      body: JSON.stringify(validUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
});

it("should return 400 if user don't exist", async () => {
  const errorMockedFn = jest
    .fn()
    .mockImplementationOnce(() => Promise.reject("400"));

  try {
    const result = await signInHandler({
      email: "fakeEmail@hotmail.com",
      password: "1234567",
    });
    expect(result).toEqual(400);
    expect(fetch).toHaveBeenCalledWith(
      "https://latam-challenge-2.deta.dev/api/v1",
      {
        method: "POST",
        body: JSON.stringify(validUser),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
  } catch (e) {
    expect(errorMockedFn()).rejects.toEqual("400");
  }
});
