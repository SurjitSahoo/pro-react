function FeedbackPopup() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  if (!isPopupOpen) {
    return <button onClick={() => setIsPopupOpen(true)}>Give Feedback</button>;
  }

  return (
    <div>
      <h2>Feedback</h2>
      <textarea placeholder='Your feedback here...'></textarea>
      <button onClick={() => setIsPopupOpen(false)}>Close</button>
    </div>
  );
}
