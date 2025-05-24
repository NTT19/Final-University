import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          // Token tồn tại => chuyển vào app chính
          navigation.reset({
            index: 0,
            routes: [{ name: 'MyTabs' }],
          });
        } else {
          // Không có token => chuyển về login
          navigation.reset({
            index: 0,
            routes: [{ name: 'Intro' }],
          });
        }
      } catch (e) {
        // Lỗi đọc token cũng chuyển về login
        navigation.reset({
          index: 0,
          routes: [{ name: 'Intro' }],
        });
      }
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' }
});
