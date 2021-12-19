import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main className="flex justify-center p-8 bg-cyan-200 min-h-screen">
      <section className="flex flex-col bg-pink-400 px-auto rounded-xl p-8">
        <h3 className="text-4xl font-bold p-4">
          {people.length} Birthday Today
        </h3>
        <List people={people} />
        <button
          onClick={() => setPeople([])}
          className="bg-green-400 hover:bg-green-500 p-2 mt-4 rounded-full text-xl font-bold"
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
