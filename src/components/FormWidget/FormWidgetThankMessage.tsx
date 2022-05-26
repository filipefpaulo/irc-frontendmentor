import IllustrationThankYou from '../../images/illustration-thank-you.svg';

interface FormWidgetThankMessageProps {
  rate: number;
}

export default function FormWidgetThankMessage({
  rate,
}: FormWidgetThankMessageProps) {
  return (
    <div className="content thankYou">
      <img src={IllustrationThankYou} alt="" />
      <p className="selectedRate">You selected {rate} out of 5</p>
      <h1>Thank you!</h1>
      <p className="thankYouMessage">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
