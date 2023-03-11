import "./style.css"

const Section = ({ title, body, extraBody }) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__head">{title}</h2>
            {extraBody}
        </div>
        {body}
    </section>
)

export default Section;