import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => { return (
    <div className="ui container comments">
        <CommentDetail
            author  = { faker.name }
            timeAgo = "Today at 4:45PM"
            content = "How artistic!"
            avatar  = { faker.image.avatar }
        />
        <CommentDetail
            author  = { faker.name }
            timeAgo = "Yesterday at 12:30AM"
            content = "This has been very useful for my research. Thanks as well!"
            avatar  = { faker.image.avatar }
        />
        <CommentDetail
            author  = { faker.name }
            timeAgo = "5 days ago"
            content = "Dude, this is awesome. Thanks so much"
            avatar  = { faker.image.avatar }
        />
    </div>
); };

ReactDOM.render( <App />, document.querySelector( '#root' ) );