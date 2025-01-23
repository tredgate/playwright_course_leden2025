//api_tests.spec.ts

import { test } from "@playwright/test";

test("GET Request", { tag: "@gitHubActions" }, async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET request with parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 145,
    },
  });
});

test("GET Booking with Header", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: {
      "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
    },
  });
});

test("POST Request with body", async ({ request }) => {
  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const randomString = generateRandomString(10);

  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        email: `${randomString}@example.com`,
        username: randomString,
        password: "123456",
      },
    }
  );
});

test("Update Booking with authorized request - transfer data", async ({
  request,
}) => {
  const authResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
    {
      data: {
        username: "Tristian.OConnell",
        password: "123456",
      },
    }
  );
  console.log(JSON.stringify(authResponse, null, 2));
  const responseBody = await authResponse.json();
  console.log("---------------------------");
  console.log(JSON.stringify(responseBody, null, 2));
  const token = responseBody.access_token;

  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`, // "Bearer " + token
      },
    }
  );
});
/*
Vytvořte volání API v playwright:
Složka: projekt/tests/exercises
Test: regres_in_register_test.spec.ts
Request:
Metoda: POST
URL: https://reqres.in/api/register
Body:
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
Header:
Accept-Encoding: gzip, deflate, br

*/
