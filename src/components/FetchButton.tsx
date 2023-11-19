import { useState } from "preact/hooks";
import { DataDisplay } from "./DataDisplay";

const FetchButton = () => {
  const [fetchData, setFetchData] = useState(false);

  const [nameChecked, setNameChecked] = useState(false);
  const [usernameChecked, setUsernameChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  const handleClick = () => {
    console.log(nameChecked, usernameChecked, emailChecked);
    setFetchData(true);
  };

  return (
    <div className="input-area">
      <label className="label" htmlFor="name">
        <input
          type="checkbox"
          name="name"
          id="name"
          checked={nameChecked}
          onChange={() => setNameChecked(!nameChecked)}
        />
        name
      </label>
      <label className="label" htmlFor="username">
        <input
          type="checkbox"
          name="username"
          id="username"
          checked={usernameChecked}
          onChange={() => setUsernameChecked(!usernameChecked)}
        />
        username
      </label>
      <label className="label" htmlFor="email">
        <input
          type="checkbox"
          name="email"
          id="email"
          checked={emailChecked}
          onChange={() => setEmailChecked(!emailChecked)}
        />
        email
      </label>
      <button className="fetch-button" onClick={handleClick}>
        Click Me
      </button>
      {fetchData && (
        <DataDisplay
          nameChecked={nameChecked}
          usernameChecked={usernameChecked}
          emailChecked={emailChecked}
        />
      )}
    </div>
  );
};

export default FetchButton;
