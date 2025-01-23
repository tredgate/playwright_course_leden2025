import { expect, test } from "@playwright/test";

test("Exercise API asserts", async ({ request }) => {
  const resp = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const body = await resp.json();
  expect(typeof body.timestamp).toBe("string");
  expect(body.id).toBe(1);
});
