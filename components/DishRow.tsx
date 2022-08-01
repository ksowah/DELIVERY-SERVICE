import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from "react-currency-formatter"
import { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
    name: String,
    description: string,
    price: number,
    id: number,
    image: any
}

const DishRow = ({ name, description, price, image, id}: Props) => {

    const [isPressed, setIsPressed] = useState(false)
    const [item, setItem] = useState({})
    const [count, setCount] = useState(1)
    const [basketItem, setBasketItem] = useState({name, description, price, image, quantity: 1, id})

    // const clearAll = async () => {
    //   try {
    //     await AsyncStorage.clear()
    //   } catch(e) {
    //     // clear error
    //   }
    
    //   console.log('cleared.')
    // }

    // useEffect(() => {
    //   clearAll()
    // }, [])
    
      

  return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
       <View className="flex-row">
      <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt-2">
            <Currency quantity={price} currency="GBP" />
        </Text>
      </View>

      <View>
        <Image
        style={{
            borderWidth: 1,
            borderColor: "#f3f3f4"
        }} 
        source={image}
        className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
      </View>
    </TouchableOpacity>

        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity>
                    <AntDesign name="minuscircle" size={40} color="#00ccbb" />
                    </TouchableOpacity>

                    <Text>0</Text>

                    <TouchableOpacity>
                    <AntDesign name="pluscircle" size={40} color="#00ccbb" />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  )
}

export default DishRow