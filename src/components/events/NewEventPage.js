import React from 'react';
import EventForm from './EventForm';

class NewEventPage extends React.Component {
    render() {
        return (
            <div> {/*required only 1 child as DIV*/}
               <EventForm />
            </div>
        );
    }
}

export default NewEventPage;
