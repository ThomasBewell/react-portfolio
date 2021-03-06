import moodTracker from '../../assets/moodtracker-screenshot.png'
import bookTracker from '../../assets/booktracker-screenshot.jpeg'
import techBlog from '../../assets/techblog-screenshot.png'
import budgetTracker from '../../assets/budgettracker-screenshot.png'
import weatherDashboard from '../../assets/weatherdashboard-screenshot.png'
import passwordGenerator from '../../assets/passwordgenerator-screenshot.png'
import bookends from '../../assets/bookends-screenshot.png'

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>

            <div className="container">
                <div className="px-5 my-2 flex-row">
                    <h2>Book-Ends</h2>
                    <a href="https://gentle-retreat-13978.herokuapp.com/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/jeffywk/book-ends" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={bookends} alt='book-ends screenshot'></img>
                    </a>
                </div>
            
                <div className="px-5 my-2 flex-row">
                    <h2>Mood Tracker</h2>
                    <a href="https://zimmermanc6588.github.io/mood-tracker/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/zimmermanc6588/mood-tracker" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={moodTracker} alt='mood tracker screenshot'></img>
                    </a>
                </div>

                <div className="px-5 my-2 flex-row">
                    <h2>Book Tracker</h2>
                    <a href="https://dry-wildwood-65158.herokuapp.com/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/watkincw/book-tracker" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={bookTracker} alt='book tracker screenshot'></img>
                    </a>
                </div>

                <div className="px-5 my-2 flex-row">
                    <h2>Tech Blog</h2>
                    <a href="https://thawing-coast-55970.herokuapp.com/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/ThomasBewell/tech-blog" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={techBlog} alt='tech blog screenshot'></img>
                    </a>
                </div>

                <div className="px-5 my-2 flex-row">
                    <h2>Budget Tracker</h2>
                    <a href="https://morning-bayou-76168.herokuapp.com/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/ThomasBewell/budget-tracker" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={budgetTracker} alt='budget tracker screenshot'></img>
                    </a>
                </div>

                <div className="px-5 my-2 flex-row">
                    <h2>Weather Dashboard</h2>
                    <a href="https://thomasbewell.github.io/weather-dashboard-6/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/ThomasBewell/weather-dashboard-6" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={weatherDashboard} alt='weather dashboard screenshot'></img>
                    </a>
                </div>

                <div className="px-5 my-2 flex-row">
                    <h2>Password Generator</h2>
                    <a href="https://thomasbewell.github.io/password-generator/" target="_blank" rel='noreferrer'>
                        <h3>
                            <a href="https://github.com/ThomasBewell/password-generator" target='_blank' rel='noreferrer'>
                                GitHub Repository
                            </a>
                        </h3>
                        <img src={passwordGenerator} alt='password generator screenshot'></img>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;