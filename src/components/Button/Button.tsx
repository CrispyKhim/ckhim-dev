// Button Component

// We can create a new object type with string data type
type ButtonProps = {
    text: string;
}

export default function MyButton(props: ButtonProps) {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>I'm a button, {props.text}</button>
    );
}