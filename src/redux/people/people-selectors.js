import { createSelector } from "@reduxjs/toolkit";

const getPeople = (state) => state.people.listOfPeople;

export const getFilterOptions = (state) => {
  return state.people.filterOptions;
};

export const getFilteredPeople = createSelector(
  [getPeople, getFilterOptions],
  (people, filterOptions) => {
    const normalizedFilterName = filterOptions.name.toLowerCase();
    const normalizedFilterLastname = filterOptions.lastname.toLowerCase();

    const filterByName = (name) =>
      name.toLowerCase().includes(normalizedFilterName);
    const filterByLastname = (lastname) =>
      lastname.toLowerCase().includes(normalizedFilterLastname);
    const filterByAge = (age) =>
      age === Number(filterOptions.age) || filterOptions.age === "";
    const filterBySex = (sex) =>
      filterOptions.sex[sex] === true ||
      (filterOptions.sex["m"] === false && filterOptions.sex["f"] === false);

    return people.filter(
      ({ name, lastname, age, sex }) =>
        filterByName(name) &&
        filterByLastname(lastname) &&
        filterByAge(age) &&
        filterBySex(sex)
    );
  }
);
