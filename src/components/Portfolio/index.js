import React from 'react';
import BudgetTracker from '../../assets/images/portfolio.png';
import FoodieLove from '../../assets/images/City Finder.png';
import ShopShop from '../../assets/images/scheduler.png';


function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={BudgetTracker}
                        alt="budgetTracker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Portfolio</p>
                        <a href="https://github.com/Haillander/Portfolio" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://haillander.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={FoodieLove}
                        alt="foodieLove"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Note Taker</p>
                        <a href="https://github.com/NikTern/Project-1-CityFinder" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://niktern.github.io/Project-1-CityFinder/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={ShopShop}
                        alt="shopShop"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Work Day Scheduler</p>
                        <a href="https://github.com/Haillander/Work-day-schedule" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://haillander.github.io/Work-day-schedule/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Portfolio;