import "./style.css"
const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.lenght === 0) {
        return null
    }

    return (
        <div className="section__hidden">
            <button
                className="section__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}
export default Buttons;