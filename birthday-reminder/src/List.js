import React from "react";

const List = ({people}) => {
    return (
        <>

        {people.map((person) => {
            
            const {id, name, age} = person;
            return<article key={id} className="person">
                <div>
                    <h4>{name}</h4>
                    <p>{age} Anos</p>
                </div>

            </article>
        })}
        
        </>
    )
};

export default List;

