export interface Point2D {
  x: number;
  y: number;
}

export function rotatePoint(p: Point2D, center: Point2D, angleDegrees: number): Point2D {
  const rad = (angleDegrees * Math.PI) / 180;
  const cos = Math.round(Math.cos(rad) * 1000) / 1000;
  const sin = Math.round(Math.sin(rad) * 1000) / 1000;
  const dx = p.x - center.x;
  const dy = p.y - center.y;
  return {
    x: Math.round(center.x + dx * cos - dy * sin),
    y: Math.round(center.y + dx * sin + dy * cos),
  };
}

export function reflectPointHorizontal(p: Point2D, axisY: number): Point2D {
  return {
    x: p.x,
    y: 2 * axisY - p.y,
  };
}

export function reflectPointVertical(p: Point2D, axisX: number): Point2D {
  return {
    x: 2 * axisX - p.x,
    y: p.y,
  };
}

export function pointsToSvgString(pts: Point2D[]): string {
  return pts.map((p) => `${p.x},${p.y}`).join(' ');
}

