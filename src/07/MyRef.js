import TailButton from "../Ui/TailButton";
import { useState, useRef, useEffect} from "react";

export default function MyRef() {
  const [sVal, setSVal] = useState(0);
  let cVal = 0;
  const rVal = useRef(0);//current로 접근


  const handleC = () => { 
    console.log('handleC 컴포넌트 변수 cVal : ',cVal);
    cVal = cVal+1
  };

  const handleS = () => {
    setSVal(sVal + 1);

  };

  const handleR = () => {
     rVal.current = rVal.current + 1;
     console.log('ref변수:',rVal.current);
  };

  useEffect(()=>{
    console.log('sVal 스테이트 변수 : ',sVal);
  },[sVal]);

  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="w-full grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-blue-700 font-bold text-xl">
            컴포넌트 변수 : {cVal}
          </div>
          <TailButton
            caption="컴포넌트 변수"
            bcolor="blue"
            handleClick={handleC}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-orange-600 font-bold text-xl">
            State 변수 : {sVal}
          </div>
          <TailButton
            caption="State 변수"
            bcolor="orange"
            handleClick={handleS}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-lime-600 font-bold text-xl">
            Ref 변수 : {rVal.current}
          </div>
          <TailButton
            caption="Ref 변수"
            bcolor="lime"
            handleClick={handleR}
          />
        </div>
      </div>
    </div>
  );
}