// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    commentDetails,
    toggleLike,
    deleteComment,
    initialContainerBackgroundClassNames,
  } = props
  const {name, comment, id, isLike} = commentDetails
  const random =
    initialContainerBackgroundClassNames[
      Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
    ]
  console.log(random)
  const dateUpdate = formatDistanceToNow(new Date())

  const onClickLike = () => {
    toggleLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <p>{name[0]}</p>
      <h1>{name}</h1>
      <p>{dateUpdate}</p>
      <p>{comment}</p>
      <button type="button" onClick={onClickLike}>
        <img src={likeImgUrl} alt="like" />
      </button>
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default CommentItem
