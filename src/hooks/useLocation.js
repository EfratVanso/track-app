
        import { useState, useEffect } from 'react';
        import {
          Accuracy,
          requestPermissionsAsync,
          watchPositionAsync,
        } from 'expo-location';
        
        export default (shouldTrack, callback) => {
          const [err, setErr] = useState(null);
          const [subscriber, setSubscriber] = useState(null);
        
          const startWatching = async () => {
            try {
              const { granted } = await requestPermissionsAsync();
              if (!granted) {
                throw new Error('Location permission not granted');
              }
              const sub = await watchPositionAsync(
                {
                  accuracy: Accuracy.BestForNavigation,
                  timeInterval: 1000,
                  distanceInterval: 10,
                },
                callback //what to do with the recorded location
              );
              setSubscriber(sub);
            } catch (e) {
              setErr(e);
            }
          };
        
          useEffect(() => {
            if (shouldTrack) {
              startWatching();
            } else {
              subscriber.remove();
              setSubscriber(null);
              console.log('removed')
            }
            return ()=>{
                if(subscriber){
              subscriber.remove();  }
            };
          }, [shouldTrack, callback]);
        
          return [err];
        };
        