// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {item, toggleIsStarred} = props

  const onClickStarBtn = () => {
    toggleIsStarred(item.id)
  }

  const starImg = item.isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-container">
      <div className="title-star-container">
        <p className="title">{item.title}</p>
        <button
          type="button"
          className="star-btn"
          data-testid="star"
          onClick={onClickStarBtn}
        >
          <img src={starImg} alt="star" />
        </button>
      </div>
      <p className="date">Date: {item.date}</p>
    </li>
  )
}

export default AppointmentItem
