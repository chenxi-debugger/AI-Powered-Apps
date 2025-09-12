import { useThemeStore } from '@/store/themeStore';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessageBubble({ message }) {
   const theme = useThemeStore((state) => state.theme);
   const isDark = theme === 'dark';
   const isUser = message.sender === 'user';

   return (
      <View
         style={[
            styles.bubbleWrapper,
            {
               alignItems: isUser ? 'flex-end' : 'flex-start',
            },
         ]}
      >
         <View
            style={[
               styles.bubble,
               {
                  backgroundColor: isUser
                     ? isDark
                        ? '#3b82f6' // 蓝色气泡（dark mode）
                        : '#60a5fa' // 蓝色气泡（light mode）
                     : isDark
                       ? '#1e293b' // 深灰 assistant（dark mode）
                       : '#e5e7eb', // 浅灰 assistant（light mode）
               },
            ]}
         >
            <Text
               style={{
                  color: isUser ? 'white' : isDark ? '#f1f5f9' : '#0f172a',
               }}
            >
               {message.text}
            </Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   bubbleWrapper: {
      paddingHorizontal: 10,
      paddingVertical: 4,
   },
   bubble: {
      padding: 12,
      borderRadius: 16,
      maxWidth: '80%',
   },
});
