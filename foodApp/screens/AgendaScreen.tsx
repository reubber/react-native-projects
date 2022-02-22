import React, { useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, Alert} from 'react-native';
import {Agenda, DateData } from 'react-native-calendars';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Avatar, Card } from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';

interface State {
  items?: AgendaSchedule;
}

export declare type AgendaSchedule = {
  [date: string]: AgendaEntryObj[];
};

declare type AgendaEntryObj = {
  horarioInicio: string;
  horarioFim: string;
  name: string;
  height: number;
  day: string;
};

LocaleConfig.locales['ptBr'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outrubo','Novembro','Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.']
}
LocaleConfig.defaultLocale = 'ptBr';

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export const AgendaScreen: React.FC<State> = () => {
  const [items, setItems] = useState<AgendaSchedule>({
    '2022-02-22': [{
      horarioInicio: '10:00',
      horarioFim: '12:00',
      name: 'Agenda Futturis',
      height: 30,
      day: 'terça'
    }]
  });
  
  const date = new Date();
  date.toISOString().split('T')[0];

  const loadItems = (day: DateData) => {

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              horarioInicio: '10:00',
              horarioFim: '12:00',
              name: 'Item ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item: AgendaEntryObj, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{marginRight: 10, marginTop: 17}}
        onPress={() => Alert.alert(item.name)}
      >
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize, color}}>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const rowHasChanged = (r1: AgendaEntryObj, r2: AgendaEntryObj) => {
    return r1.name !== r2.name;
  }
  
  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={date.toString()}
        minDate={date.toString()}
        renderItem={renderItem}
        showOnlySelectedDayItems
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        renderEmptyDate={renderEmptyDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  horarioColor: {
    padding: 10,

  }
});

AgendaScreen.navigationOptions = (navigationData : NavigationStackScreenProps) => {
  return {
    headerTitle: 'Calendario',
    headerTitleAlign: 'center'
    
  }
}