import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Comment from '../CommentItem'

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
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  toggleIsLike = id => {
    this.setState(prev => ({
      commentList: prev.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      initialClass: initialBackgroundColorClassName,
    }
    this.setState(prev => ({
      commentList: [...prev.commentList, newComment],
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
    const finalCommentList = commentList.filter(each => each.id !== id)
    this.setState({
      commentList: finalCommentList,
    })
  }

  render() {
    const {name, comment, commentList} = this.state
    const total = commentList.length
    return (
      <div className="bg-container">
        <div className="container1">
          <div>
            <h1 className="heading">Comments</h1>
            <form className="comment-List" onSubmit={this.onAddComment}>
              <p className="text">Say something about 4.0 Technologies</p>
              <input
                type="text"
                className="inputbar"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                type="text"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="btn-add">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr />
        <div className="container2">
          <p>
            <span className="total">{total}</span>Comments
          </p>
          <ul className="comments">
            {commentList.map(eachcmnt => (
              <Comment
                key={eachcmnt.id}
                commentDetails={eachcmnt}
                toggleIsLike={this.toggleIsLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
