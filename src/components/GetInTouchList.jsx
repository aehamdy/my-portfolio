import getInTouchList from "../data/getInTouchList";
import DetailPanel from "./DetailPanel";

function GetInTouchList() {
  return (
    <ul className="flex flex-col gap-2">
      {getInTouchList.map((item, i) => {
        const key = Object.keys(item)[0];
        const value = item[key];

        return <DetailPanel key={i} heading={key} content={value} />;
      })}
    </ul>
  );
}

export default GetInTouchList;
