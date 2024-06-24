import './index.css'
import {formatDistanceToNow} from 'date-fns'

const Comment = props => {
  const {commentDetails, toggleIsLike, deleteComment} = props
  const {name, comment, date, isLiked, id, initialClass} = commentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'liked' : 'unliked'

  const onClickLike = () => {
    toggleIsLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comments">
      <div className="row1">
        <p className={`logo ${initialClass}`}>{name[0].toUpperCase()}</p>
        <p className="name">{name}</p>
        <p className="date">{formatDistanceToNow(new Date(date))} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="row2">
        <button type="button" className={likeText} onClick={onClickLike}>
          <img src={likeImgUrl} className="like" alt="like" />
          Like
        </button>

        <button
          type="button"
          className="delete"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default Comment
