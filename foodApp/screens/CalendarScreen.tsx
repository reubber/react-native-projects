import { addDays, format, getDate, startOfWeek } from 'date-fns';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'

type Props = {
}


export const CalendarContainer: React.FC = () =>{

  return (
    <View>
      <Calendar
        current={'2021-02-21'}
        minDate={'2021-02-10'}
        maxDate={'2012-05-30'}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        monthFormat={'MM yyyy'}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        hideArrows={false}
        renderArrow={direction => <React.Fragment />}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={true}
        showWeekNumbers={true}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={date => {
        }}
        enableSwipeMonths={true}
      />
    </View>  
  )
}

type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
}

export const getWeekDays = (date: Date): [] => {
  const start = startOfWeek(date, {weekStartsOn: 1});

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
};

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  weekDayText: {
    color: 'gray',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  container: {
    flexDirection: 'row'
  }
})