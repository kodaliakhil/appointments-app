// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentsList = [
  {
    id: uuidv4(),
    title: 'Dentist',
    date: '20 July 2021, Tuesday',
    isStarred: false,
  },
  {
    id: uuidv4(),
    title: 'Dentist',
    date: '20 July 2021, Tuesday',
    isStarred: false,
  },
  {
    id: uuidv4(),
    title: 'Dentist',
    date: '20 July 2021, Tuesday',
    isStarred: false,
  },
  {
    id: uuidv4(),
    title: 'Dentist',
    date: '20 July 2021, Tuesday',
    isStarred: false,
  },
  {
    id: uuidv4(),
    title: 'Dentist',
    date: '20 July 2021, Tuesday',
    isStarred: false,
  },
]

class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    title: '',
    date: '',
    filterOn: false,
  }

  onChangeDate = event => {
    // const inputDate = new Date(event.target.value)
    this.setState({
      date: format(new Date(event.target.value), 'dd MMMM yyyy, EEEE'),
    })
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {title, date} = this.state
    // if (title === '' && date === '') {
    //   this.setState(prevState => ({name: prevState.name, date: prevState.date}))
    // } else {}
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  filterStarred = () => {
    this.setState(prevState => ({
      filterOn: !prevState.filterOn,
    }))
  }

  render() {
    const {appointmentsList, title, date, filterOn} = this.state
    console.log(date)
    let filteredAppointmentsList
    if (filterOn) {
      filteredAppointmentsList = appointmentsList.filter(
        eachItem => eachItem.isStarred === true,
      )
    } else {
      filteredAppointmentsList = appointmentsList
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Add Appointment</h1>
          <div className="form-img-container">
            <form className="form-container">
              <label htmlFor="title-input">TITLE</label>
              <input
                className="input"
                placeholder="Title"
                id="title-input"
                type="text"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="date-input">DATE</label>
              <input
                className="input"
                id="date-input"
                type="date"
                value={date}
                onChange={this.onChangeDate}
                placeholder="dd/mm/yyyy"
              />
              <button
                className="add-btn"
                type="submit"
                onClick={this.onClickAddBtn}
              >
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="appointments-head-btn-container">
            <h3>Appointments</h3>
            <button
              className="starred-btn"
              type="button"
              onClick={this.filterStarred}
            >
              Starred
            </button>
          </div>
          <ul className="all-appointments-container">
            {filteredAppointmentsList.map(eachItem => (
              <AppointmentItem
                key={eachItem.id}
                item={eachItem}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
