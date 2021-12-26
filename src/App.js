import { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section';
import Notification from './components/Notification/Notification';

const options = ['good', 'neutral', 'bad'];

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    addFeedback = option => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));
    };
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
    };

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.addFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {total ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
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
}
