const usernames = [
  {username:'standard_user', expected:'inventory'},
  {username:'locked_out_user', expected:'error'},
  {username:'problem_user', expected:'inventory'},
  {username:'performance_glitch_user', expected:'inventory'},
  {username:'error_user', expected:'inventory'},
  {username:'visual_user', expected:'inventory'}
];

module.exports = usernames;