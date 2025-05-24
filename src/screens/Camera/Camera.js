import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import io from 'socket.io-client';
import style from '../../theme/style';

const Camera = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [label, setLabel] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = io('http://127.0.0.1:5000');

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('image', (data) => {
      setImageSrc(`data:image/jpeg;base64,${data.image}`);
      setLabel(data.label);
      setAdvice(data.advice);
      setLoading(false);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
      <ScrollView contentContainerStyle={{ padding: 16, alignItems: 'center' }}>
         <Text style={[style.apptitle]}>Giám sát lá cây</Text>

        <View
          style={{
            width: '100%',
            height: 300,
            backgroundColor: '#CCC',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16,
            overflow: 'hidden',
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#007AFF" />
          ) : imageSrc ? (
            <Image
              source={{ uri: imageSrc }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          ) : (
            <Text>Không có hình ảnh từ camera</Text>
          )}
        </View>

        {label ? (
          <View
            style={{
              backgroundColor: '#FFF',
              padding: 16,
              borderRadius: 12,
              width: '100%',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 8 }}>
              Trạng thái lá: {label}
            </Text>
            <Text style={{ fontSize: 16, color: '#555' }}>{advice}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Camera;
