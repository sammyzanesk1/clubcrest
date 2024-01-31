import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <div className="contact--instance">
        <div className="a">
          <Contact img="../assets/city.png" rank="1st" name="CITYZENS" />
          <Contact img="../assets/madrid.png" rank="2nd" name="ROYAL WHITES" />
        </div>
        <div className="b">
          <Contact img="../assets/united.png" rank="8th" name="RED DEVILS" />
          <Contact
            img="../assets/borcellefc.png"
            rank="1000th"
            name="BORCELLE"
          />
        </div>
      </div>
    </>
  );
}
