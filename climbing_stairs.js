const minCostClimbingStairs = (flight_of_stairs) => {
    for (let i = flight_of_stairs.length - 3; ~i; i--) {
      flight_of_stairs[i] += Math.min(flight_of_stairs[i + 1], flight_of_stairs[i + 2]);
    }
    return Math.min(flight_of_stairs[0], flight_of_stairs[1]);
}
