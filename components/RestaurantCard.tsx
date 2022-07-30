import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


interface Props {
    id: Number,
    image: String,
    title: String,
    rating: Number,
    genre: String,
    address: String,
    short_description: String,
    dishes: any,
    long: Number,
    lat: Number,

}

const RestaurantCard = ({ id, image, title, rating, genre, address, short_description, dishes, long, lat }: Props) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={image}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
        <AntDesign name="star" size={22} color="#00ccbb" className="opacity-50" />
        <Text className="text-xs text-gray-500"> 
            <Text className="text-green-500">{rating}</Text> . {genre}
        </Text>
        </View>

        <View className="flex-row items-center space-x-1">
        <MaterialCommunityIcons name="map-marker-outline" size={22} color="gray" />
        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard