import headShot from '../../assets/headshot.jpeg'

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <div className="flex-row">
                <p>
                    Hi! I'm Thomas, a coding boot camp student. I'm excited to begin this new chapter of my career!
                </p>
                <img src={headShot} className="my-2 headshot" alt="headshot" />
            </div>
        </section>
    );
}

export default About;