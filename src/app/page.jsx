import Form from 'next/form';

export default function HomePage() {

  return (
    <main className="flex items-center">
      <Form action='/quiz' className="flex flex-col w-4/5 gap-8 mx-auto">
        <label className="flex justify-between items-center font-bold">
          Category
          <select name='category' className="bg-light border-dark border-2 p-2 py-1 rounded-2 w-3/5 font-medium">
            <option value='9'>General Knowledge</option>
            <option value='23'>History</option>
            <option value='17'>Science & Nature</option>
          </select>
        </label>
        <label className="flex justify-between items-center font-bold">
          Amount
          <select name='amount' className="bg-light border-dark border-2 p-2 py-1 rounded-2 w-3/5 font-medium">
            <option value='5'>5 questions</option>
            <option value='10'>10 questions</option>
            <option value='25'>25 questions</option>
          </select>
        </label>
        <label className="flex justify-between items-center font-bold">
          Difficulty
          <select name='difficulty' className="bg-light border-dark border-2 p-2 py-1 rounded-2 w-3/5 font-medium">
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </label>
{/*         <label className="flex justify-between items-center font-bold">
          Type
          <select name='type' className="bg-light border-dark border-2 p-2 py-1 rounded-2 w-3/5 font-medium">
            <option value='multiple'>Multiple Choice</option>
            <option value='boolean'>True/false</option>
          </select>
        </label> */}
        <button type='submit' className="font-bold text-yellow-dark self-end bg-yellow p-8 py-1 rounded-md border-4 border-b-8 border-r-8 border-yellow-dark w-min">Start!</button>
      </Form>
    </main>
  );
}
