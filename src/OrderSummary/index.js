import hero from './illustration-hero.svg';

export default function OrderSummary() {
  return <>
    <div>
    <img src={hero} alt="hero" width="450" height="220" />
Order Summary

  You can now listen to millions of songs, audiobooks, and podcasts on any
  device anywhere you like!

  Annual Plan
  $59.99/year

  Change

  Proceed to Payment
  Cancel Order

  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
    Coded by <a href="https://google.com">Your Name Here</a>.
  </div>
    </div>
  </>;
}