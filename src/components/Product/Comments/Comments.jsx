import { CommentContainer, UserInfo } from './styledComments.js'

const Comments = ({ review }) => {
  return (
    <CommentContainer>
      <UserInfo>
        <p> <b> {review.userName} </b> </p>
        <p> <b >Rate: </b> {review.rate}/5 </p>
      </UserInfo>
      <div>
        <p>{review.text}</p>
      </div>
    </CommentContainer>
  );
};

export default Comments;
