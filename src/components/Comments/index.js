import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  toggleLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredCommentList = commentList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({
      commentList: filteredCommentList,
    })
  }

  render() {
    const {name, comment, commentList} = this.state
    const count = commentList.length

    return (
      <div className="app-container">
        <div className="comment-writing-container">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                value={name}
                onChange={this.onChangeName}
                placeholder="Your Name"
              />
              <textarea
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <p>{count} Comments</p>
        <ul>
          {commentList.map(eachcomment => (
            <CommentItem
              key={eachcomment.id}
              commentDetails={eachcomment}
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
