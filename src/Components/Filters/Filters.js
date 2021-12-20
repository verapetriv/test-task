import React, { Component } from "react";
import { connect } from "react-redux";

import { peopleSelectors, peopleActions } from "../../redux/people";

import style from "./Filters.module.css";

class Filters extends Component {
  render() {
    const {
      filterOptions: { name, lastname, age, sex },
      onChangeFilterName,
      onChangeFilterLastame,
      onChangeFilterAge,
      onChangeFilterSex,
    } = this.props;
    return (
      <div>
        <h4>Отфильтровать список людей:</h4>
        <form className={style.filters}>
          <div className={style.form_row}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChangeFilterName}
            />
          </div>
          <div className={style.form_row}>
            <label htmlFor="lastname">Фамилия</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={onChangeFilterLastame}
            />
          </div>
          <div className={style.form_row}>
            <label htmlFor="age">Возраст</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={onChangeFilterAge}
            />
          </div>
          <div className={style.form_row} onChange={onChangeFilterSex}>
            <p className={style.text}>Пол</p>
            <label>
              <input type="checkbox" name="m" value={sex.m} />м
            </label>
            <label>
              <input type="checkbox" name="f" value={sex.f} />ж
            </label>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterOptions: peopleSelectors.getFilterOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilterName: (e) =>
    dispatch(peopleActions.changeName(e.currentTarget.value)),
  onChangeFilterLastame: (e) =>
    dispatch(peopleActions.changeLastname(e.currentTarget.value)),
  onChangeFilterAge: (e) =>
    dispatch(peopleActions.changeAge(e.currentTarget.value)),
  onChangeFilterSex: (e) =>
    dispatch(peopleActions.changeSex(e.target.name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
