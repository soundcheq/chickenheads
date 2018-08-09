import React, { Component } from 'react'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components'
import 'react-big-calendar/lib/css/react-big-calendar.css'

Calendar.setLocalizer(Calendar.momentLocalizer(moment))

class CalendarComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  //testing
  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })
  }
  //testing

  slotSelected = eventSelected => {
    this.setState({
      events: [
        ...this.state.events,
        {
          start: eventSelected.start,
          end: eventSelected.end,
          title: 'Testing'
        }
      ]
    })
  }

  render() {
    const MyCalendar = props => (
      <Calendar
        selectable="true"
        onSelectSlot={props.slotSelected}
        defaultDate={new Date()}
        events={this.state.events}
        style={{ height: '83.4vh', padding: '1rem' }}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        // resizeable="true"
        // onEventResize={this.resizeEvent}
        // onEventDrop={this.moveEvent}
        // showMultiDayTimes="true"
      />
    )
    return (
      <Section>
        <MyCalendar slotSelected={this.slotSelected} />
      </Section>
    )
  }
}

export default CalendarComp

const Section = styled.section``
