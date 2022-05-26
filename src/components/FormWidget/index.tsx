import '../../styles/FormWidget.sass';
import { useState } from 'react';

import FormWidgetRating from './FormWidgetRating';
import FormWidgetThankMessage from './FormWidgetThankMessage';

export default function FormWidget() {
  const [rate, setRate] = useState(0);
  const [formControl, setFormControl] = useState(0);

  if (formControl === 0) {
    return (
      <FormWidgetRating
        setRate={setRate}
        rate={rate}
        setFormControl={setFormControl}
      />
    );
  }
  if (formControl === 1) return <FormWidgetThankMessage rate={rate} />;
  return <div />;
}
