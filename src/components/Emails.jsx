// import React from "react";

import Email from './Email'



function Emails({filteredEmails, toggleRead, toggleStar, handleItemClick}) {
    return (
        <>
            <ul>
            {filteredEmails.map((mail, index) => (
                <Email key={index} email={mail} toggleRead={toggleRead} toggleStar={toggleStar} onClick={() => handleItemClick(mail)}/>
            ))}
            </ul>
        </>
        
    )
    
}

export default Emails;