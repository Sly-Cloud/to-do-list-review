import './style.css';
import checkboxesEvent from './status-update';
import {
  displayTasks, edit, clear, add,
} from './add-remove.js';

displayTasks();
checkboxesEvent();
edit();
clear();
add();