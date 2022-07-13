import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

interface Props {
    title: String,
    description: String,
    id: String,
}

const FeaturedRow = ({title, description, id}: Props) => {
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
            <RestaurantCard 
                address={"123 Main Street"}
                dishes={[]}
                genre={"Japanese"}
                id={123}
                image={"https://links.papareact.com/gn7"}
                lat={0}
                long={20}
                rating={4.5}
                short_description={"This is a short text description"}
                title="Yo! Sushie"
            />
            <RestaurantCard 
                address={"123 Main Street"}
                dishes={[]}
                genre={"Japanese"}
                id={123}
                image={"https://links.papareact.com/gn7"}
                lat={0}
                long={20}
                rating={4.5}
                short_description={"This is a short text description"}
                title="Yo! Sushie"
            />
            <RestaurantCard 
                address={"123 Main Street"}
                dishes={[]}
                genre={"Japanese"}
                id={123}
                image={"https://links.papareact.com/gn7"}
                lat={0}
                long={20}
                rating={4.5}
                short_description={"This is a short text description"}
                title="Yo! Sushie"
            />
            <RestaurantCard 
                address={"123 Main Street"}
                dishes={[]}
                genre={"Japanese"}
                id={123}
                image={"https://links.papareact.com/gn7"}
                lat={0}
                long={20}
                rating={4.5}
                short_description={"This is a short text description"}
                title="Yo! Sushie"
            />
            
        </ScrollView>
    </View>
  )
}

export default FeaturedRow