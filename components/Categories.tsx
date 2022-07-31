import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../data'



const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
    >
       {
            categories.map( (cat, idx) => (
              <CategoryCard key={idx} image={cat.image} title={cat.title} />
            ) )
        }
      
    </ScrollView>
  )
}

export default Categories 