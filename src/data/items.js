import React from 'react'

export const getItems = async () => {
  const response = await fetch('https://mysterious-savannah-64434.herokuapp.com/items')
  return response.json()
}