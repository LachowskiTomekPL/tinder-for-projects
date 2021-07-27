import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './Dashboard.css'

const card1 = {
  image: 'http://shezannj.com/wp-content/uploads/2019/01/dummy-logo-png-7.png',
  name: 'Trauma APP',
  subtitle: 'Trauma Team International',
  description:
    "We are looking for an experienced full-stack web developer, who helps us improve our Trauma App. New functionalities will allow Trauma paramedics to respond even faster to our client's every sudden emergency.",
  features: [
    {
      name: 'qualifications',
      values: [
        'React.js',
        'Node.js',
        'Express',
        'Mongo DB',
        'Mongoose',
        '4+ Years of Experience',
      ],
    },
    {
      name: 'benefits',
      values: ['Fully Remote', 'Flat Structure', 'Competetive Salary'],
    },
  ],
}

const card2 = {
  image:
    'https://s.ciekawostkihistoryczne.pl/uploads/2019/03/Albert_Einstein_Head.jpg',
  name: 'Albert Einstein',
  subtitle: 'Aspiring full-stack developer',
  description:
    'I know nothing about web development. I have developed the theory of relativity, though, so developing minor web apps won’t be a problem for me!',
  features: [
    {
      name: 'Skills',
      values: ['Physics', 'Philosophy', 'Quantum Theory', 'Mathematics'],
    },
    {
      name: 'Achievments',
      values: ['E=mc2', 'Nobel Prize in Physics', 'Proper Genius'],
    },
  ],
}

const Dashboard = ({ role }) => {
  const [card, setCard] = useState(null)
  useEffect(() => {
    if (role === 'developer') {
      setCard(card1)
    } else if (role === 'project') {
      setCard(card2)
    }
  }, [role])

  return (
    <div className="dashboard">
      <Card card={card} />
    </div>
  )
}

export default Dashboard
