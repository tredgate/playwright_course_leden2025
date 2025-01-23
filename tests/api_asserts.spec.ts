import { expect, test } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  expect(response.status()).toBe(200);
});

test("Assert header", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  expect(contentType).toEqual("application/json; charset=utf-8");
  expect(contentType).toContain("application/json");
});

test("Body asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const responseBody = await response.json();
  // kontrola existence
  expect(responseBody.createdAt).toBeDefined();
  // kontrola typ datové hodnoty
  expect(typeof responseBody.userId).toBe("number");
  console.log(typeof responseBody.createdAt);
  // kontrola dat
  expect(responseBody.email).toBe("petr.fifka@tredgate.cz");
});

/*
Ve složce exercises vytvořte nový test soubor: api_asserts_exercise.spec.ts
Vytvořte volání API v playwright na https://tegb-backend-877a0b063d29.herokuapp.com/train
Metoda: PATCH
Otestujte, že timestamp je text, id = 1

*/
