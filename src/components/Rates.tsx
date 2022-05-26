import '../styles/Rates.sass';

interface RateProps {
  setRate: (rate: number) => void;
  rate: number;
}

const rates = [1, 2, 3, 4, 5];

export default function Rate({ setRate, rate }: RateProps) {
  return (
    <div className="rates">
      {rates.map((r) => (
        <button
          disabled={+r === +rate}
          className={+r === +rate ? 'disabled' : ''}
          key={r}
          onClick={() => setRate(r)}
          type="button"
          value={r}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
