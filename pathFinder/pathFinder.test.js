import { findShortestPath } from "./pathFinder";

const mockConfig = {
  stations: {
    a: { color: "white", connections: ["b"] },
    b: { color: "white", connections: ["a", "c"] },
    c: { color: "white", connections: ["b", "d", "g"] },
    d: { color: "white", connections: ["c", "e"] },
    e: { color: "white", connections: ["d", "f"] },
    f: { color: "white", connections: ["e", "i"] },
    i: { color: "green", connections: ["f", "h"] },
    h: { color: "red", connections: ["i", "g"] },
    g: { color: "green", connections: ["h", "c"] },
  },
};

describe("pathFinder", () => {

  test("should return same node if path goes to the same node", () => {
    const result = findShortestPath({
      metroConfiguration: mockConfig,
      from: "a",
      to: "a",
      color: "white",
    });
    expect(result).toEqual(["a"]);
  });

  test("should return correct adjacent nodes path", () => {
    const result = findShortestPath({
      metroConfiguration: mockConfig,
      from: "a",
      to: "b",
      color: "red",
    });
    expect(result).toEqual(["a", "b"]);
  });

  test("should return correct path for nodes separated by one node", () => {
    expect(
      findShortestPath({
        metroConfiguration: mockConfig,
        from: "a",
        to: "c",
        color: "red",
      })
    ).toEqual(["a", "b", "c"]);
    expect(
      findShortestPath({
        metroConfiguration: mockConfig,
        from: "b",
        to: "d",
        color: "red",
      })
    ).toEqual(["b", "c", "d"]);
  });

  describe("should return correct path from a to f", () => {
    test("when train is red", () => {
      expect(
        findShortestPath({
          metroConfiguration: mockConfig,
          from: "a",
          to: "f",
          color: "red",
        })
      ).toEqual(["a", "b", "c", "h", "f"]);
    });
    test("when train is white", () => {
      expect(
        findShortestPath({
          metroConfiguration: mockConfig,
          from: "a",
          to: "f",
          color: "white",
        })
      ).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
    test("when train is green", () => {
      expect(
        findShortestPath({
          metroConfiguration: mockConfig,
          from: "a",
          to: "f",
          color: "green",
        })
      ).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
  });
});
