import React from 'react';
import avatar from '../images/avatar.png'

const ContactCard = (props) =>{
	const {id,name,email} = props.contact;
		return(
			<div className="item">
				<img className='ui avatar image' src={avatar} alt="avatar"/>
				<div className="content">
					<div className="header">{name}</div>
					<div> {email}</div>
				</div>
				<i className="trash alternate outline icon" style={{color:"red",marginTop:"20px"}}></i>
			</div>
		);	
}

export default ContactCard;