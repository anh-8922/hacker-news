import useFetch from './useFetch';
import '../css/UserProfile.css'
import '../css/responsive.css'
import Heading from './heading';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';

export default function UserProfile() {
  const { username } = useParams();
  const [user, isLoading] = useFetch(`http://hn.algolia.com/api/v1/users/${username}`);

  return (
   
      
       

    <div className='user-profile'>
      {isLoading ? (
        <div className='spinner'></div>
      ) : (
        <>
        <div className='main'>
      <div>
        <Heading />
        </div>
        </div>
          <h1>ID Nos: {user.id}</h1>
          <div className='user-stats'>
            <p>
              Joined: <span>{format(new Date(user.created_at), 'dd/MM/yyyy')}</span>
            </p>
            <p>
              Amount of posts:  <span>{user.karma}</span>
            </p>
          </div>
          <div className='user-activity'>
            <p>Activity by: {user.id}</p>
            {user?.submissions?.length > 0 ? (
              user?.submissions.map((submission) => (
                <div className='activity-item' key={submission.objectID}>
                  <div className='activity-details'>
                    <p>{submission.title}</p>
                    <p>
                      <span>On </span>
                      {format(new Date(submission.created_at), 'dd/MM/yyyy')}
            ``        </p>
                  </div>
                  <div className='activity-link'>
                    <Link to={`/news/${submission.objectID}`}>View</Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No activity yet</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
