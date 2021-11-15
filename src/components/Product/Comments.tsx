import { CommentContainer, UserInfo } from '../../styled/Product/Comments';

interface IProps {
    review: {
        id: number,
        productId: number,
        userId: number,
        userName: string,
        text: string,
        rate: string
    }
}

const Comments = ({ review }: IProps) => (
  <CommentContainer>
    <UserInfo>
      <p> <b> {review.userName} </b> </p>
      <p> <b >Rate: </b> {review.rate}/5 </p>
    </UserInfo>
    <div>
      <p>{review.text}</p>
    </div>
  </CommentContainer>
)

export default Comments;
