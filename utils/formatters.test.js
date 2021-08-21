import { listToArrowString } from "./formatters";

describe("formatters test", () => {
  test("arrow formatter should concatenate correctly a list", () => {
    const result = listToArrowString(["a", "b"]);
    expect(result).toEqual("a->b");
  });

  test("arrow formatter should fail when passed a string", () => {
    expect(() => {
        listToArrowString("abc");
    }).toThrow(TypeError)
  });
});
