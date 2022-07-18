import React from "react";
import BasicInfo from "./medium";

const BasicInfoList = () => {
    const persons = [

        {name: "Madison",
        state: "NC", 
        email: "Fakeemail@gmail.com",
        birthdate: "07/31/XXXX",
        cell_number: "123-456-7890"
        },

        {name: "Victor",
        state: "NC", 
        email: "Fakeemail@gmail.com",
        birthdate: "05/02/XXXX",
        cell_number: "123-456-7890"},

        {name: "Eddison",
        state: "NC", 
        email: "Fakeemail@gmail.com",
        birthdate: "04/29/XXXX",
        cell_number: "123-456-7890"},

        {name: "Ricky",
        state: "NC", 
        email: "Fakeemail@gmail.com",
        birthdate: "08/20/XXXX",
        cell_number: "123-456-7890"},

        {name: "Ella",
        state: "NC", 
        email: "Fakeemail@gmail.com",
        birthdate: "06/25/1998",
        cell_number: "123-456-7890"},

        {name: "Summer",
        state: "NC", 
        email: "Fakeemail@gmail.com",
        birthdate: "01/09/XXXX",
        cell_number: "123-456-7890"}
    ]; 

    return (
        <div className="listOfPersons">
            {persons.map((info) => (
                <BasicInfo name={info.name} state={info.state} email={info.email}  birthdate={info.birthdate} cell_number={info.cell_number}/>
            ))}
           
        </div>
    );

};
export default BasicInfoList;
/*HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info) */