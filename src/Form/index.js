import "./style.css";
const Form = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input className="form__input" autofocus name="task" required
                placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
}



export default Form