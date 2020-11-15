import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '정윤재',
  'birthday': '931220',
  'gender': 'men',
  'job': 'workmen'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '사스케',
  'birthday': '931220',
  'gender': 'men',
  'job': 'workmen'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '나루토',
  'birthday': '931220',
  'gender': 'men',
  'job': 'workmen'
}
]

class App extends Component {
  render () {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
