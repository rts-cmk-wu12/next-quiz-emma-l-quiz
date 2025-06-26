'use client';
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import Form from "next/form";
import { useState } from "react";
import Link from "next/link";
import './QuestionSection.scss';

export default function QuestionSection({ data }) {

    const [questionCount, setQuestionCount] = useState(0);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [points, setPoints] = useState(0);
    const questionsAmount = data?.length;
    //console.log(data);

    function addOne(string) {
        const stringToNumber = Number(string);
        const addedOne = stringToNumber + 1;
        return addedOne;
    }

    data?.forEach(question => {

        const answers = question.incorrect_answers.concat(question.correct_answer);
        let currentIndex = answers?.length;
        
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]];

        question.answers = answers;
    });

    function clickHandler(event) {
        if (questionCount + 1 === questionsAmount || questionCount > questionsAmount) {
            setAllQuestionsAnswered(true);
        } else {
            setQuestionCount(questionCount + 1);
            if (event.target.value === data[questionCount].correct_answer) {
                setRightAnswers(rightAnswers + 1);
                setPoints(points + 50);
            }
        }
    }
    //console.log(rightAnswers)

    return (
        <>
            <header className="flex justify-between p-4 mx-4 border-b-4 border-dark font-bold">
                <p className="flex gap-2 items-center">
                    <CiCircleQuestion size='25' />{addOne(questionCount)}/{questionsAmount}
                </p>
                <p>
                    {points} points
                </p>
{/*                 <p className="flex gap-2 items-center">
                    05:47 <IoMdTime size='25' />
                </p> */}
            </header>
            <section className="w-4/5 mx-auto flex flex-col gap-10 py-8">
                {allQuestionsAnswered ?
                <>
                    <h2>Stats</h2>
                    <p className="font-bold">Answered: {questionsAmount}</p>
                    <p className="font-bold">Right answers: {rightAnswers}</p>
                    <p className="font-bold">Wrong answers: {questionsAmount - rightAnswers}</p>
                    <Link href='/' className="w-fit font-bold bg-yellow text-yellow-dark p-8 py-1 rounded-md border-4 border-b-8 border-r-8 border-yellow-dark">Start new quiz</Link>
                </>
                :
                <>
                    <h2 className="p-">{data[questionCount]?.question}</h2>
                    <Form className="flex flex-col gap-4">
                        {data[questionCount]?.answers.map(answer => {
                            return (
                                <button className="answer-button bg-yellow p-4 py-1 rounded-md" onClick={clickHandler} key={answer} type='submit' value={answer}>{answer}</button>
                            )
                        })}
                    </Form>
                </>}
            </section>
        </>



    )
}