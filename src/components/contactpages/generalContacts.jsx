import Contact from "./contact.jsx";
function GeneralContacts(props) {
  console.log(props);
  return (
    <div>
      <div className="text-center">General Contacts</div>
      <div>
        {props.contactsgen.map((contact, index) => (
          <Contact
            deleteClick={props.deleteClick}
            favoriteClick={props.favoriteClick}
            updateClick={props.updateClick}
            contact={contact}
            key={index}
          ></Contact> //here you are basically destructuring the array so that contact go under contact  and key holds the underfined data
          //example props.contacts.map(({ name, phone }) => (
          //<Contact name={name} phone={phone} />
          //))
        ))}
      </div>
    </div>
  );
}

export default GeneralContacts;
