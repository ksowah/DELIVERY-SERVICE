import { View, Text, TouchableOpacity } from 'react-native'
import Currency from "react-currency-formatter"


const BasketIcon = () => {
  return (
    <View className='absolute bottom-10 z-50 w-full'>
      <TouchableOpacity activeOpacity={0.5} className="bg-[#00ccbb] p-4 rounded-lg flex-row items-center mx-5 space-x-1">
        <Text className="font-extrabold text-lg text-white bg-[#01a296] py-1 px-2">15</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
            <Currency quantity={12} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon