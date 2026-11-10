export interface Point3D {
  x: number;
  y: number;
  z: number;
}

export type Matrix3x3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

export function multiplyMatrixAndPoint(m: Matrix3x3, p: Point3D): Point3D {
  return {
    x: m[0][0] * p.x + m[0][1] * p.y + m[0][2] * p.z,
    y: m[1][0] * p.x + m[1][1] * p.y + m[1][2] * p.z,
    z: m[2][0] * p.x + m[2][1] * p.y + m[2][2] * p.z,
  };
}

// Isometric projection to 2D screen coordinates
export function projectIsometric(p: Point3D, scale = 25, origin = { x: 100, y: 100 }): { x: number; y: number } {
  // Isometric standard angles: 30 degrees for x and y
  const isoX = origin.x + (p.x - p.y) * scale * 0.866;
  const isoY = origin.y + (p.x + p.y) * scale * 0.5 - p.z * scale;
  return { x: Math.round(isoX * 10) / 10, y: Math.round(isoY * 10) / 10 };
}

