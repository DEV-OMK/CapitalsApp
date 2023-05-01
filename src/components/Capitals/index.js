import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedItem: countryAndCapitalsList[0]}

  updateCapital = event => {
    const index = countryAndCapitalsList.findIndex(
      item => item.id === event.target.value,
    )
    this.setState({selectedItem: countryAndCapitalsList[index]})
  }

  render() {
    const {selectedItem} = this.state
    const {id, capitalDisplayText, country} = selectedItem

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Countries And Capitals</h1>
          <div>
            <select
              className="dropdown-list"
              id="dropdown"
              value={id}
              onChange={this.updateCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="dropdown" className="label-text">
              is capital of which country?
            </label>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
