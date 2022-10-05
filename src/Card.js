import pdd from "./img/pdd.svg";
function Card(props) {
  return (
    <div className="mrt p-8">
        <div className="bg-slate-100 rounded-lg  p-8 shadow-lg dark:bg-slate-800 md:w-1/3">
      <h5 className="text-center pb-5 text-teal-300">Quote #{props.quote.id}</h5>
      <h1 className="text-white text-center">"{props.quote.Quote}"</h1>

      <div className="p-2 ">
        <img className="" src={pdd} alt="" />
      </div>
      <p className="p-2 text-center text-teal-400">
        {props.quote.Character} - {props.quote.Anime} loln
      </p>
      <div className="p-2 ml-9">
        <button
          onClick={props.newQuote}
          className="rounded-md p-2.5 outline text-white text-sm"
        >
          Get Another Quote
        </button>
      </div>
    </div>
    </div>
  );
}

export default Card;
