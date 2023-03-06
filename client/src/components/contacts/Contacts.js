import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layouts/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslinit-disable-next-line
  }, []);

  const nodeRef = React.useRef(null);
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  nodeRef={nodeRef}
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <div ref={nodeRef}>
                    <ContactItem contact={contact} />
                  </div>
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  nodeRef={nodeRef}
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <div ref={nodeRef}>
                    <ContactItem key={contact.id} contact={contact} />
                  </div>
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
