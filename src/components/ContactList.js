
import React from 'react';
import ContactCard from './ContactCard';
const ContactList = (props) => {
	console.log("props", props);
	const renderList = props.contacts.map((contact)=> {
	return(
		<ContactCard contact={contact} />
	// 	<div className="item">
	// 		<div className="content">
	// 			<div className="header">{contact.name}</div>
	// 			<div> {contact.email}</div>
	// 		</div>
	// 		<i className="trash alternate outline icon"></i>
	// 	</div>
		);
	});
	return(
		<div className="ui celled list">
			{renderList}

		</div>
	)
}

export default ContactList;