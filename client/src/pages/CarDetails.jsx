import React, {usestate, useEffect}from 'react'
import {useParams} from 'react-router-dom'
import {assests} from '../assets'
import carImages from '../components/carImages'

const CarDetails = () => {
  const [car, setCar] = useState(null)
  const {id} = useParams()
  const [prickUpDate, setPickupDate] = useState('')
  return (
    <div>CarDetails</div>

  )
}

export default CarDetails