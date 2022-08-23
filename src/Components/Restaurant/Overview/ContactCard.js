import React from "react";
import Contact from "./Contact.Overview";

const ContactCard = () => {

    const ContactData = [
        {
            mobile: "+918042754444",
            address: "64, 80 Feet Road, Anna Nagar, Sathamangalam, Madurai",
            outlets: 2
        }
    ];

    return (
        <>
        <div>
            {
                ContactData.map((data) => (
                    <Contact {...data} />
                ))
            }
        </div>
        </>
    )
};

export default ContactCard;