const EARTH_RADIUS = 6378136.49;
const GConfig = {
  meters: EARTH_RADIUS,
  metres: EARTH_RADIUS,
  millimeters: 1e3 * EARTH_RADIUS,
  millimetres: 1e3 * EARTH_RADIUS,
  centimeters: 100 * EARTH_RADIUS,
  centimetres: 100 * EARTH_RADIUS,
  kilometers: EARTH_RADIUS / 1e3,
  kilometres: EARTH_RADIUS / 1e3,
  miles: EARTH_RADIUS / 1609.344,
  nauticalmiles: EARTH_RADIUS / 1852,
  inches: 39.37 * EARTH_RADIUS,
  yards: EARTH_RADIUS / 1.0936,
  feet: 3.28084 * EARTH_RADIUS,
  radians: 1,
  degrees: EARTH_RADIUS / 111325,
};

/**
 * @param {number} radians
 * @param {string} unit
 */
function radiansToLength(radians: number, unit: string) {
  const n = GConfig[unit || 'kilometers'];

  return radians * n;
}

/**
 * @param {number} degrees
 * @returns {number}
 */
function degreesToRadians(degrees: number) {
  return ((degrees % 360) * Math.PI) / 180;
}


/**
 * 计算两个坐标点的距离
 * @param {Array<number>} pos1 [经度，纬度]
 * @param {Array<number>} pos2
 * @param {string} unit
 * @returns {number} distance
 */
export function computeDistance(pos1: readonly [number, number], pos2: readonly [number, number], unit: string = 'meters'): number {
  const r1 = degreesToRadians(pos2[1] - pos1[1]);
  const r2 = degreesToRadians(pos2[0] - pos1[0]);
  const r3 = degreesToRadians(pos1[1]);
  const r4 = degreesToRadians(pos2[1]);
  const f = Math.pow(Math.sin(r1 / 2), 2) + Math.pow(Math.sin(r2 / 2), 2) * Math.cos(r3) * Math.cos(r4);
  const distance = radiansToLength(2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), unit);
  return distance;
};
