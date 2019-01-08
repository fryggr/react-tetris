export const FIGURES = ["line", "zipper", "cube", "hook"];
export const FIELD_WIDTH = 10;
export const FIELD_HEIGHT = 20;
export const FIGURES_ROTATE = {
  line: {
    r0: [[-1, 1], [0, 0], [1, -1], [2, -2]],
    r1: [[1, 1], [0, 0], [-1, -1], [-2, -2]],
    r2: [[1, -1], [0, 0], [-1, 1], [-2, 2]],
    r3: [[-1, -1], [0, 0], [1, 1], [2, 2]]
  }
};
