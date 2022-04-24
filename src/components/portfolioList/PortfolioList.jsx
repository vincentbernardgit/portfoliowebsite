import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <button className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
        {title}
    </button>
  );
}
