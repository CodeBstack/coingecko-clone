import './toggleSwitch.styles.scss';

const ToggleSwitch = ({ label }) => {
  return (
    <div className="toggleSwitch-container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>{' '}
      &nbsp; &nbsp;
      {label}
    </div>
  );
};
export default ToggleSwitch;
