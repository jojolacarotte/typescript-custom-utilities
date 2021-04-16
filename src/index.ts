// By William Candillon
// Min
type Min<A, B, C extends 0[] = []> = C["length"] extends A
  ? A
  : C["length"] extends B
  ? B
  : Min<A, B, [0, ...C]>;

type A = Min<4, 5>;

// Count

type Count<A, S extends 0[] = []> = A extends S["length"]
  ? S
  : Count<A, [...S, 0]>;

type C = Count<5>;

// Inc
type Inc<A> = [...Count<A>, 0]["length"];
type D = Inc<5>;

// Dec
type Dec<A> = Count<A> extends [infer Head, ...(infer Tail)]
  ? Tail["length"]
  : 0;
type E = Dec<5>;

// Add
type Add<A, B> = B extends 0 ? A : Add<Inc<A>, Dec<B>>;

type F = Add<5, 0>;
