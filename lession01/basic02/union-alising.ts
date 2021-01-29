function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  console.log(result);
}

combine(20, 56);
combine("satish", "kumar");
combine("satish", 22);

// aliasing in typescript
type Combinable = number | string;
type resultType = "as-number" | "as-string"
function combine01(n1: Combinable, n2: Combinable,r:resultType) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" || r ==="as-number") {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  console.log(result);
}

combine01(20, 56,"as-number");
combine01("satish", "kumar","as-string");
combine01("satish", 22,"as-string");
