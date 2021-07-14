import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];
    const handlePrevBtn = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }
    const checkNumber = (number) => {
        if(number > people.length - 1) {
            return 0;
        }
        if(number < 0) {
            return people.length - 1;
        }
        return number;
    }
    const handleNextBtn = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }
    const handleRandomBtn = () => {
        setIndex((index) => {
            let newIndex = Math.floor(Math.random() * people.length);
            if(newIndex === index) {
                newIndex += 1;
            }
            return checkNumber(newIndex);
        });
    }
    return (
        <React.Fragment>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={handlePrevBtn}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={handleNextBtn}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="random-btn" onClick={handleRandomBtn}>
                    Surprise Me
                </button>
            </article>
        </React.Fragment>
    );
};

export default Review;
