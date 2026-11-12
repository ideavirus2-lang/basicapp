import MyListData from './MyListData.json'

export default function MyList() {
  console.log(MyListData);
  return (
    <div className='w-full grid grid-cols-2 gap-4'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  )
}
