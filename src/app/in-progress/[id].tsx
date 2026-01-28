import { useLocalSearchParams } from "expo-router"
import { View } from "react-native"
import { PageHeader } from "@/components/PageHeader"

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>

      <PageHeader
      title="Apple Watch"
      rightButton={{
        icon:"edit",
        onpress:() => {},
      }}
      />
    </View>
  )
}