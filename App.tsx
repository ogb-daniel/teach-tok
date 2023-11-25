import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider as MCQProvider } from "./src/context/MCQContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import ActivityScreen from "./src/screens/ActivityScreen";
import BookmarkScreen from "./src/screens/BookmarkScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MCQProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: "black" } }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity {...props}>
                  <Entypo name="home" size={24} color="white" />
                  <Text style={{ color: "#fff", fontSize: 10 }}>Home</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity {...props}>
                  <FontAwesome5 name="safari" size={24} color="#b5b4b1" />
                  <Text style={{ color: "#fff", fontSize: 10 }}>Discover</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={ActivityScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity {...props}>
                  <MaterialCommunityIcons
                    name="timer"
                    size={24}
                    color="#b5b4b1"
                  />

                  <Text style={{ color: "#fff", fontSize: 10 }}>Activity</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Bookmarks"
            component={BookmarkScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity {...props}>
                  <FontAwesome name="bookmark" size={24} color="#b5b4b1" />
                  <Text style={{ color: "#fff", fontSize: 10 }}>Bookmarks</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity {...props}>
                  <FontAwesome name="user-circle" size={24} color="#b5b4b1" />
                  <Text style={{ color: "#fff", fontSize: 10 }}>Profile</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MCQProvider>
  );
}
