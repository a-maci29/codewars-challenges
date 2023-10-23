// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


if(s.toUpperCase().includes("PM")){
      let oldTime = s.slice(0, 2)
      let newTime = s.slice(2, 8)
      let militaryTime = time[oldTime] + newTime
        return militaryTime   
  }else{
      if(s.slice(0, 2).includes('12')){
        let militaryAMTime = '00'
        return militaryAMTime + s.slice(2, 8)
      }else{
          return s.slice(0, 8)
      }   
  }