import { useState } from "react";
import FavoriteContacts from "../contactpages/favoriteContacts.jsx";
import GeneralContacts from "./generalContacts.jsx";
import AddContact from "./addContact.jsx";
import AddRandomContact from "./addRandomContact.jsx";
function ContactIndex(props) {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Ben Parker",
      phone: "666-666-770",
      email: "ben@dotnetmastery.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Kathy Patrick",
      phone: "111-222-0000",
      email: "kathy@dotnetmastery.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Paul Show",
      phone: "999-222-1111",
      email: "paul@dotnetmastery.com",
      isFavorite: true,
    },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  //we can pass down the useState function to the child component so that we can update the state from the child component. This is because the state is defined in the parent component (contactIndex) and we want to update it from the child component (contact).

  function handleEditClick(contact) {
    // if the edit button is clicked, this function will be called and the contact to be edited will be passed as an argument.
    setSelectedContact(contact);
    setIsUpdating(true); //You can then pass this state down to the AddContact component to prefill the form fields
  }
  function resetUpdate() {
    setIsUpdating(false);
    setSelectedContact(null);
  }
  function handleUpdateContact(contact) {
    setContactList((prevState) => {
      return prevState.map((obj) => {
        //we are mapping through the contact list to find the contact that matches the updated contact id and then we are updating that contact with the new data
        if (obj.id === contact.id) {
          return { ...obj, ...contact }; //we are using the spread operator to update the contact with the new data
        }
        return obj; //if the contact id does not match, we are returning the original contact data
      });
    });
    setIsUpdating(false); //after updating the contact, we are resetting the isUpdating state to false and selectedContact to null
    setSelectedContact(null);
    return {
      status: "success",
      message: "Contact was updated successfully",
    };
  }

  function handleAddContact(newContact) {
    ///validation check
    const duplictateRecord = contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });
    if (duplictateRecord.length > 0) {
      return { status: "Error", message: "Duplicate record." };
    }
    const newFinalContact = {
      ...newContact, //because the array we will recieve here does not come with an id and is favorate so we have to create these keys and values as default
      id:
        contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1, //this will ensure that the new contact id is always one more than the last contact id
      isFavorite: false,
    };

    setContactList((prevState) => {
      return prevState.concat([newFinalContact]);
    });
    return {
      status: "success",
      message: "Contact was added successfully",
    };
  }
  function handleAddRandomContact(newContact) {
  

    const newFinalContact = {
      ...newContact, //because the array we will recieve here does not come with an id and is favorate so we have to create these keys and values as default
      id:
        contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1, //this will ensure that the new contact id is always one more than the last contact id
      isFavorite: false,
    };

    setContactList((prevState) => {
      return prevState.concat([newFinalContact]);
    });
    return {
      status: "success",
      message: "Contact was added successfully",
    };
  }
  function handleDelete(contactId) {
    setContactList((prevState) => {
      return prevState.filter((obj) => obj.id !== contactId);
    });
    console.log(contactId);
  }
  function handleToggleFavorite(contact) {
    console.log(contact);
    setContactList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === contact.id) {
          return {
            ...obj,
            isFavorite: !obj.isFavorite, //this means set the objs, isFavorite to be the opposite o
          };
        }
        return obj;
      });
    });
  }
  function handleRemoveAllContacts() {
    setContactList([]);
  }
  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">
            <AddRandomContact handleAddRandomContact={handleAddRandomContact}/>
              
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger btn-sm "
              onClick={() => handleRemoveAllContacts()}
            >
              Remove All
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact
              handleAddContact={handleAddContact}
              isUpdating={isUpdating}
              resetUpdate={resetUpdate}
              selectedContact={selectedContact}
              handleUpdateContact={handleUpdateContact}
            />{" "}
            {/*we are now sending the isUpdating state to the AddContact component, see addContact line 54*/}
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <FavoriteContacts
              deleteClick={handleDelete}
              favoriteClick={handleToggleFavorite}
              updateClick={handleEditClick}
              contacts={contactList.filter((u) => u.isFavorite == true)}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContacts
              deleteClick={handleDelete}
              favoriteClick={handleToggleFavorite}
              updateClick={handleEditClick}
              contactsgen={contactList.filter((u) => u.isFavorite == false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
//in react you can pass on data and functions as props (see above handleToggleFavorite function that is passed two levels down)
export default ContactIndex;
