export default function StarRate({ rate, size = "text-xl" }) {
  const yellowStar = new Array(rate).fill("");
  const greyStar = new Array(5 - rate).fill("");

  const stars = `${size} flex md:ml-5`;

  return (
    <div className={stars}>
      {yellowStar.map((_, i) => (
        <p key={i} className="text-yellow-400">
          ★
        </p>
      ))}
      {greyStar.map((_, i) => (
        <p key={i} className="text-slate-400">
          ★
        </p>
      ))}
    </div>
  );
}
