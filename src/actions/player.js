export function style(top, left, height, width, zindex, r, g, b, a) {
  return {
    "top" : `${}px`,
    "left" : `${}px`,
    "height" : `${}px`,
    "width" : `${}px`,
    "z-index" : `${}`,
    "rgba" : `${r, g, b, a}px`,
    "top" : `${}px`,
    "transform": `matrix3d(1,0,0.00,0,0.00,1,0.00,-.001,0,0,1,0,0,0,0,1)`;
    "-webkit-transform": `matrix3d(1,0,0.00,0,0.00,1,0.00,-.001,0,0,1,0,0,0,0,1)`;
  }
}
