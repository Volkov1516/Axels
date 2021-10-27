import styled from "styled-components";

const Comments = ({ review }) => {
  const CommentContainer = styled.div`
    padding: 2px 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    display: flex;
  `;

  const UserInfo = styled.div`
    width: 300px;
  `;

  return (
    <CommentContainer>
      <UserInfo>
        <p>
          <b>{review.userName}</b>
        </p>
        <p>
          <b>Rate: </b> {review.rate}/5
        </p>
      </UserInfo>
      <div>
        <p>{review.text}</p>
      </div>
    </CommentContainer>
  );
};

export default Comments;
