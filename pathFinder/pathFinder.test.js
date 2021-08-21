import { findShortestPathNodeList } from ".";

const mockConfig = {
  paths: {
    a: ["b"],
    b: ["a", "c"],
    c: ["b", "d", "g"],
    d: ["c", "e"],
    e: ["d", "f"],
    f: ["e", "i"],
    i: ["f", "h"],
    h: ["i", "g"],
    g: ["h", "c"],
  },
  stations: {
    a: "white",
    b: "white",
    c: "white",
    d: "white",
    e: "white",
    f: "white",
    g: "green",
    h: "red",
    i: "green",
  },
};

describe("pathFinder", () => {
  test("should return correct adjacent nodes path", () => {
    const result = findShortestPathNodeList({
      pathsConfiguration: mockConfig,
      from: "a",
      to: "b",
      color: "red",
    });
    expect(result).toEqual(["a", "b"]);
  });

  test("should return correct path for nodes separated by one node", () => {
    expect(
      findShortestPathNodeList({ pathsConfiguration: mockConfig, from: "a", to: "c", color: "red" })
    ).toEqual(["a", "b", "c"]);
    expect(
      findShortestPathNodeList({ pathsConfiguration: mockConfig, from: "b", to: "d", color: "red" })
    ).toEqual(["b", "c", "d"]);
  });

  describe("should return correct path from a to f", () => {
    test("when train is red", () => {
      expect(
        findShortestPathNodeList({
          pathsConfiguration: mockConfig,
          from: "a",
          to: "f",
          color: "red",
        })
      ).toEqual(["a", "b", "c", "h", "f"]);
    });
    test("when train is white", () => {
      expect(
        findShortestPathNodeList({
          pathsConfiguration: mockConfig,
          from: "a",
          to: "f",
          color: "white",
        })
      ).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
    test("when train is green", () => {
      expect(
        findShortestPathNodeList({
          pathsConfiguration: mockConfig,
          from: "a",
          to: "f",
          color: "green",
        })
      ).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
  });
});
