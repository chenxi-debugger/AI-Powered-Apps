import React, { useState } from 'react';

export default function InputBox({ onSend, loading }) {
   const [text, setText] = useState('');
   const theme = useThemeStore((state) => state.theme);
   const isDark = theme === 'dark';

   const handleSend = () => {
      if (!text.trim()) return;
      onSend(text);
      setText('');
   };

   return (
      <View
         style={[
            styles.container,
            { backgroundColor: isDark ? '#1e293b' : '#f1f5f9' },
         ]}
      >
         <TextInput
            style={[
               styles.input,
               {
                  backgroundColor: isDark ? '#334155' : '#e2e8f0',
                  color: isDark ? 'white' : '#0f172a',
               },
            ]}
            placeholder={loading ? 'Assistant typing...' : 'Type a message...'}
            placeholderTextColor={isDark ? '#94a3b8' : '#64748b'}
            value={text}
            onChangeText={setText}
            editable={!loading}
            multiline
         />
         <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSend}
            disabled={loading}
         >
            {loading ? (
               <ActivityIndicator color="white" />
            ) : (
               <Text style={styles.buttonText}>Send</Text>
            )}
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'flex-end',
   },
   input: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 10,
      marginRight: 8,
      maxHeight: 100,
   },
   button: {
      backgroundColor: '#22c55e',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 10,
      justifyContent: 'center',
   },
   buttonDisabled: {
      backgroundColor: '#4ade80',
      opacity: 0.6,
   },
   buttonText: {
      color: 'white',
      fontWeight: 'bold',
   },
});
