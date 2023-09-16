import { TypeAnimation } from 'react-type-animation';
 
const TypingComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Developer', // Types 'One'
        1000, // Waits 1s
        'Book Lover', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Traveller',
        2000, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default TypingComponent


