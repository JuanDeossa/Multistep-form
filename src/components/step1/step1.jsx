/* eslint-disable react/prop-types */

export const Step1 = ({ classes, register }) => {
  return (
    <div className="Step1">
      <div className={classes.textField}>
        <label>Name</label>
        <input type="text" placeholder="name" {...register("name")} />
      </div>
      <div className={classes.textField}>
        <label>Last Name</label>
        <input type="text" placeholder="last name" {...register("lastName")} />
      </div>
    </div>
  );
};
