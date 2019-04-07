import {MDCRipple} from '@material/ripple/index';

const ripple = new MDCRipple(document.querySelector('.mdc-button'));
var x = document.getElementsByClassName('mdc-button');
var i;
for (i = 0; i < x.length; i++) {
    MDCRipple.attachTo(x[i]);
}
var x = document.getElementsByClassName('ripple-light-bg');
var i;
for (i = 0; i < x.length; i++) {
    MDCRipple.attachTo(x[i]);
}
var x = document.getElementsByClassName('ripple-dark-bg');
var i;
for (i = 0; i < x.length; i++) {
    MDCRipple.attachTo(x[i]);
}

import {MDCTextField} from '@material/textfield';
const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new MDCTextField(el);
});

import {MDCSnackbar} from '@material/snackbar';
const snackbar = [].map.call(document.querySelectorAll('.mdc-snackbar'), function(el) {
  return new MDCTextField(el);
});

import {MDCList} from '@material/list';
const list = new MDCList(document.querySelector('.mdc-list'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

import {MDCRadio} from '@material/radio';

const radio = new MDCRadio(document.querySelector('.mdc-radio'));
formField.input = radio;
