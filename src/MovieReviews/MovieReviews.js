import { useEffect, useState } from 'react';
import { fetchReviews } from 'Api/apiService';

export default function MovieReviews({ id }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReviews(id).then(res => setReview(res.results));
  }, [id]);

  return (
    <ul>
      {review !== [] ? (
        review.map(data => (
          <li key={data.id}>
            <h3>{data.author}</h3>
            <p>{data.content}</p>
          </li>
        ))
      ) : (
        <p>You can leave your review first</p>
      )}
    </ul>
  );
}
