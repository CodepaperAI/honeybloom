"use client";

import Lottie from "lottie-react";

const petal = (rotation: number) => ({
  ty: "gr",
  nm: `Petal ${rotation}`,
  it: [
    {
      ty: "el",
      p: { a: 0, k: [0, -31] },
      s: { a: 0, k: [21, 48] },
      nm: "Petal ellipse",
    },
    {
      ty: "fl",
      c: { a: 0, k: [0.31, 0.18, 0.3, 1] },
      o: { a: 0, k: 64 },
      nm: "Petal fill",
    },
    {
      ty: "tr",
      p: { a: 0, k: [0, 0] },
      a: { a: 0, k: [0, 0] },
      s: { a: 0, k: [100, 100] },
      r: { a: 0, k: rotation },
      o: { a: 0, k: 100 },
      sk: { a: 0, k: 0 },
      sa: { a: 0, k: 0 },
      nm: "Transform",
    },
  ],
});

const bloomAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 120,
  w: 180,
  h: 180,
  nm: "Honey Bloom Beauty mark",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bloom petals",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [-8], e: [8], i: { x: [0.66], y: [1] }, o: { x: [0.33], y: [0] } },
            { t: 60, s: [8], e: [-8], i: { x: [0.66], y: [1] }, o: { x: [0.33], y: [0] } },
            { t: 120, s: [-8] },
          ],
        },
        p: { a: 0, k: [90, 90, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [88, 88, 100], e: [103, 103, 100], i: { x: [0.66], y: [1] }, o: { x: [0.33], y: [0] } },
            { t: 60, s: [103, 103, 100], e: [88, 88, 100], i: { x: [0.66], y: [1] }, o: { x: [0.33], y: [0] } },
            { t: 120, s: [88, 88, 100] },
          ],
        },
      },
      shapes: [petal(0), petal(72), petal(144), petal(216), petal(288)],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Honey center",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [90, 90, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [34, 34] },
          nm: "Center ellipse",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.96, 0.67, 0.16, 1] },
          o: { a: 0, k: 100 },
          nm: "Center fill",
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0,
    },
  ],
};

export function BloomLottie() {
  return (
    <div className="bloom-lottie" aria-hidden="true">
      <Lottie animationData={bloomAnimation} loop autoplay rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }} />
    </div>
  );
}
