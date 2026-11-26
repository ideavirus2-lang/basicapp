import{Link} from "react-router-dom"

export default function RouteHome() {
  return (
    <div className="w-full flex flex-cal justify-center items-center">
      <h1 className="text-2xl font-bold">RouteHome</h1>
      <div className="w-1/2 grid grid-cols-2 m-10">
           <div className="w-full flex flex-col m-2 p-2 text-xl justify-start items-center">
                <h2>
                    Page1 값 전달
                </h2>
                <ul>
                    <li><Link to='/p1/사과'>사과</Link></li>
                    <li><Link to='/p1/바나나'>바나나</Link></li>
                    <li><Link to='/p1/당근'>당근</Link></li>
                </ul>
           </div>
      </div>
    </div>
  )
}
