import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Button, View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from './src/infrastructure/theme/colors';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/Utility/safearea.utility';
import { Divider } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContent,
  DrawerAction,
} from '@react-navigation/drawer';
import { NavigationMaterial } from './src/infrastructure/navigation/navigation';

const AvatarContainer = styled.View`
  align-items: center;
  flex:0.5;
  justifyContent:center;
`;
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text> Welcome To Home Screen </Text>
//     </View>
//   );
// }

const HomeScreen = ({ navigation }) => {
  return <NavigationMaterial />;
};

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome To Notifications Screen </Text>
    </View>
  );
}
const SettingsScreenee = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome To Settings Screen </Text>
    </View>
  );
};

const HelpScreenee = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome To Help Screen </Text>
    </View>
  );
};
const LogoutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome To Logout Screen </Text>
    </View>
  );
};
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <View style={{ backgroundColor: '#7FFFD4', flex: 1 }}>
      <AvatarContainer>
        <Avatar.Icon
          size={140}
          icon="human"
          backgroundColor={colors.brand.primary}
        />
      </AvatarContainer>
      <Divider style={{ backgroundColor: 'white', height: 1 }} />
      <DrawerItem
        label={() => <Text style={{ fontSize: 20 }}>Home</Text>}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        icon={() => <Ionicons name="md-home" size={26} color="black" />}
      />
      <Divider style={{ backgroundColor: 'white', height: 1 }} />
      <DrawerItem
        label={() => <Text style={{ fontSize: 20 }}>Notification</Text>}
        onPress={() => {
          props.navigation.navigate('Notifications');
        }}
        icon={() => (
          <Ionicons name="md-notifications" size={26} color="black" />
        )}
      />
      <Divider style={{ backgroundColor: 'white', height: 1 }} />
      <DrawerItem
        label={() => <Text style={{ fontSize: 20 }}>Settings</Text>}
        onPress={() => {
          props.navigation.navigate('Settings');
        }}
        icon={() => <Ionicons name="md-settings" size={26} color="black" />}
      />
      <Divider style={{ backgroundColor: 'white', height: 1 }} />
      <DrawerItem
        label={() => <Text style={{ fontSize: 20 }}>Help</Text>}
        onPress={() => {
          props.navigation.navigate('Help');
        }}
        icon={() => <Ionicons name="md-help-circle" size={26} color="black" />}
      />
      <Divider style={{ backgroundColor: 'white', height: 1 }} />
      <DrawerItem
        label={() => <Text style={{ fontSize: 20 }}>Logout</Text>}
        onPress={() => {
          props.navigation.navigate('Log out');
        }}
        icon={() => <Ionicons name="log-out-outline" size={26} color="black" />}
      />
      <Divider style={{ backgroundColor: 'white', height: 1 }} />
    </View>
  );
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <NavigationContainer>
            <Drawer.Navigator
              useLegacyImplementation
              initialRouteName="Home"
              drawerContent={(props) => <CustomDrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
              />

              <Drawer.Screen name="Settings" component={SettingsScreenee} />
              <Drawer.Screen name="Help" component={HelpScreenee} />
              <Drawer.Screen name="Log out" component={LogoutScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
