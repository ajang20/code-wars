// 7 kyu Automorphic Number (Special Numbers Series #6)
function automorphic(n) {
  return (n ** 2 + "").endsWith(n + "") ? "Automorphic" : "Not!!";
}
