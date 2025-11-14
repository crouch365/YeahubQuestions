//разбить код !!!!

import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import styles from "./styles.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { filtersSelectors } from "@/features/filters/model/filterSelector";
import { filterAction } from "@/features/filters";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";

const FormFilter = () => {
  const dispatch = useAppDispatch();
  // специализация
  const { data: specializations } = useGetSpecializationQuery({});
  const selectedSpecialization = useAppSelector(
    filtersSelectors.selectFilterSpecialization
  );

  const handleToggleSpec = (id: number) => {
    dispatch(filterAction.setSpecialization(id));
  };

  const [showAllSpec, setShowAllSpec] = useState<boolean>(false);

  const specializationArr = showAllSpec
    ? specializations?.data
    : specializations?.data.slice(0, 5);

  const ViewAll = () => {
    setShowAllSpec((prev) => !prev);
  };

  // скиллы

  const selectedSkills = useAppSelector(filtersSelectors.selectFilterSkills);
  // const selectedSkillsWithSpecialization = useAppSelector(
  //   filtersSelectors.selectSkillSpecializations
  // );
  const { data: skills } = useGetSkillsQuery({
    specializations: selectedSpecialization,
  });

  const handleToggleSkills = (id: number) => {
    dispatch(filterAction.setSkills(id));
  };
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);

  const skillsArr = showAllSkills ? skills?.data : skills?.data.slice(0, 5);

  const ViewAllSkills = () => {
    setShowAllSkills((prev) => !prev);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formBlock}>
        <div className={styles.inputTextBlock}>
          <input type="text" placeholder="Введите запрос . . . " />
        </div>
        {/* тут специализация */}
        <div className={styles.specializationList}>
          <h3>Категории вопросов</h3>
          <div className={styles.specializationBlock}>
            {specializationArr?.map((specialization) => (
              <div key={specialization.id} className={styles.item}>
                <input
                  type="radio"
                  id={`specialization-${specialization.id}`}
                  name="specialization"
                  checked={selectedSpecialization === specialization.id}
                  onChange={() => handleToggleSpec(specialization.id)}
                  className={styles.input}
                />
                <label
                  className={styles.label}
                  htmlFor={`specialization-${specialization.id}`}
                >
                  {specialization.title}
                </label>
              </div>
            ))}
          </div>

          <button type="button" onClick={ViewAll}>
            {showAllSpec ? "Скрыть" : "Показать все"}
          </button>
        </div>

        {/* тут скиллы */}
        <div className={styles.specializationList}>
          <h3>Навыки</h3>
          <div className={styles.specializationBlock}>
            {skillsArr?.map((skill) => (
              <div key={skill.id} className={styles.item}>
                <input
                  type="checkbox"
                  id={`skill-${skill.id}`}
                  className={styles.input}
                  checked={selectedSkills.includes(skill.id)}
                  onChange={() => handleToggleSkills(skill.id)}
                />
                <label className={styles.label} htmlFor={`skill-${skill.id}`}>
                  {skill.title}
                </label>
              </div>
            ))}
          </div>

          <button type="button" onClick={ViewAllSkills}>
            {showAllSkills ? "Скрыть" : "Показать все"}
          </button>
        </div>
        <div>
          <p>Уровень сложности</p>
        </div>
        <div>
          <label>Рейтинг вопросов</label>
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
