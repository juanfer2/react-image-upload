import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import avatarImage from '../../assets/images/avatar.png'

function Cards({ headerTitle, content }: InferProps<typeof Cards.propTypes>) {
  return (
    <article className="card">
      <header className="card-header">
        <p> {headerTitle} </p>
        <h2>{content} </h2>
      </header>
      <div className="card-author">
        <a className="author-avatar" href="#">
          <img src={avatarImage} />
        </a>
        <svg className="half-circle" viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div className="author-name">
          <div className="author-name-prefix">Author</div>
          Jeff Delaney
        </div>
      </div>
    </article>
  )
}

Cards.propTypes = {
  headerTitle: PropTypes.string,
  content: PropTypes.string,
}

export default Cards
