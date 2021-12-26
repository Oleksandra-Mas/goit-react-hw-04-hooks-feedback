import { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section';
import Notification from './components/Notification/Notification';

const options = ['good', 'neutral', 'bad'];

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const addFeedback = option => {
        switch (option) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            default:
                throw new Error(`Unsupported option ${option}`);
        }
    };
    const countTotalFeedback = () => {
        return good + neutral + bad;
    };
    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
        <div className="App">
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={addFeedback}
                />
            </Section>
            <Section title="Statistics">
                {total ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </div>
    );
}
