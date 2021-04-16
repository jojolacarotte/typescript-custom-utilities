type Min<A, B, C extends 0[] = []> = C["length"] extends A
  ? A
  : C["length"] extends B
  ? B
  : Min<A, B, [0, ...C]>;

type R = Min<4, 5>;
