import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../home/Home";
import Write from "../write/Write";
import Calendar from "../calendar/Calendar";

const BottomTab = createBottomTabNavigator();

export default function BottomStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={40} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Write"
        component={Write}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="plus-box"
              color={"#67BA27"}
              size={55}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="calendar-check"
              color={"black"}
              size={40}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
