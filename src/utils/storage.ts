import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Save data
  set: async (key: string, value: any): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  },

  // Get data
  get: async <T>(key: string): Promise<T | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error reading data:', error);
      return null;
    }
  },

  // Remove data
  remove: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
      throw error;
    }
  },

  // Clear all data
  clear: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  },

  // Get multiple items
  getMultiple: async (keys: string[]): Promise<Record<string, any>> => {
    try {
      const values = await AsyncStorage.multiGet(keys);
      const result: Record<string, any> = {};
      
      values.forEach(([key, value]) => {
        if (value) {
          result[key] = JSON.parse(value);
        }
      });
      
      return result;
    } catch (error) {
      console.error('Error getting multiple items:', error);
      return {};
    }
  },

  // Set multiple items
  setMultiple: async (keyValuePairs: [string, any][]): Promise<void> => {
    try {
      const pairs: [string, string][] = keyValuePairs.map(([key, value]) => [
        key,
        JSON.stringify(value),
      ]);
      await AsyncStorage.multiSet(pairs);
    } catch (error) {
      console.error('Error setting multiple items:', error);
      throw error;
    }
  },
};
