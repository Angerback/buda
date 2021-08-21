const trainToStationMapping = {
  white: ["white", "green", "red"],
  green: ["white", "green"],
  red: ["white", "red"],
};

export const findShortestPathNodeList = ({
  pathsConfiguration,
  from,
  to,
  color,
}) => {
  const { stations } = pathsConfiguration;

  const getShortestPath = (possibilities, currentPath) => {
    const localPaths = possibilities.map((possibleNextNode) => {
      if (possibleNextNode === to) {
        return [...currentPath, possibleNextNode];
      }
      if (currentPath.includes(possibleNextNode)) {
        return undefined;
      }

      return getShortestPath(stations[possibleNextNode].connections, [
        ...currentPath,
        possibleNextNode,
      ]);
    });

    return localPaths
      .filter((path) => !!path)
      .map(removeSkippedNodes)
      .sort((a, b) => a.length - b.length)[0];
  };

  const removeSkippedNodes = (path) =>
    path.filter((node) =>
      trainToStationMapping[color].includes(stations[node].color)
    );

  const startingPath = [from];

  return getShortestPath(stations[from].connections, startingPath);
};
