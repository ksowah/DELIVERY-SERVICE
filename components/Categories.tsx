import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
    >
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard image="https://links.papareact.com/gn7" title="testing"/>
    </ScrollView>
  )
}

export default Categories