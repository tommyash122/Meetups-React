import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage(props) {
    const history = useHistory();
    async function addMeetupHandler(meetupData) {
        await fetch(`${process.env.REACT_APP_URL}`, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        history.replace('/');
    }

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm addMeetupData={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupsPage;
