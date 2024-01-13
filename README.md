the first App.js doesn't use derived state to pass the parameters
so there is another App-Deviced.js which achieves the same goal but uses the useEffet function to do this
besides, the second file is also different from the example code from p91, and the way of using derived status is different too

1.
<select>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>

2.const handleSelectChange = (event) => {
    const selectedPercentage = parseFloat(event.target.value);
    setSelectedPercentage(selectedPercentage);
  };
   In this case, it generates an event when a user selects an option from the dropdown list. The event object (event in this case) contains various properties and methods that provide information about the event, such as the selected value in the case of a <select> element. By accessing event.target.value, you can retrieve the selected value and use it in your code.
