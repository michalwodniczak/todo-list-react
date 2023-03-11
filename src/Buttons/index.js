import "./style.css"
const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.lenght === 0) {
        return null
    }

    return (
        <div className="button__container">
            <button
                className="button__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="button__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}
export default Buttons;