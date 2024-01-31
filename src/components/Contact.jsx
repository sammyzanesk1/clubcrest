export default function Contact(props) {
  return (
    <div className="contacts">
      <div className="club">
        <img src={props.img} className="crest" />
        <div className="clubbox">
          <span className="position">{props.rank}</span>
          <span className="alias">{props.name}</span>
        </div>
      </div>
    </div>
  );
}
