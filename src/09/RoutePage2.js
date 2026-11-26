import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
  const loc = useLocation();
  console.log("useLocation pathname : ", loc.pathname);
  console.log("useLocation search : ", loc.search);

  const [searchParams] = useSearchParams();
  console.log("useLocation searchParams : ", searchParams);

  const fruits = ["사과", "바나나", "수박"];
  const qlist = [...searchParams];
  const lis = qlist.map((item) => (
    <li key={item[0]}>
      {item[1]} : {fruits.includes(item[1]) ? "과일" : "과일아님"}
    </li>
  ));

  console.log("11_26 qlist", qlist);
  console.log(searchParams.get("item1"));

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">
        RoutePage2
      </h1>
      <div className="w-full flex flex-col m-2 p-2 text-xl justify-start items-center">
        <ul>
          {lis}
        </ul>
      </div>
    </div>
  );
}