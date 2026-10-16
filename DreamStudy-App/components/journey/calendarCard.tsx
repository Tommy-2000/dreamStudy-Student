import { Card } from '@/components/card';
import { MaterialIconButton } from '@/components/materialIconButton';
import { TextCard } from '@/components/textCard';
import { buttonStyles, calendarTheme, cardStyles } from '@/utils/appStyles';
import {
    Calendar,
    useCalendar,
    type CalendarProps
} from '@marceloterreiro/flash-calendar';
import { memo, useMemo } from 'react';

export interface CalendarCardProps extends CalendarProps {
  onCalendarPastMonthPress: () => void;
  onCalendarNextMonthPress: () => void;
}

const ICON_SIZE = 20;
const DAY_HEIGHT = 75;

export const CalendarCard = memo((calendarProps: CalendarCardProps) => {
  const { calendarRowMonth, weekDaysList, weeksList } =
    useCalendar(calendarProps);

  const today = useMemo(() => {
    return weeksList.flatMap(week => week).find(day => day.isToday);
  }, [weeksList]);

  return (
    <Card style={cardStyles.calendarCardContainer}>
      <Calendar.VStack>
        <Calendar.HStack
          alignItems="center"
          justifyContent="space-evenly"
          width="100%">
          <MaterialIconButton
            iconName="arrow-back"
            iconSize={ICON_SIZE}
            onPress={calendarProps.onCalendarPastMonthPress}
            accessibilityHint="Arrow Left"
            style={buttonStyles.iconButton}
          />
          <TextCard>{calendarRowMonth}</TextCard>
          <MaterialIconButton
            iconName="arrow-forward"
            iconSize={ICON_SIZE}
            onPress={calendarProps.onCalendarNextMonthPress}
            accessibilityHint="Arrow Right"
            style={buttonStyles.iconButton}
          />
        </Calendar.HStack>
        <Card style={cardStyles.gapCard} />
        <Calendar.Row.Week spacing={20}>
          {weekDaysList.map((day, i) => (
            <Calendar.Item.WeekName
              height={35}
              key={i}
              theme={calendarProps.theme?.itemWeekName}>
              {day}
            </Calendar.Item.WeekName>
          ))}
        </Calendar.Row.Week>

        {weeksList.map((week, i) => (
          <Calendar.Row.Week key={i}>
            {week.map((day, i) => (
              <Calendar.Item.Day.Container
                dayHeight={DAY_HEIGHT}
                daySpacing={16}
                isStartOfWeek={day.isStartOfWeek}
                key={i}>
                <Calendar.Item.Day
                  height={DAY_HEIGHT}
                  metadata={day}
                  onPress={calendarProps.onCalendarDayPress}
                  theme={calendarTheme.itemDay}>
                  {day.displayLabel}
                </Calendar.Item.Day>
              </Calendar.Item.Day.Container>
            ))}
          </Calendar.Row.Week>
        ))}
      </Calendar.VStack>
    </Card>
  );
});
