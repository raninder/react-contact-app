
import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  // const contacts = [
  //   {
  //     id:1, 
  //     name:'John',
  //     email: 'john@gmail.com'
  //   },
  //   {
  //     id:2, 
  //     name:'Bob',
  //     email: 'bob@gmail.com'
  //   }
  // ]

  const [contacts, setContacts] = useState([]);
  return (
    <div className="ui container">
    <Header />
     <AddContact />
    <ContactList contacts= {contacts}/> 
    </div>
  );
}

export default App;
