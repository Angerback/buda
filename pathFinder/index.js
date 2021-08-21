const trainToStationMapping = {
  white: ["white", "green", "red"],
  green: ["white", "green"],
  red: ["white", "red"],
};

export const findShortestPath = ({ config, from, to, color }) => {
  const { paths, stations } = config;

  const pathToColorValidPath = (path) =>
    path.filter((node) =>
      trainToStationMapping[color].includes(stations[node])
    );

  const getShortestPath = (possibilities, currentPath) => {
    const localPaths = possibilities.map((possibleNextNode) => {
      if (possibleNextNode === to) {
        return [...currentPath, possibleNextNode];
      }
      if (currentPath.includes(possibleNextNode)) {
        return undefined;
      }

      return getShortestPath(paths[possibleNextNode], [
        ...currentPath,
        possibleNextNode,
      ]);
    });

    return localPaths
      .filter((path) => !!path)
      .map(pathToColorValidPath)
      .sort((a, b) => a.length - b.length)[0];
  };
  const startingPath = [from];

  return getShortestPath(paths[from], startingPath)
};
