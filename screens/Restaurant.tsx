import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const Restaurant = () => {

  const navigation = useNavigation()

  const { params:
    {
      id, image, title, rating, genre, address, short_description, dishes, long, lat
    }
  } : any = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    })
  }, [])

  return (
    <>

    <BasketIcon />


    <ScrollView>
      <View
        className={`relative`}
      >
        <Image 
          source={image}
          className={`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full" >
        <AntDesign name="arrowleft" size={24} color="#00ccbb" />
        </TouchableOpacity>
      </View>

      <View className={'bg-white'}>
        <View className="px-4 pt-4 ">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            
            <View className="flex-row items-center space-x-1 ">
            <AntDesign name="star" size={22} color="#00ccbb" className="opacity-[0.5]"/>
            <Text className="text-xs text-green-500">
              {rating} <Text className="text-gray-500">• {genre}</Text> 
            </Text>
            </View>

            <View className="flex-row items-center space-x-1 ">
            <Foundation name="marker" size={23} color="gray" className="opacity-[0.5]"/>
            <Text className="text-xs text-gray-500">
             Nearby • {address}
            </Text>
            </View>
          </View>

        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        
        </View>
      <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
      <AntDesign name="questioncircleo" size={20} color="gray" />
      <Text className="pl-2 flex-1 text-md font-bold" >Have a food allergy?</Text>
      <Entypo name="chevron-right" size={24} color="#00ccbb" />
      </TouchableOpacity> 
      </View>

      <View className="pb-36">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">
          Menu
        </Text>
      {dishes?.map( (dish: any, idx: number) => (        
        <DishRow key={idx} description={dish.desc} price={dish.price} image={dish.image} name={dish.name} id={dish.id} />
      ) )}
       
      </View>
    </ScrollView>

    </>
  )
}

export default Restaurant