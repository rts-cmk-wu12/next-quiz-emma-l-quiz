import QuestionSection from "../components/QuestionSection";

export default async function QuestionPage({ searchParams }) {

    const settings = await searchParams;
    //const url = `https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`;
    const url = `https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.category}&difficulty=${settings.difficulty}&type=multiple`;
    
    const response = await fetch(url);
    const data  = await response.json();

    return (
        <main>
            <QuestionSection data={data?.results} />
        </main>
    )
}