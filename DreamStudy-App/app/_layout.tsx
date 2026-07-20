import { drawerScreenOptions, RootDrawer } from '@/utils/appStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Drawer from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function NativeLayout() {
  return (
    <React.Fragment>
      <RootDrawer
        screenOptions={drawerScreenOptions}
        backBehavior="initialRoute">
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="home" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="home-outline" size={size} color={color} />
                );
              }
            },
            title: 'Home'
          }}
        />
        <Drawer.Screen
          name="revision"
          options={{
            drawerLabel: 'Revision',
            drawerIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="book" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="book-outline" size={size} color={color} />
                );
              }
            },
            title: 'Revision'
          }}
        />
        <Drawer.Screen
          name="notes"
          options={{
            drawerLabel: 'Notes',
            drawerIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="albums" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="albums-outline" size={size} color={color} />
                );
              }
            },
            title: 'Notes'
          }}
        />
        <Drawer.Screen
          name="journey"
          options={{
            drawerLabel: 'Journey',
            drawerIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="map" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="map-outline" size={size} color={color} />
                );
              }
            },
            title: 'Journey'
          }}
        />
        <Drawer.Screen
          name="support"
          options={{
            drawerIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="help" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="help-outline" size={size} color={color} />
                );
              }
            },
            drawerLabel: 'Support',
            title: 'Support'
          }}
        />
      </RootDrawer>
      {/* <GuideButton /> */}
      <StatusBar style="auto" />
    </React.Fragment>
  );
}
