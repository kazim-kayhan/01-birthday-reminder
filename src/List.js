import React from 'react';

const List = ( { people } ) =>
{
  return (
    <>
      {
        people.map( person =>
        {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="flex p-2">
              <img src={image} alt={name} className="h-16 w-16 rounded-full" />
              <div className="flex flex-col px-4 justify-between">
                <h4 className="font-bold">{name}</h4>
                <p className="text-stone-700 font-semibold">{age} years</p>
              </div>
            </article>
          );
        } )
      }
    </>
  );
};

export default List;
