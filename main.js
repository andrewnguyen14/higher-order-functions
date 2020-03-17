const companies = [
  { name: "Company One", category: "finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "finance", start: 1989, end: 2010 },
  { name: "Company Five", category: "technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "retail", start: 1986, end: 1996 },
  { name: "Company Eight", category: "finance", start: 1981, end: 2003 },
  { name: "Company Nine", category: "auto", start: 2011, end: 2016 },
  { name: "Company Ten", category: "retail", start: 1981, end: 1989 }
];

const ages = [12, 11, 33, 12, 44, 65, 33, 23, 15, 56, 45, 65, 87, 78];

// ============== For Loop ==============
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// ============== For Each ===============
// companies.forEach(company => {
//   console.log(company.name);
// });

// ============== Filter ==============

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(age => {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => {
//   if (company.category === "retail") {
//     return true;
//   }
// });

// Companies with retail category
// const retailCompanies = companies.filter(
//   company => company.category === "retail"
// );
// console.log(retailCompanies);

//Companies from the 80s
// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

//Companies that lasted at least 10 years
// const lastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(lastedTenYears);
