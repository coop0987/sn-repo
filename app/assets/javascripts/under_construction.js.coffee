# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $('#email').focus ->
    if $(this).val() == 'Enter your email address'
      $(this).val ''
    return
  $('#email').focusout ->
    if $(this).val() == ''
      $(this).val 'Enter your email address'
    return
  return