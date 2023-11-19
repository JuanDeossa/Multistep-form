/* eslint-disable react/prop-types */

export const Step2 = ({ classes, register }) => {
  return (
    <div className="Step2">
      <div className={classes.textField}>
        <label>Email</label>
        <input
          type="email"
          placeholder="email@example.com"
          {...register("email")}
        />
      </div>
      <div className={classes.textField}>
        <label>Password</label>
        <input type="text" placeholder="******" {...register("password")} />
      </div>
    </div>
  );
};
