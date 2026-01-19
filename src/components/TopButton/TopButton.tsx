// Button Component

// We can create a new object type with string data type
// type ButtonProps = {
//     text: string;
// }

export default function TopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={scrollToTop}>Back to top</button>
    );
}