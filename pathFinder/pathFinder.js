const trainToStationMapping = {
  white: ["white", "green", "red"],
  green: ["white", "green"],
  red: ["white", "red"],
};

export const findShortestPathNodeList = ({
  metroConfiguration,
  from,
  to,
  color,
}) => {
  const { stations } = metroConfiguration;
  let shortestPath = [];

  const explorePathsForShortest = (connections, currentPath) => {
    connections.forEach((nextStation) => {
      if (nextStation === to) {
        const finalPath = [...currentPath, nextStation].filter(
          checkTrainCorrespondsWithStation
        );
        if (
          finalPath.length < shortestPath.length ||
          shortestPath.length === 0
        ) {
          shortestPath = finalPath;
        }
      }
      if (!currentPath.includes(nextStation)) {
        explorePathsForShortest(stations[nextStation].connections, [
          ...currentPath,
          nextStation,
        ]);
      }
    });
  };

  const checkTrainCorrespondsWithStation = (node) =>
    trainToStationMapping[color].includes(stations[node].color);

  const startingPath = [from];
  if (from === to) {
    return startingPath
  }
  explorePathsForShortest(stations[from].connections, startingPath);
  return shortestPath;
};
