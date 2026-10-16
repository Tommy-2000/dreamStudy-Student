import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientRenderer } from '@/components/skiaGradientRenderer';
import { TextCard } from '@/components/textCard';
import { appStore } from '@/state/appStores';
import { cardStyles, journeyScreenStyles } from '@/utils/appStyles';
import {
  CalendarActiveDateRange,
  CalendarListRef,
  CalendarOnDayPress,
  fromDateId,
  toDateId
} from '@marceloterreiro/flash-calendar';
import { add, sub } from 'date-fns';
import { format } from 'date-fns/fp';
import { FiberProvider } from 'its-fine';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { CalendarCard } from '../components/journey/calendarCard';

export default function JourneyScreen() {
  // Create a ref to enable imperative scrolling for the CalendarCard
  const calendarScrollRef = useRef<CalendarListRef>(null);

  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date>(
    sub(new Date(), { days: 1 })
  );

  const [isCalendarPickerVisible, setIsCalendarPickerVisible] = useState(true);

  const handleDayPickerPress = useCallback<CalendarOnDayPress>(dateId => {
    // Set the calendar month and selected date based on the dateId passed
    setCurrentCalendarMonth(fromDateId(dateId));
    setSelectedDate(fromDateId(dateId));
    setIsCalendarPickerVisible(false);
    // Scroll to the current date using the CalendarListRef
    calendarScrollRef.current?.scrollToDate(fromDateId(dateId), true);
  }, []);

  const calendarActiveDateRanges = useMemo<CalendarActiveDateRange[]>(
    () => [
      {
        startId: toDateId(selectedDate),
        endId: toDateId(selectedDate)
      }
    ],
    [selectedDate]
  );

  const handlePastMonthPress = useCallback(() => {
    const pastMonth = sub(currentCalendarMonth, { months: 1 });
    setCurrentCalendarMonth(pastMonth);
    calendarScrollRef.current?.scrollToMonth(pastMonth, true);
  }, [currentCalendarMonth]);

  const handleNextMonthPress = useCallback(() => {
    const nextMonth = add(currentCalendarMonth, { months: 1 });
    setCurrentCalendarMonth(nextMonth);
    calendarScrollRef.current?.scrollToMonth(nextMonth, true);
  }, [currentCalendarMonth]);

  return (
    // Wrap the root of each screen with FibreProvider to allow for context
    //  to be shared between Skia components that are rendered on the screen
    // Provider is for Redux state and FibreProvider is for Skia context sharing
    <Provider store={appStore}>
      <FiberProvider>
        <ParallaxScrollCard
          headerBackgroundColor={{}}
          headerBackground={<SkiaGradientRenderer />}>
          <Card style={journeyScreenStyles.titleContainer}>
            <TextCard type="title">Journey</TextCard>
          </Card>
          <Card style={cardStyles.gapCard} />
          <TextCard type="title">Calendar</TextCard>
          <Card>
            <CalendarCard
              calendarMonthId={toDateId(currentCalendarMonth)}
              calendarActiveDateRanges={calendarActiveDateRanges}
              calendarMaxDateId="2030-12-31"
              calendarMinDateId="2026-07-20"
              getCalendarWeekDayFormat={format('E')}
              onCalendarPastMonthPress={handlePastMonthPress}
              onCalendarNextMonthPress={handleNextMonthPress}
              onCalendarDayPress={handleDayPickerPress}
            />
          </Card>
        </ParallaxScrollCard>
      </FiberProvider>
    </Provider>
  );
}
