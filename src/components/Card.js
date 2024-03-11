// const todoTitle = "call family";
// const tododec = "lorem for the test purpose in thsi situation for the test for the";

const date = new Date();
const currentyear = date.getFullYear();
const monthName = date.getMonth();
const day = date.getDate();

function Card(props){
  const {titleText, descText} = props;
    return <div className='card'>
    <h3 className='cardTitle' >{titleText}</h3>
    <p className='cardDec'>{descText}</p>
    <p className='cardFooter'>{day +"/"+ monthName +"/"+ currentyear}</p>
  </div>
}
export default Card;

