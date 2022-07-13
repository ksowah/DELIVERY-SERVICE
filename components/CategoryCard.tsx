import { View, Text, TouchableOpacity, Image } from 'react-native'



interface Props {
    image: String,
    title: String
}


const CategoryCard = ({image, title}: Props) => {

  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{uri: image || "https://links.papareact.com/wru"}}
        className="w-20 h-20 rounded"
      />
      <Text className="absolute bottom-0 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard