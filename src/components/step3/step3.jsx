/* eslint-disable react/prop-types */

export const Step3 = ({ classes, register }) => {
  return (
    <div className="Step3">
      <div className={classes.textField}>
        <label>Phone Number</label>
        <input type="text" placeholder="321..." {...register("phone")} />
      </div>
      <div className={classes.textField}>
        <label>Address</label>
        <input
          type="text"
          placeholder="Cra52A#99Sur-90"
          {...register("address")}
        />
      </div>
    </div>
  );
};
