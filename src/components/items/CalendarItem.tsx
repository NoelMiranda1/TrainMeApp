import React from 'react';

import styled from 'styled-components/native';
import {TRAINME_COLOR} from '@constants/theme';
interface Item {
  item: {
    id: number;
    currentDay: boolean;
    day: string;
    date: string;
    task: Array<Task>;
  };
}
interface Task {
  id: number;
  title: string;
  hour: string;
  evaluation: boolean;
}
function CalendarItem(props: Item) {
  const {item} = props;
  var Day = item.currentDay;
  return (
    <Content
      key={item.id}
      style={{backgroundColor: Day ? '#DAE9FD' : '#F2F7FE'}}>
      <Text>{item.day}</Text>
      <TextDate>{item.date}</TextDate>
      {item.task.length > 0 ? (
        <>
          {item?.task.map(t => {
            const task = t.evaluation;
            return (
              <TaskContent
                style={{backgroundColor: task ? '#05064C' : TRAINME_COLOR}}>
                <Task key={t.id}>
                  <TextTask>{t.title}</TextTask>
                  <TextTask>{t.hour}</TextTask>
                </Task>
              </TaskContent>
            );
          })}
        </>
      ) : null}
    </Content>
  );
}
const TaskContent = styled.View`
  padding: 5px;
  margin-vertical: 5px;
  border-radius: 10px;
`;
const Task = styled.View`
  width: 100%;
`;
const TextTask = styled.Text`
  color: #fff;
  font-size: 13px;
`;
const Content = styled.View`
  width: 110px;
  height: 265px;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
`;
const Text = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

const TextDate = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;
export default CalendarItem;
