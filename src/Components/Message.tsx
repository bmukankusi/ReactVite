import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const Sweets = ['Cupcake', 'Donut', 'Finger', 'Adma', 'Gingerbread', 'Honeycomb', 'Ice Cream Sandwich', 'Jelly Bean', 'KitKat', 'Lollipop', 'Marshmallow', 'Nougat', 'Oreo', 'Pie'];
  return (
    <Fragment>
      <div>
        <h1>List group of sweets</h1>
         <ul>
         {Sweets.map((sweet, index) => (<li className="border-y-sky-600 border border-y-red-400 py-3 hover:bg-blue-200" key={sweet} onClick={() => console.log(index, sweet)}>{sweet}</li>))}
         </ul>
      </div>
    </Fragment>
  )
}

export default ListGroup;