import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import { featuredMenuCategories } from '../data';


interface Props {
    title: String,
    description: String,
    category: Number,
}

const FeaturedRow = ({title, description, category}: Props) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <AntDesign name="arrowright" size={24} color="#00ccbb" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15,}}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {featuredMenuCategories.map( (res, idx) => (
                res?.category === category && 
                <RestaurantCard 
                    key={idx}
                    address={res.address}
                    dishes={res.dishes}
                    genre={"Japanese"}
                    category={category}
                    image={res.image}
                    lat={res.lat}
                    long={res.lon}
                    rating={res.rating}
                    short_description={res.description}
                    title= {res.name}
                    
                />
            ))}
           
            
        </ScrollView>
    </View>
  )
}

export default FeaturedRow