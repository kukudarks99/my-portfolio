export default function CareerItem(props) {
  return (
    <div>
      <div className="w-[550px] pt-10">
        <p className="font-bold text-2xl py-2">{props.title}</p>
        <p className="font-light text-xs">{props.period}</p>
        <p className="font-semibold text-base py-2">- {props.content}</p>
      </div>
    </div>
  );
}
