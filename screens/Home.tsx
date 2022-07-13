import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { Entypo, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const Home = () => {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    })
  })

  return (
    <SafeAreaView className="bg-white">
      <View>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{uri: "https://links.papareact.com/wru"}}
            className = "h-7 w-7 bg-gray-600 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className = "font-bold text-gray-400">
              Deliver now
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <Entypo name="chevron-down" size={24} color="#00ccbb" />
            </Text>
          </View>

          <FontAwesome5 name="user" size={35} color="#00ccbb" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={20} color="gray" />
            <TextInput 
              placeholder='Restaurants and cuisines'
              keyboardType='default'
            />
          </View>
          <MaterialCommunityIcons name="fence" size={24} color="#00ccbb" />
        </View>

        <ScrollView 
           className="bg-gray-100"
           contentContainerStyle={{paddingBottom: 100}}
        >
          <Categories />

          <FeaturedRow title={"Featured"} description="Paid placements from our partners" id={"123"}/>
          <FeaturedRow title={"Featured"} description="Paid placements from our partners" id={"123"}/>
          <FeaturedRow title={"Featured"} description="Paid placements from our partners" id={"123"}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home