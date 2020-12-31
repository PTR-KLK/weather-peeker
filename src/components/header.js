import React from "react";
import { MdLocationOff, MdLocationOn } from "react-icons/md";

function Header({
  formValue,
  onChangeFormValue,
  onSubmitCity,
  tracking,
  toggleTracking,
}) {
  return (
    <header className="header">
      <h1>Weather Peeker</h1>
      <button onClick={toggleTracking}>
        {tracking ? <MdLocationOn /> : <MdLocationOff />}
      </button>
      <form onSubmit={onSubmitCity}>
        <input
          type="text"
          value={formValue}
          onChange={onChangeFormValue}
          required
        />
        <input type="submit" value="Go" />
      </form>
    </header>
  );
}

export default Header;
