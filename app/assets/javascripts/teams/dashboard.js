// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function handleAddNewMemberButton() {
  $('.add-team-member-link').off('click').on('click', function(e) {
    $('.add-team-member-btn').click();
    e.preventDefault();
  });
}

function handleApplyTravelReimbursementButton() {
  $('.apply-travel-reimbursement-link').off('click').on('click', function(e) {
    $('.apply-travel-reimbursement-btn').click();
    e.preventDefault();
  });
}
