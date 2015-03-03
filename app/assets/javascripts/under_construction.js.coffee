# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $(".mymodal").remodal()
  #$('.modal').on 'show.bs.modal', centerModal
  $(window).on 'resize', ->
   # $('.modal:visible').each centerModal
    return
  $('input:-webkit-autofill').each ->
    text = $(this).val()
    name = $(this).attr('name')
    $(this).after(@outerHTML).remove()
    $('input[name=' + name + ']').val text
    return
  $('#email').focus ->
    if $(this).val() == 'Enter your email address'
      $(this).val ''
    return
  $('#email').focusout ->
    if $(this).val() == ''
      $(this).val 'Enter your email address'
    return
  return
  