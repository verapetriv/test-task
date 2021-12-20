import React from "react";
import style from "./ListOfPeople.module.css";

import { connect } from "react-redux";
import { peopleSelectors } from "../../redux/people";

function ListOfPeople({ listOfPeople }) {
  return (
    <ul className={style.list}>
      {listOfPeople.map((person) => (
        <li key={person.lastname}>
          <p className={style.text}>
            {person.name} {person.lastname}
          </p>
          <p className={style.text}>Возраст: {person.age}</p>
          <p className={style.text}>
            Пол: {person.sex === "m" ? "мужской" : "женский"}
          </p>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  listOfPeople: peopleSelectors.getFilteredPeople(state),
});

export default connect(mapStateToProps, null)(ListOfPeople);
