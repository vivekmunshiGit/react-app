//PascalCasing
function Message() {
  //JSX :JavaScript XML
  const developername = "Mino Nagasaki";
  if (developername) return <h1>Hello {developername}</h1>;
  else return <h2>Hello Newbie</h2>;
}

//to use it we have to export it.
export default Message;
