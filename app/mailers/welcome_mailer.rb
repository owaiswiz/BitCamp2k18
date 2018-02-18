class WelcomeMailer < ApplicationMailer
  default from: 'info.bitcamp@csirait.com'

  def welcome_email(team)
    @team = team
    mail to: @team.email, subject: 'Congrats ! Your team is registered for Bitcamp 2018!'
  end
end
