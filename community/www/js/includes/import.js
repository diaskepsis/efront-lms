function addBox(el) {
 Element.extend(el); el.up().up().next().show(); el.hide();
}


function changeCategory(select_type) {
 $('password_explaination').hide();
 $('users_help').hide();
 $('users_to_courses_help').hide();
 $('users_to_groups_help').hide();

 if (version == "enterprise" && $('branches_help')) {
  $('branches_help').hide();
  $('job_descriptions_help').hide();
  $('skills_help').hide();
  $('users_to_jobs_help').hide();
  $('users_to_skills_help').hide();
 }

 if (select_type != "anything") {
  $(select_type + '_help').show();
  $('password_explaination').show();
 }
}
