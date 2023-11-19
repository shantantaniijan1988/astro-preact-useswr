import useSWR from "swr";

const featchData = async (url: string) => {
  const res = await fetch(url);
  const data = res.json();
  return data;
};

export const DataDisplay = (props: any) => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    featchData
  );

  if (error) return <div className="data-display">An error has occurred.</div>;

  if (isLoading) return <div className="data-display">Loading...</div>;

  return (
    <div className="data-display">
      <ul className="data-display__list">
        {data.map((user: any) => (
          <li className="data-display__item" key={user.id}>
            {props.nameChecked ? <span>{user.name}</span> : null}
            {props.usernameChecked ? <span>{user.username}</span> : null}
            {props.emailChecked ? <span>{user.email}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
