import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Text } from '@/components';
import { BottomBarPlus, Compass, Star } from '@/components/icons';
import { theme } from '@/config/theme';

export const PromotionsBottomBar = ({ navigation }: BottomTabBarProps) => {
  const routeIndex = navigation.getState().index;

  const isPromotionsTabActive = routeIndex === 0;
  const promotionTabColor = isPromotionsTabActive
    ? theme.bottomTabBtnActive
    : theme.bottomTabBtnPassive;

  const isWalletTabActive = routeIndex === 1;
  const walletTabColor = isWalletTabActive
    ? theme.bottomTabBtnActive
    : theme.bottomTabBtnPassive;

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Promotions')}
        >
          <View style={styles.tabBtn}>
            <Compass width={26} color={promotionTabColor} />

            <Text
              bold
              style={[styles.tabBtnTitle, { color: promotionTabColor }]}
            >
              KEŞFET
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.logoContainer}>
          <View style={styles.logoShadow} />
          <View style={styles.logo}>
            <BottomBarPlus width={36} />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Wallet')}>
          <View style={styles.tabBtn}>
            <Star width={26} color={walletTabColor} />
            <Text bold style={[styles.tabBtnTitle, { color: walletTabColor }]}>
              DAHA CÜZDAN
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.bottomBarBorder,
    borderWidth: 2.5,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  tabBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '40%',
    alignItems: 'center',
  },
  tabBtnTitle: {
    textAlign: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    position: 'relative',
  },
  logoShadow: {
    position: 'absolute',
    width: 66,
    height: 46,
    borderRadius: 24,
    top: -38,
    backgroundColor: theme.black,
    opacity: 0.05,
  },
  logo: {
    backgroundColor: theme.white,
    borderTopColor: theme.green,
    borderRightColor: theme.yellow,
    borderBottomColor: theme.orange,
    borderLeftColor: theme.red,
    borderWidth: 3,
    borderRadius: 24,
    padding: 12,
    position: 'absolute',
    top: -44,
  },
});