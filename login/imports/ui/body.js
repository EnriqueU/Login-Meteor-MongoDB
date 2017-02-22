import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';

Template.body.events({
  'submit .dark-matter'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const nombre = target.text1.value;
    const apellido = target.text2.value;
    const username = target.text3.value;
    const password = target.text4.value;
    const email = target.text5.value;

    console.log(event);    
    
    // Insert a task into the collection
    Tasks.insert({
      nombre,
      apellido,
      username,
      password,
      email,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text1.value = '';
    target.text2.value = '';
    target.text3.value = '';
    target.text4.value = '';
    target.text5.value = '';
  },
});
