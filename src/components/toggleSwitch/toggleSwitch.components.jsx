import './toggleSwitch.styles.scss';

const ToggleSwitch = ({ label, onHandleChange }) => {
  return (
    
    <div className="toggleSwitch-container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          onChange={onHandleChange}
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
