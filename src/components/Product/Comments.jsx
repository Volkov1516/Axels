import { CommentContainer, UserInfo } from "../../styled/Product/Comments.js"

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
