import "./profileList.scss";

export default function ProfileList({ id, title, active, setSelected }) {
  return (
    <li className={active ? "profileList active" : "profileList"} onClick={() => setSelected(id)}>
        {title}
    </li>
  );
}
