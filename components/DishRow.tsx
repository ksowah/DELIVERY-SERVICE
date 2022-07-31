import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from "react-currency-formatter"
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    id: String,
    name: String,
    description: String,
    price: Number,
    image: any
}

const DishRow = ({id, name, description, price, image}: Props) => {

    const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
       <View className="flex-row">
      <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">Name</Text>
        <Text className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio obcaecati atque neque iste, fugiat aliquam illum repudiandae quam. </Text>
        <Text className="text-gray-400 mt-2">
            <Currency quantity={10} currency="GBP" />
        </Text>
      </View>

      <View>
        <Image
        style={{
            borderWidth: 1,
            borderColor: "#f3f3f4"
        }} 
        source={require("../assets/asian-1.jpg")}
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