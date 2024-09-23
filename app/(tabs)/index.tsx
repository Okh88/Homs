import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "red", height:130 }}>

      <Text style={{ fontSize: 40 }}>RÖD
      </Text>
      </View>
  
    <View style={{ height: 135, flexDirection: "row" }}>
      <View style={{ backgroundColor: "green", justifyContent: "flex-start", alignItems: "flex-start", flex: 1 }}>
    <Text style={{ fontSize: 40 }}>GRÖN

    </Text>
    </View>

    <View style={{ backgroundColor: "yellow", flex: 1 }}>
      </View>
      </View>

      <View style={{ height: 80, flexDirection: "row" }}>
      <View style={{ backgroundColor: "red", flex: 7 }}>
    </View>
    <View style={{ backgroundColor: "black", flex: 3 }}>
      </View>
      </View>
      <View style={{ height: 483 }}>

      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end", backgroundColor: "orange", height: 52 }}>
      <Text style={{ fontSize: 40 }}>ORANGE

</Text>
    </View>
      </View>
    

      
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
