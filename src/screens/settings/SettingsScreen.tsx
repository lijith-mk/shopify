import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colors, spacing} from '../../theme';

export const SettingsScreen = () => {
  const settingsGroups = [
    {
      title: 'Account',
      items: [
        {id: '1', label: 'Change Password', icon: '🔒'},
        {id: '2', label: 'Privacy Settings', icon: '🔐'},
      ],
    },
    {
      title: 'Notifications',
      items: [
        {id: '3', label: 'Push Notifications', icon: '🔔'},
        {id: '4', label: 'Email Notifications', icon: '📧'},
      ],
    },
    {
      title: 'App',
      items: [
        {id: '5', label: 'Language', icon: '🌐'},
        {id: '6', label: 'About', icon: 'ℹ️'},
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {settingsGroups.map((group, index) => (
        <View key={index} style={styles.group}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.groupItems}>
            {group.items.map(item => (
              <TouchableOpacity key={item.id} style={styles.item}>
                <View style={styles.itemLeft}>
                  <Text style={styles.itemIcon}>{item.icon}</Text>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                </View>
                <Text style={styles.itemArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  group: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  groupItems: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  itemLabel: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  itemArrow: {
    fontSize: 24,
    color: colors.gray400,
  },
});
