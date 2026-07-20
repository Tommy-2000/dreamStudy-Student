import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Tabs } from 'expo-router';
import React from 'react';
import { RootTabs, tabScreenOptions } from '../utils/appStyles';

export default function WebLayout() {
  return (
    <React.Fragment>
      <RootTabs screenOptions={tabScreenOptions} backBehavior="fullHistory">
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => {
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
        <Tabs.Screen
          name="revision"
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="book" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="book-outline" size={size} color={color} />
                );
              }
            },
            tabBarLabel: 'Revision',
            title: 'Revision'
          }}
        />
        <Tabs.Screen
          name="notes"
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="albums" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="albums-outline" size={size} color={color} />
                );
              }
            },
            tabBarLabel: 'Notes',
            title: 'Notes'
          }}
        />
        <Tabs.Screen
          name="journey"
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="map" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="map-outline" size={size} color={color} />
                );
              }
            },
            tabBarLabel: 'Journey',
            title: 'Journey'
          }}
        />
        <Tabs.Screen
          name="support"
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="help" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="help-outline" size={size} color={color} />
                );
              }
            },
            tabBarLabel: 'Support',
            title: 'Support'
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="person" size={size} color={color} />;
              } else {
                return (
                  <Ionicons name="person-outline" size={size} color={color} />
                );
              }
            },
            tabBarLabel: 'User',
            title: 'User'
          }}
        />
      </RootTabs>
      {/* <GuideButton /> */}
      <StatusBar style="auto" />
    </React.Fragment>
  );
}
